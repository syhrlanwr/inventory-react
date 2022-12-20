import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRak = () => {
    const [nama, setNama] = useState('');
    const navigate = useNavigate();
    

    const saveRak = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/rak', {
                nama: nama,
            });
            navigate("/rak");
        } catch (error) {
            if(error.response) {
                // setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" onSubmit={saveRak}>
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600">Nama</label>
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="nama" placeholder="Nama" onChange={(e) => setNama(e.target.value)} value={nama} />
                    </div>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded font-medium tracking-wide hover:bg-sky-600" type="submit">Tambahkan</button>
                </div>
            </form>
        </div>
    )
}

export default AddRak;