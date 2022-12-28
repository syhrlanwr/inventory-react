import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jwtInterceptor from './interceptors/axios';

function EditBarang() {
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
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        jwtInterceptor.get(`http://localhost:5000/barang/${id}`).then((res) => {
            setNama(res.data.nama);
            setJumlah(res.data.jumlah);
            setSatuanId(res.data.satuan_id);
            setRakId(res.data.rak_id);
            setJenisId(res.data.jenis_id);
            setPegawaiId(res.data.pegawai_id);
        });
        

        jwtInterceptor.get('http://localhost:5000/satuan')
            .then((res) => {
                setSatuan(res.data);
            });
        jwtInterceptor.get('http://localhost:5000/rak')
            .then((res) => {
                setRak(res.data);
            }
        );
        jwtInterceptor.get('http://localhost:5000/jenis')
            .then((res) => {
                setJenis(res.data);
            }
        );
        jwtInterceptor.get('http://localhost:5000/pegawai')
            .then((res) => {
                setPegawai(res.data);
            }
        );
    }, []);

    const Update = async (e) => {
        e.preventDefault();
        await jwtInterceptor.put('http://localhost:5000/barang/' + id, {
            nama: nama,
            jumlah: jumlah,
            satuan_id: satuanId,
            rak_id: rakId,
            jenis_id: jenisId,
            pegawai_id: pegawaiId,
        }).then(navigate('/barang'));
    };
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" onSubmit={Update}>
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
                                {satuan.map((satuan) => (
                                    <option value={satuan.id}>{satuan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Rak</label>
                        <select name="rak_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setRakId(e.target.value)} value={rakId}>
                            {rak.map((rak) => (
                                <option value={rak.id}>{rak.nama}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Jenis</label>
                        <select name="jenis_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setJenisId(e.target.value)} value={jenisId}>
                            {jenis.map((jenis) => (
                                <option value={jenis.id}>{jenis.nama}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" >Pengirim</label>
                        <select name="pegawai_id" className='bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none' onChange={(e) => setPegawaiId(e.target.value)} value={pegawaiId}>
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

export default EditBarang;