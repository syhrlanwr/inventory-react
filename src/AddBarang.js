import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBarang() {
    const [nama, setNama] = useState('');
    const [jumlah, setJumlah] = useState('');
    const [satuanId, setSatuanId] = useState('');
    const [rakId, setRakId] = useState('');
    const [jenisId, setJenisId] = useState('');
    const [pegawaiId, setPegawaiId] = useState('');
    const [satuan, setSatuan] = useState([]);
    const [rak, setRak] = useState([]);
    const [jenis, setJenis] = useState([])
    const [pegawai, setPegawai] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/satuan')
            .then((res) => {
                setSatuan(res.data);
            });
        axios.get('http://localhost:5000/rak')
            .then((res) => {
                setRak(res.data);
            }
        );
        axios.get('http://localhost:5000/jenis')
            .then((res) => {
                setJenis(res.data);
            }
        );
        axios.get('http://localhost:5000/pegawai')
            .then((res) => {
                setPegawai(res.data);
            }
        );
    }, []);

    const saveBarang = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/barang', {
            nama: nama,
            jenis_id: jenisId,
            jumlah: jumlah,
            rak_id: rakId,
            satuan_id: satuanId,
            pegawai_id: pegawaiId,
            user_id: 1,
        });
        navigate("/barang");
    }
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" action="/jenis/add" method="POST" onSubmit={saveBarang}>
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Nama</label>
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="nama" placeholder="Nama" onChange={(e) => setNama(e.target.value)} value={nama}/>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Jumlah</label>
                        <div className="flex w-full">
                            <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="number" name="jumlah" placeholder="Jumlah" onChange={(e) => setJumlah(e.target.value)} value={jumlah}/>
                            <select name="satuan_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setSatuanId(e.target.value)} value={satuanId}>
                                <option value="">Pilih Satuan</option>
                                {satuan.map((satuan) => (
                                    <option value={satuan.id}>{satuan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Rak</label>
                        <select name="rak_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setRakId(e.target.value)} value={rakId}>
                            <option value="">Pilih Rak</option>
                            {rak.map((rak) => (
                                <option value={rak.id}>{rak.nama}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Jenis</label>
                        <select name="jenis_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setJenisId(e.target.value)} value={jenisId}>
                            <option value="">Pilih Jenis</option>
                            {jenis.map((jenis) => (
                                <option value={jenis.id}>{jenis.nama}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Pengirim</label>
                        <select name="pegawai_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setPegawaiId(e.target.value)} value={pegawaiId}>
                            <option value="">Pilih Pengirim</option>
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

export default AddBarang;