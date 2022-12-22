import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditPegawai (){
    const { id} = useParams();
    const [nip, setNip] = useState("");
    const [nama, setNama] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/pegawai/${id}`).then((res) => {
            setNip(res.data.nip);
            setNama(res.data.nama);
        });
    }, [id]);

    const data = {
        nip : nip,
        nama : nama,
    };

    function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/pegawai/${id}`, data).then(navigate("/pegawai"));
    }


    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" onSubmit={Update}>
                <div className="px-8 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label for="nip" className="mb-1 text-gray-600">NIP</label>
                        <input type="text" name="nip" placeholder="NIP" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" required value={nip} onChange={(e) => setNip(e.target.value)}/>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label for="name" className="mb-1 text-gray-600">Nama</label>
                        <input type="text" name="nama" placeholder="Nama" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" required value={nama} onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditPegawai;