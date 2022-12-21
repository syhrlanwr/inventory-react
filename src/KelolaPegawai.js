import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KelolaPegawai() {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl"> <a className="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium" href="/pegawai/add"><span className="mdi mdi-account-plus mr-2"></span>Tambah Pegawai</a></div>
                <div className="text-xl flex items-center">
                    <p className="text-gray-800 font-medium mr-2">Tampilkan </p>
                    <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none" id="rows" onchange="changeRows()">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                    <p className="text-gray-800 font-medium ml-2">baris</p>
                </div>
            </div>
            <table className="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden" id="table">
                <thead className="bg-gray-800 border-b border-gray-300 text-white">
                    <tr>
                        <th className="text-left p-3 px-5">No</th>
                        <th className="text-left p-3 px-5">NIP</th>
                        <th className="text-left p-3 px-5">Nama </th>
                        <th className="text-left p-3 px-5">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {/* disini body */}
                </tbody>
            </table>
            <script>
                {/* disini script */}
            </script>
        </div>
    )
}

export default KelolaPegawai;