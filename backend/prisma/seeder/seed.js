const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const adminPassword = await bcrypt.hash('admin123', 10);
    const userPassword = await bcrypt.hash('user123', 10);

    // Admin account
    await prisma.user.upsert({
        where: { email: 'admin@nagarihub.id' },
        update: {},
        create: {
            email: 'admin@nagarihub.id',
            name: 'Admin Nagari',
            password: adminPassword,
            role: 'admin',
        },
    });

    //employee directory
    await prisma.employee.createMany({
        data: [
            {
                name: "Andi Prasetyo",
                position: "IT Support",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/andi-prasetyo",
                photo_url: "http://localhost:3000/uploads/andi.jpg",
            },
            {
                name: "Siti Rahma",
                position: "Quality Assurance",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/siti-rahma",
                photo_url: "http://localhost:3000/uploads/siti.jpg",
            },
            {
                name: "Budi Santoso",
                position: "Keamanan Siber",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/budi-santoso",
                photo_url: "http://localhost:3000/uploads/budi.jpg",
            },
            {
                name: "Dewi Lestari",
                position: "Pengembangan",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/dewi-lestari",
                photo_url: "http://localhost:3000/uploads/dewi.jpg",
            },
            {
                name: "Rizky Maulana",
                position: "IT Support",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/rizky-maulana",
                photo_url: "http://localhost:3000/uploads/rizky.jpg",
            },
            {
                name: "Putri Amelia",
                position: "Quality Assurance",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/putri-amelia",
                photo_url: "http://localhost:3000/uploads/putri.jpg",
            },
            {
                name: "Agus Saputra",
                position: "Keamanan Siber",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/agus-saputra",
                photo_url: "http://localhost:3000/uploads/agus.jpg",
            },
            {
                name: "Maya Sari",
                position: "Pengembangan",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/maya-sari",
                photo_url: "http://localhost:3000/uploads/maya.jpg",
            },
            {
                name: "Fajar Nugroho",
                position: "IT Support",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/fajar-nugroho",
                photo_url: "http://localhost:3000/uploads/fajar.jpg",
            },
            {
                name: "Intan Permata",
                position: "Quality Assurance",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/intan-permata",
                photo_url: "http://localhost:3000/uploads/intan.jpg",
            },
            {
                name: "Dedi Kurniawan",
                position: "Keamanan Siber",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/dedi-kurniawan",
                photo_url: "http://localhost:3000/uploads/dedi.jpg",
            },
            {
                name: "Salsa Aulia",
                position: "Pengembangan",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/salsa-aulia",
                photo_url: "http://localhost:3000/uploads/salsa.jpg",
            },
        ],
    });

    // Sample test users
    const testUsers = [
        {
            email: 'user1@example.com',
            name: 'Zakky Demo',
            password: userPassword,
            role: 'intern',
        },
        {
            email: 'user2@example.com',
            name: 'Trilen Demo',
            password: userPassword,
            role: 'intern',
        },
        {
            email: 'user3@example.com',
            name: 'Budi Demo',
            password: userPassword,
            role: 'intern',
        },
    ];

    for (const user of testUsers) {
        const createdUser = await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user,
        });

        // Tambahkan intern profile untuk setiap user
        await prisma.internProfile.upsert({
            where: { user_id: createdUser.id },
            update: {},
            create: {
                user_id: createdUser.id,
                institution_name: 'Universitas Contoh',
                program: 'Sistem Informasi',
                start_date: new Date('2025-08-01'),
                end_date: new Date('2025-08-31'),
            },
        });
    }


    console.log('✅ Seeder berhasil.');
}

main()
    .catch((e) => {
        console.error('❌ Seeder error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
