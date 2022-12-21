import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KelolaUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteUsers = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium" href="/users/add"><span className="mdi mdi-account-multiple-plus mr-2"></span>Tambah User</a></div>
                <div className="text-xl flex items-center">
                    <p className="text-gray-800 font-medium mr-2">Tampilkan </p><select className="bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none" id="rows" onchange="changeRows()">
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
                        <th className="text-left p-3 px-5">Nama</th>
                        <th className="text-left p-3 px-5">Username</th>
                        <th className="text-left p-3 px-5">Created At</th>
                        <th className="text-left p-3 px-5">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((users, index) => (
                        <tr key={users.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-3 px-5">{index + 1}</td>
                            <td className="p-3 px-5">{users.name}</td>
                            <td className="p-3 px-5">{users.username}</td>
                            <td className="p-3 px-5">{users.createdAt}</td>
                            <td className="p-3 px-5">
                                <a href={`/users/edit/${users.id}`} className="text-blue-500 hover:text-blue-700 hover:underline">Edit</a>
                                <a href={`/users/delete/${users.id}`} className="text-red-500 hover:text-red-700 hover:underline ml-5" onClick={() => deleteUsers(users.id)}>Hapus</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KelolaUser;