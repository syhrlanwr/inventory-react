import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`).then((res) => {
            setName(res.data.name);
            setUsername(res.data.username);
            setPassword(res.data.password);
        });
    }, [id]);

    const data = {
        name: name,
        username: username,
        password: password
    };

    function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`, data).then(navigate("/users"));
    }

    return (
        <div class="bg-white rounded-lg shadow-lg">
            <form class="flex flex-col px-8 py-6" action="/users/edit/" method="POST">
                <div class="px-6 py-4 text-xl">
                    <div class="flex flex-col mb-6"><label class="mb-1 text-gray-600" for="name">Nama</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
                    <div class="flex flex-col mb-6"><label class="mb-1 text-gray-600" for="username">Username</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
                    <div class="flex flex-col mb-6"><label class="mb-1 text-gray-600" for="password">Password</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                    {/* <div class="flex flex-col mb-6"><label class="mb-1  text-gray-600" for="confirmPassword">Konfirmasi Password</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="password" name="confirmPassword" value={password} onChange={(e) => setPassword(e.target.value)} /></div> */}
                    <button class="bg-sky-500 text-white px-4 py-2 rounded font-medium  hover:bg-sky-600" type="submit" onClick={Update}>Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser;