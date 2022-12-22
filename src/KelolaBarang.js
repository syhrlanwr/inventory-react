import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function KelolaBarang (){
    const [isOpen, setIsOpen] = useState(false)
    const [barang, setBarang] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/barang').then((res) => {
            setBarang(res.data);
            console.log(res.data);
            setLoading(true);
        });
    }, [loading]);

    const deleteBarang = async (id) => {
        await axios.delete('http://localhost:5000/barang/' + id)
            .then(() => {
                setLoading(false);
            })
    }




    let dropdownMenu = null;

    if (isOpen) {
        dropdownMenu = (
            <div className="flex flex-col bg-white shadow-lg rounded-lg px-4 py-2 w-52 justify-between items-center absolute">
                <a href="/barang/add" className="text-gray-700 w-full flex.items-center px-2 py-2 hover:bg-gray-200 rounded-lg">
                    <span className="mdi mdi-login-variant mr-2"></span>
                    <span>Barang masuk</span>
                </a>
                <a href="/pengembalian" className="text-gray-700 w-full flex.items-center px-2 py-2 hover:bg-gray-200 rounded-lg">
                    <span className="mdi mdi-arrow-left mr-2"></span>
                    <span>Pengembalian</span>
                </a>
            </div>
        )
    } else {
        dropdownMenu = null
    }

    return(
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl flex flex-row">
                    <div className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium mr-2">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <i className="mdi mdi-login-variant mr-2"></i>
                            <span>Barang masuk</span>
                            <span className="mdi mdi-chevron-down"></span>
                        </button>
                        {dropdownMenu}
                    </div>
                    <a href="/barangkeluar" className="hover:bg-red-600 bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                        <i className="mdi mdi-logout-variant mr-2"></i>
                        <span>Barang keluar</span>
                    </a>
                </div>
            </div>
            <table className="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 border-b border-gray-300 text-white">
                    <th className="text-left p-3 px-5">No</th>
                    <th className="text-left p-3 px-5">Nama Barang</th>
                    <th className="text-left p-3 px-5">Jumlah</th>
                    <th className="text-left p-3 px-5">Jenis</th>
                    <th className="text-left p-3 px-5">Rak</th>
                    <th className="text-left p-3 px-5">Pengirim</th>
                    <th className="text-left p-3 px-5">Admin yang bertugas</th>
                    <th className="text-left p-3 px-5">Tanggal</th>
                    <th className="text-left p-3 px-5">Aksi</th>
                </thead>
                <tbody>
                    {barang.map((barang, index) => (
                        <tr className="border-b bg-white hover:bg-gray-100">
                            <td className="py-4 px-5">{index + 1}</td>
                            <td className="py-4 px-5">{barang.nama}</td>
                            <td className="py-4 px-5">{barang.jumlah} {barang.satuan.nama}</td>
                            <td className="py-4 px-5">{barang.jenis.nama}</td>
                            <td className="py-4 px-5">{barang.rak.nama}</td>
                            <td className="py-4 px-5">{barang.pegawai.nama}</td>
                            <td className="py-4 px-5">{barang.user.name}</td>
                            <td className="py-4 px-5">{barang.createdAt}</td>
                            <td className="py-4 px-5">
                                <a href={`/barang/edit/${barang.id}`} className="text-blue-500 hover:text-blue-700 hover:underline">Edit</a>
                                <button className="text-red-500 hover:text-red-700 hover:underline ml-2" onClick={() => deleteBarang(barang.id)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KelolaBarang