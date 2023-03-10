import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtInterceptor from './interceptors/axios';

function AddBarangKeluar() {
    const [jumlah, setJumlah] = useState('');
    const [barangId, setBarangId] = useState('');
    const [pegawaiId, setPegawaiId] = useState('');
    const [userId, setUserId] = useState('');
    const [unit , setUnit] = useState('');
    const [barang, setBarang] = useState([]);
    const [satuan, setSatuan] = useState([]);
    const [pegawai, setPegawai] = useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        jwtInterceptor.get('http://localhost:5000/satuan')
            .then((res) => {
                setSatuan(res.data);
                console.log(satuan);
            });
        jwtInterceptor.get('http://localhost:5000/barang')
            .then((res) => {
                setBarang(res.data);
            }
        );
        jwtInterceptor.get('http://localhost:5000/pegawai')
            .then((res) => {
                setPegawai(res.data);
            }
        );
        setLoading(true);
    }, [loading]);

    const saveBarangkeluar = async (e) => {
        e.preventDefault();
        await jwtInterceptor.post('http://localhost:5000/barangkeluar', {
            barang_id: barangId,
            jumlah: jumlah,
            pegawai_id: pegawaiId,
            user_id: 1,
        });
        setLoading(false);
        navigate("/barangkeluar");
    }
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" onSubmit={saveBarangkeluar}>
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Nama</label>
                        <select name="barang_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => {setBarangId(e.target.value); setUnit(barang.find((barang) => barang.id == e.target.value).satuan.nama);}} value={barangId}>
                                <option value="">Pilih Barang</option>
                                {barang.map((barang) => (
                                    <option value={barang.id}>{barang.nama}</option>
                                ))}
                            </select>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Jumlah</label>
                        <div className="flex w-full">
                            <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="number" name="jumlah" placeholder="Jumlah" onChange={(e) => setJumlah(e.target.value)} value={jumlah}/>
                            <p className="px-3 py-2 mt-1">{unit}</p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Peminjam</label>
                        <select name="pegawai_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setPegawaiId(e.target.value)} value={pegawaiId}>
                            <option value="">Pilih Peminjam</option>
                            {pegawai.map((pegawai) => (
                                <option value={pegawai.id}>{pegawai.nama}</option>
                            ))}
                        </select>
                    </div>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600" type="submit">Tambahkan</button>
                </div>
            </form>
        </div>
    )
}

export default AddBarangKeluar;