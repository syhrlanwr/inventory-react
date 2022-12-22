import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KelolaJenis() {
    const [jenis, setJenis] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/jenis')
            .then(res => {
                setJenis(res.data);
                setToggle(true);
                setCount(count + 1);
            }).catch(err => {
                console.log(err);
            })
    }, [toggle]);

    const deleteJenis = async (id) => {
        await axios.delete(`http://localhost:5000/jenis/${id}`);
        setToggle(false);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a href="/jenis/add" className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium"><span className="mdi mdi-text-box-plus mr-2"></span>Tambah Jenis</a></div>
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
                    {jenis.map((jenis, index) => (
                        <tr key={jenis.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-3 px-5">{index + 1}</td>
                            <td className="p-3 px-5">{jenis.nama}</td>
                            <td className="p-3 px-5">
                                <a href={`/jenis/edit/${jenis.id}`} className="text-blue-500 hover:text-blue-700 hover:underline">Edit</a>
                                <button className="text-red-500 hover:text-red-700 hover:underline ml-5" onClick={() => deleteJenis(jenis.id)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KelolaJenis;