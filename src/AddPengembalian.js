import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtInterceptor from './interceptors/axios';

function AddPengembalian() {
    const [jumlah, setJumlah] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [barangkeluarId, setBarangkeluarId] = useState('');
    const [userId, setUserId] = useState('');
    const [unit , setUnit] = useState('');
    const [peminjam, setPeminjam] = useState('');
    const [barangkeluar, setBarangkeluar] = useState([]);
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
        jwtInterceptor.get('http://localhost:5000/barangkeluar')
            .then((res) => {
                setBarangkeluar(res.data);
            }
        );
        jwtInterceptor.get('http://localhost:5000/pegawai')
            .then((res) => {
                setPegawai(res.data);
            }
        );
        setLoading(true);
    }, [loading]);

    const savePengembalian = async (e) => {
        e.preventDefault();
        await jwtInterceptor.post('http://localhost:5000/pengembalian', {
            barangkeluar_id: barangkeluarId,
            jumlah: jumlah,
            user_id: 1,
        });
        setLoading(false);
        navigate("/pengembalian");
    }
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" onSubmit={savePengembalian}>
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Nama</label>
                        <select name="barangkeluar_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => {
                            setTanggal(barangkeluar.find((item) => item.id == e.target.value).createdAt.slice(0, 10));
                            setBarangkeluarId(e.target.value);
                            setPeminjam(barangkeluar.find((item) => item.id == e.target.value).pegawai.nama);
                            setUnit(barangkeluar.find((item) => item.id == e.target.value).barang.satuan.nama);
                        
                        }}>
                            <option value="">Pilih Barang</option>
                            {barangkeluar.map((item) => (
                                <option value={item.id}>{item.barang.nama}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" for="tanggal">Tanggal Peminjaman</label>
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="tanggal" value={tanggal}/>
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
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="peminjam" placeholder="Peminjam" value={peminjam} disabled/>
                    </div>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600" type="submit">Tambahkan</button>
                </div>
            </form>
        </div>
    )
}

export default AddPengembalian;