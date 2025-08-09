import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function PegawaiForm() {
    const [form, setForm] = useState({ name: '', position: '', linkedin_url: '', photo: null });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/employees/${id}`).then((res) => {
                setForm({
                    name: res.data.name || '',
                    position: res.data.position || '',
                    linkedin_url: res.data.linkedin_url || '',
                    photo: null
                });
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', form.name);
            formData.append('position', form.position);
            formData.append('linkedin_url', form.linkedin_url);
            if (form.photo) formData.append('photo', form.photo);

            if (id) {
                await axios.put(`http://localhost:5000/api/employees/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            } else {
                await axios.post('http://localhost:5000/api/employees', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            }
            navigate('/admin/pegawai');
        } catch (err) {
            console.error('Gagal menyimpan data:', err);
        }
    };

    return (
        <div className="min-h-screen h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center py-8 px-2">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col gap-6">
                {/* Tombol Back */}
                <button
                    type="button"
                    onClick={() => navigate('/admin/pegawai')}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-2 w-fit px-3 py-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 shadow-md hover:shadow-lg transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <polyline points="15,18 9,12 15,6" />
                    </svg>
                    Kembali
                </button>
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{id ? 'Edit' : 'Tambah'} Pegawai</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full"></div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Nama</label>
                        <input
                            type="text"
                            placeholder="Nama"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 bg-gray-50"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Jabatan</label>
                        <input
                            type="text"
                            placeholder="Jabatan"
                            value={form.position}
                            onChange={e => setForm({ ...form, position: e.target.value })}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 bg-gray-50"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Link LinkedIn</label>
                        <input
                            type="url"
                            placeholder="Link LinkedIn"
                            value={form.linkedin_url}
                            onChange={e => setForm({ ...form, linkedin_url: e.target.value })}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Foto</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={e => setForm({ ...form, photo: e.target.files[0] })}
                            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50"
                        />
                    </div>
                    <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
                    >
                        <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PegawaiForm;
