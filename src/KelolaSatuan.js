import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KelolaSatuan() {
    const [satuan, setSatuan] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/satuan')
            .then(res => {
                setSatuan(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [satuan]);

    const deleteSatuan = async (id) => {
        await axios.delete(`http://localhost:5000/satuan/${id}`);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a href="/satuan/add" className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium"><span className="mdi mdi-text-box-plus mr-2"></span>Tambah Jenis</a></div>
            </div>
            <table className="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden" id="table">
                <thead className="bg-gray-800 border-b border-gray-300 text-white">
                    <tr>
                        <th className="text-left p-3 px-5">No</th>
                        <th className="text-left p-3 px-5">Nama </th>
                        <th className="text-left p-3 px-5">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {satuan.map((satuan, index) => (
                        <tr key={satuan.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-3 px-5">{index + 1}</td>
                            <td className="p-3 px-5">{satuan.nama}</td>
                            <td className="p-3 px-5">
                                <a href={`/satuan/edit/${satuan.id}`} className="text-blue-500 hover:text-blue-700 hover:underline">Edit</a>
                                <a href={`/satuan/delete/${satuan.id}`} className="text-red-500 hover:text-red-700 hover:underline ml-5" onClick={() => deleteSatuan(satuan.id)}>Hapus</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KelolaSatuan;