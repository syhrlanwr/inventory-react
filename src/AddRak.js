import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRak() {
    const [nama, setNama] = useState('');

    function HandleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/rak', {
            nama: nama
        }, { headers: {
                'Content-Type': 'application/json'
                }})
            .then(res => {
                console.log(res);
                this.props.history.push('/rak');
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" onSubmit={(e) => HandleSubmit(e)}>
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600">Nama</label>
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="nama" placeholder="Nama" onChange={e => setNama(e.target.value)} value={nama} />
                    </div>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded font-medium tracking-wide hover:bg-sky-600" type="submit">Tambahkan</button>
                </div>
            </form>
        </div>
    )
}

export default AddRak;