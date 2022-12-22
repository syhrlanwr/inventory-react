import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function KelolaBarangKeluar (){
    const [barangkeluar, setBarangkeluar] = useState([]);
    const [satuan, setSatuan] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/barangkeluar').then((res) => {
            setBarangkeluar(res.data);
            console.log(res.data);
            setLoading(true);
        });
    }, [loading]);

    const deleteBarangkeluar = async (id) => {
        await axios.delete('http://localhost:5000/barangkeluar/' + id)
            .then(() => {
                setLoading(false);
            })
    }

    return(
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium" href="/barangkeluar/add"><span className="mdi mdi-text-box-plus mr-2"></span>Tambah Barang Keluar</a></div>
            </div>
            <table className="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 border-b border-gray-300 text-white">
                    <th className="text-left p-3 px-5">No</th>
                    <th className="text-left p-3 px-5">Nama Barang</th>
                    <th className="text-left p-3 px-5">Jumlah</th>
                    <th className="text-left p-3 px-5">Peminjam</th>
                    <th className="text-left p-3 px-5">Admin yang bertugas</th>
                    <th className="text-left p-3 px-5">Tanggal</th>
                    <th className="text-left p-3 px-5">Aksi</th>
                </thead>
                <tbody>
                    {barangkeluar.map((barangkeluar, index) => (
                        <tr className="border-b bg-white hover:bg-gray-100">
                            <td className="py-4 px-5">{index + 1}</td>
                            <td className="py-4 px-5">{barangkeluar.barang.nama}</td>
                            <td className="py-4 px-5">{barangkeluar.jumlah} {barangkeluar.barang.satuan.nama}</td>
                            <td className="py-4 px-5">{barangkeluar.pegawai.nama}</td>
                            <td className="py-4 px-5">{barangkeluar.user.name}</td>
                            <td className="py-4 px-5">{barangkeluar.createdAt}</td>
                            <td className="py-4 px-5">
                                <a href={`/barangkeluar/edit/${barangkeluar.id}`} className="text-blue-500 hover:text-blue-700 hover:underline">Edit</a>
                                <button className="text-red-500 hover:text-red-700 hover:underline ml-2" onClick={() => deleteBarangkeluar(barangkeluar.id)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KelolaBarangKeluar;