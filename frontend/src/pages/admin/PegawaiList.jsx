import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PegawaiList() {
    const [pegawai, setPegawai] = useState([]);

    const fetchPegawai = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/employees');
            setPegawai(res.data);
        } catch (err) {
            console.error('Gagal mengambil data pegawai', err);
        }
    };

    useEffect(() => {
        fetchPegawai();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm('Yakin ingin menghapus data ini?')) return;
        try {
            await axios.delete(`http://localhost:3000/api/pegawai/${id}`);
            fetchPegawai();
        } catch (err) {
            alert('Gagal menghapus data');
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Pegawai</h1>
            <Link
                to="/admin/pegawai/tambah"
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
            >
                Tambah Pegawai
            </Link>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Foto</th>
                        <th className="p-2 border">Nama</th>
                        <th className="p-2 border">Jabatan</th>
                        <th className="p-2 border">LinkedIn</th>
                        <th className="p-2 border">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {pegawai.map((item) => (
                        <tr key={item.id}>
                            <td className="p-2 border text-center">
                                {item.photo_url ? (
                                    <img
                                        src={`http://localhost:5000/${item.photo_url}`}
                                        alt={item.name}
                                        className="h-12 w-12 object-cover rounded-full mx-auto"
                                    />
                                ) : (
                                    <span className="text-gray-400">-</span>
                                )}
                            </td>
                            <td className="p-2 border">{item.name}</td>
                            <td className="p-2 border">{item.position}</td>
                            <td className="p-2 border">
                                <a href={item.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    Lihat
                                </a>
                            </td>
                            <td className="p-2 border space-x-2">
                                <Link
                                    to={`/admin/pegawai/edit/${item.id}`}
                                    className="bg-yellow-400 px-2 py-1 rounded"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PegawaiList;
