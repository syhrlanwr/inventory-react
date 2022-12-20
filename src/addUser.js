import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [image, setImage] = useState('');
    const navigate = useNavigate();
    

    const saveUsers = async(e) => {
        e.preventDefault();
            await axios.post('http://localhost:3001/users', {
                nama: nama,
                username: username,
                password: password,
                // image: image,
            });
            navigate("/users");
    }

    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" action="/users/add" method="POST" onSubmit={saveUsers}>
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6"><label className="mb-1 text-gray-600" for="name">Nama</label><input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="name" placeholder="Nama" onChange={(e) => setNama(e.target.value)} value={nama} /></div>
                    <div className="flex flex-col mb-6"><label className="mb-1 text-gray-600" for="username">Username</label><input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} /></div>
                    <div className="flex flex-col mb-6"><label className="mb-1 text-gray-600" for="password">Password</label><input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="password" name="password" placeholder="******" onChange={(e) => setPassword(e.target.value)} value={password} /></div>
                    <div className="flex flex-col mb-6"><label className="mb-1  text-gray-600" for="confirmPassword">Konfirmasi Password</label><input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="password" name="confirmPassword" placeholder="******" onChange={(e) => setPassword(e.target.value)} value={password} /></div><button className="bg-sky-500 text-white px-4 py-2 rounded font-medium  hover:bg-sky-600" type="submit">Tambahkan</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;