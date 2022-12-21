import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function KelolaUser() {
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const [expired, setExpired] = useState("");

    
    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
	        const res = await axios.get("http://localhost:5000/auth/token", { withCredentials: true });
	        const decoded = jwt_decode(res.data.accessToken);
            console.log(decoded);
            setToken(res.data.accessToken);
            setExpired(decoded.exp);
        } catch (error) {
            console.log(error);
        }
    }

    const axiosjwt = axios.create();
    axiosjwt.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expired * 1000 < currentDate.getTime()) {
            const res = await axios.get("http://localhost:5000/auth/token", { withCredentials: true });
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
            const decoded = jwt_decode(res.data.accessToken);
            setToken(res.data.accessToken);
            setExpired(decoded.exp);
        }
        return config;
    } , (error) => {
        return Promise.reject(error);
    });

    useEffect(() => {
        axios.get('http://localhost:5000/users', {headers: {Authorization: `Bearer ${token}`}})
            .then(res => {
                setUsers(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [token]);

    const deleteUsers = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium" href="/users/add"><span className="mdi mdi-account-multiple-plus mr-2"></span>Tambah User</a></div>
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