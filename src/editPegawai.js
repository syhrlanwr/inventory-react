import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditPegawai (){
    const [nama, setNama] = useState("");
    const [nip, setNip] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/pegawai/${id}`).then((res) => {
            setNama(res.data.nama);
            setNip(res.data.nip);
        });
    }, [id]);

    const data = {
        nama : nama,
        nip : nip
    };

    function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/pegawai/${id}`, data).then(navigate("/pegawai"));
    }
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form action="/pegawai/edit/" method="POST" className="flex flex-col px-8 py-6">
                <div className="px-8 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label for="nip" className="mb-1 text-gray-600">NIP</label>
                        <input type="text" name="nip" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" value={nip} onChange={(e) => setNip(e.target.value)}/>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label for="name" className="mb-1 text-gray-600">Nama</label>
                        <input type="text" name="nama" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" value={nama} onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600" onClick={Update}>Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditPegawai;