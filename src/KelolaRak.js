import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './layouts/Layout';

function KelolaRak() {
    const [rak, setRak] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/rak')
            .then(res => {
                setRak(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [rak]);

    const deleteRak = async (id) => {
        const res = await axios.delete(`http://localhost:5000/rak/${id}`)
        if (res.status === 200) {
            const newRak = rak.filter((rak) => rak.id !== id)
            setRak(newRak)
        } else {
            alert('Gagal menghapus data')
        }
    }

    return (
        <>            
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a href="/rak/add" className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium"><span className="mdi mdi-text-box-plus mr-2"></span>Tambah Rak</a></div>
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
                    {rak.map((rak, index) => (
                        <tr key={rak.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-3 px-5">{index + 1}</td>
                            <td className="p-3 px-5">{rak.nama}</td>
                            <td className="p-3 px-5">
                                <a href={`/rak/edit/${rak.id}`} className="text-blue-500 hover:text-blue-700 hover:underline">Edit</a>
                                <button className="text-red-500 hover:text-red-700 hover:underline ml-5" onClick={() => deleteRak(rak.id)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default KelolaRak;