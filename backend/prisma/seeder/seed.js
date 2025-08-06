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
                position: "Software Engineer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/andi-prasetyo",
                photo_url: "http://localhost:3000/uploads/andi.jpg",
            },
            {
                name: "Siti Rahma",
                position: "Network Administrator",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/siti-rahma",
                photo_url: "http://localhost:3000/uploads/siti.jpg",
            },
            {
                name: "John Doe",
                position: "Data Analyst",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/john-doe",
                photo_url: "http://localhost:3000/uploads/john.jpg",
            },
            {
                name: "Jane Smith",
                position: "UI/UX Designer",
                division: "Design - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/jane-smith",
                photo_url: "http://localhost:3000/uploads/jane.jpg",
            },
            {
                name: "Michael Johnson",
                position: "Backend Developer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/michael-johnson",
                photo_url: "http://localhost:3000/uploads/michael.jpg",
            },
            {
                name: "Emily Davis",
                position: "Frontend Developer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/emily-davis",
                photo_url: "http://localhost:3000/uploads/emily.jpg",
            },
            {
                name: "Chris Brown",
                position: "DevOps Engineer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/chris-brown",
                photo_url: "http://localhost:3000/uploads/chris.jpg",
            },
            {
                name: "Sarah Wilson",
                position: "Project Manager",
                division: "Management - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/sarah-wilson",
                photo_url: "http://localhost:3000/uploads/sarah.jpg",
            },
            {
                name: "David Lee",
                position: "Quality Assurance",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/david-lee",
                photo_url: "http://localhost:3000/uploads/david.jpg",
            },
            {
                name: "Sophia Martinez",
                position: "HR Specialist",
                division: "HR - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/sophia-martinez",
                photo_url: "http://localhost:3000/uploads/sophia.jpg",
            },
            {
                name: "James Anderson",
                position: "Network Engineer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/james-anderson",
                photo_url: "http://localhost:3000/uploads/james.jpg",
            },
            {
                name: "Olivia Thomas",
                position: "Marketing Specialist",
                division: "Marketing - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/olivia-thomas",
                photo_url: "http://localhost:3000/uploads/olivia.jpg",
            },
            {
                name: "Ethan White",
                position: "Content Writer",
                division: "Marketing - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/ethan-white",
                photo_url: "http://localhost:3000/uploads/ethan.jpg",
            },
            {
                name: "Isabella Harris",
                position: "Graphic Designer",
                division: "Design - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/isabella-harris",
                photo_url: "http://localhost:3000/uploads/isabella.jpg",
            },
            {
                name: "Alexander Clark",
                position: "Database Administrator",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/alexander-clark",
                photo_url: "http://localhost:3000/uploads/alexander.jpg",
            },
            {
                name: "Mia Lewis",
                position: "SEO Specialist",
                division: "Marketing - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/mia-lewis",
                photo_url: "http://localhost:3000/uploads/mia.jpg",
            },
            {
                name: "Benjamin Walker",
                position: "System Analyst",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/benjamin-walker",
                photo_url: "http://localhost:3000/uploads/benjamin.jpg",
            },
            {
                name: "Charlotte Hall",
                position: "Recruitment Specialist",
                division: "HR - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/charlotte-hall",
                photo_url: "http://localhost:3000/uploads/charlotte.jpg",
            },
            {
                name: "Daniel Allen",
                position: "IT Support",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/daniel-allen",
                photo_url: "http://localhost:3000/uploads/daniel.jpg",
            },
            {
                name: "Amelia Young",
                position: "Social Media Manager",
                division: "Marketing - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/amelia-young",
                photo_url: "http://localhost:3000/uploads/amelia.jpg",
            },
            {
                name: "Henry King",
                position: "Cloud Engineer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/henry-king",
                photo_url: "http://localhost:3000/uploads/henry.jpg",
            },
            {
                name: "Grace Scott",
                position: "Operations Manager",
                division: "Management - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/grace-scott",
                photo_url: "http://localhost:3000/uploads/grace.jpg",
            },
            {
                name: "Jack Green",
                position: "Security Analyst",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/jack-green",
                photo_url: "http://localhost:3000/uploads/jack.jpg",
            },
            {
                name: "Victoria Adams",
                position: "Business Analyst",
                division: "Management - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/victoria-adams",
                photo_url: "http://localhost:3000/uploads/victoria.jpg",
            },
            {
                name: "Liam Baker",
                position: "Mobile Developer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/liam-baker",
                photo_url: "http://localhost:3000/uploads/liam.jpg",
            },
            {
                name: "Ella Carter",
                position: "Event Coordinator",
                division: "Marketing - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/ella-carter",
                photo_url: "http://localhost:3000/uploads/ella.jpg",
            },
            {
                name: "Noah Mitchell",
                position: "Full Stack Developer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/noah-mitchell",
                photo_url: "http://localhost:3000/uploads/noah.jpg",
            },
            {
                name: "Ava Perez",
                position: "Customer Support",
                division: "Support - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/ava-perez",
                photo_url: "http://localhost:3000/uploads/ava.jpg",
            },
            {
                name: "Lucas Roberts",
                position: "Technical Writer",
                division: "IT - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/lucas-roberts",
                photo_url: "http://localhost:3000/uploads/lucas.jpg",
            },
            {
                name: "Harper Evans",
                position: "Legal Advisor",
                division: "Legal - Pagambiran",
                linkedin_url: "https://www.linkedin.com/in/harper-evans",
                photo_url: "http://localhost:3000/uploads/harper.jpg",
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
