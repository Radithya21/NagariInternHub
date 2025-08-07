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
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">{id ? 'Edit' : 'Tambah'} Pegawai</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nama"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Jabatan"
                    value={form.position}
                    onChange={e => setForm({ ...form, position: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="url"
                    placeholder="Link LinkedIn"
                    value={form.linkedin_url}
                    onChange={e => setForm({ ...form, linkedin_url: e.target.value })}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={e => setForm({ ...form, photo: e.target.files[0] })}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Simpan
                </button>
            </form>
        </div>
    );
}

export default PegawaiForm;
