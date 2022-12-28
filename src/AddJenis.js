import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtInterceptor from './interceptors/axios';

function AddJenis() {
    const [nama, setNama] = useState('');
    const navigate = useNavigate();


    const saveJenis = async (e) => {
        e.preventDefault();
        await jwtInterceptor.post('http://localhost:5000/jenis', {
            nama: nama,
        });
        navigate("/jenis");
    }
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" action="/jenis/add" method="POST" onSubmit={saveJenis}>
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" for="name">Nama</label>
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="nama" placeholder="Nama" onChange={(e) => setNama(e.target.value)} value={nama}/>
                    </div>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600" type="submit">Tambahkan</button>
                </div>
            </form>
        </div>
    )
}

export default AddJenis;