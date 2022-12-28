import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import jwtInterceptor from './interceptors/axios';

function EditJenis() {
    const [nama, setNama] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        jwtInterceptor.get(`http://localhost:5000/jenis/${id}`).then((res) => {
            setNama(res.data.nama);
        });
    }, [id]);

    const data = {
        nama : nama,
    };

    function Update(e) {
        e.preventDefault();
        jwtInterceptor.put(`http://localhost:5000/jenis/${id}`, data).then(navigate("/jenis"));
    }
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" action="/jenis/edit/" method="POST">
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" for="name">Nama</label>
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                    </div>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600" type="submit" onClick={Update}>Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditJenis;