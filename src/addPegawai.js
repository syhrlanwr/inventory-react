import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtInterceptor from './interceptors/axios';

function AddPegawai() {
  const [nama, setNama] = useState('');
  const [nip, setNip] = useState('');
  const navigate = useNavigate();

  const savePegawai = async (e) => {
    e.preventDefault();
    await jwtInterceptor.post('http://localhost:5000/pegawai', {
      nama: nama,
      nip: nip,
    });
    navigate('/pegawai');
  };
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <form className="flex flex-col px-8 py-6" onSubmit={savePegawai}>
        <div className="px-6 py-4 text-xl">
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-gray-600">
              NIP
            </label>
            <input type="text" name="nip" placeholder="NIP" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" required value={nip} onChange={(e) => setNip(e.target.value)} />
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-gray-600">
              Nama
            </label>
            <input type="text" name="nama" placeholder="Nama" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" required value={nama} onChange={(e) => setNama(e.target.value)} />
          </div>
          <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600">
            Tambahkan
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPegawai;
