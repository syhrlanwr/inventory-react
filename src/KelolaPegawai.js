import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KelolaPegawai() {
    const [pegawai, setPegawai] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/pegawai')
            .then(res => {
                setPegawai(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deletePegawai = async (id) => {
        await axios.delete(`http://localhost:5000/pegawai/${id}`);
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium" href="/pegawai/add"><span className="mdi mdi-account-plus mr-2"></span>Tambah Pegawai</a></div>
                <div className="text-xl flex items-center">
                    <p className="text-gray-800 font-medium mr-2">Tampilkan </p>
                    <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none" id="rows" onchange="changeRows()">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                    <p className="text-gray-800 font-medium ml-2">baris</p>
                </div>
            </div>
            <table className="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden" id="table">
                <thead className="bg-gray-800 border-b border-gray-300 text-white">
                    <tr>
                        <th className="text-left p-3 px-5">No</th>
                        <th className="text-left p-3 px-5">NIP</th>
                        <th className="text-left p-3 px-5">Nama </th>
                        <th className="text-left p-3 px-5">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {pegawai.map((pegawai, index) => (
                        <tr key={pegawai.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-3 px-5">{index + 1}</td>
                            <td className="p-3 px-5">{pegawai.nip}</td>
                            <td className="p-3 px-5">{pegawai.nama}</td>
                            <td className="p-3 px-5">
                                <a href={`/pegawai/edit/${pegawai.id}`} className="text-blue-500 hover:text-blue-700 hover:underline">Edit</a>
                                <a href={`/pegawai/delete/${pegawai.id}`} className="text-red-500 hover:text-red-700 hover:underline ml-5" onClick={() => deletePegawai(pegawai.id)}>Hapus</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KelolaPegawai;