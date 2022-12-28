import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtInterceptor from './interceptors/axios';

function KelolaPengembalian(){
    const [pengembalian, setPengembalian] = useState([]);
    const [satuan, setSatuan] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        jwtInterceptor.get('http://localhost:5000/pengembalian').then((res) => {
            setPengembalian(res.data);
            console.log(res.data);
            setLoading(true);
        });
    }, [loading]);

    const deletePengembalian = async (id) => {
        await jwtInterceptor.delete('http://localhost:5000/pengembalian/' + id)
            .then(() => {
                setLoading(false);
            })
    }
    

    return(
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium" href="/pengembalian/add"><span className="mdi mdi-text-box-plus mr-2"></span>Tambah Pengembalian</a></div>
            </div>
            <table className="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 border-b border-gray-300 text-white">
                    <th className="text-left p-3 px-5">No</th>
                    <th className="text-left p-3 px-5">Nama Barang</th>
                    <th className="text-left p-3 px-5">Jumlah</th>
                    <th className="text-left p-3 px-5">Peminjam</th>
                    <th className="text-left p-3 px-5">Admin yang bertugas</th>
                    <th className="text-left p-3 px-5">Tanggal Pengembalian</th>
                    <th className="text-left p-3 px-5">Aksi</th>
                </thead>
                <tbody>
                    {pengembalian.map((pengembalian, index) => (
                        <tr className="border-b bg-white hover:bg-gray-100">
                            <td className="py-4 px-5">{index + 1}</td>
                            <td className="py-4 px-5">{pengembalian.barangkeluar.barang.nama}</td>
                            <td className="py-4 px-5">{pengembalian.jumlah} {pengembalian.barangkeluar.barang.satuan.nama}</td>
                            <td className="py-4 px-5">{pengembalian.barangkeluar.pegawai.nama}</td>
                            <td className="py-4 px-5">{pengembalian.user.name}</td>
                            <td className="py-4 px-5">{Date(pengembalian.createdAt).split(' ').slice(1, 4).join(' ')}</td>
                            <td className="py-4 px-5">
                                <div className="flex items-center space-x-4 text-center">
                                    <button className="text-red-500 hover:text-red-700 hover:underline ml-5" onClick={() => deletePengembalian(pengembalian.id)}>Hapus</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KelolaPengembalian;