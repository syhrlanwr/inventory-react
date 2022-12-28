import { useEffect, useState } from "react";
import axios from "axios";
import jwtInterceptor from "./interceptors/axios";

function Home (){
    const [pengembalianCount, setPengembalianCount] = useState(0);
    const [barangKeluarCount, setBarangKeluarCount] = useState(0);
    const [barangCount, setBarangCount] = useState(0);
    const [laporan, setLaporan] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        jwtInterceptor.get('http://localhost:5000/barang/')
            .then((res) => {
                setBarangCount(res.data.length);
            }
        );
        jwtInterceptor.get('http://localhost:5000/barangkeluar')
            .then((res) => {
                setBarangKeluarCount(res.data.length);
            }
        );
        jwtInterceptor.get('http://localhost:5000/pengembalian')
            .then((res) => {
                setPengembalianCount(res.data.length);
            }
        );
        jwtInterceptor.get('http://localhost:5000/laporan')
            .then((res) => {
                setLaporan(res.data);
            }
        );
        setLoading(false);
    }, [loading]);

    return (
      <div>
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 rounded-lg shadow-lg">
                <div className="text-white font-bold p-8">
                    <p className="text-end text-7xl">{barangCount + pengembalianCount}</p>
                </div>
                <div className="text-white p-4 bg-green-600 rounded-b-lg">
                    <p className="text-start text-xl">Barang Masuk</p>
                </div>
            </div>
            <div className="bg-red-500 rounded-lg shadow-lg">
                <div className="text-white font-bold p-8">
                    <p className="text-end text-7xl">{barangKeluarCount}</p>
                </div>
                <div className="text-white p-4 bg-red-600 rounded-b-lg">
                    <p className="text-start text-xl">Barang Keluar</p>
                </div>
            </div>
            <div className="bg-blue-500 rounded-lg shadow-lg">
                <div className="text-white font-bold p-8">
                    <p className="text-end text-7xl">{barangCount}</p>
                </div>
                <div className="text-white p-4 bg-blue-600 rounded-b-lg">
                    <p className="text-start text-xl">Total Barang</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col my-8">
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h1 className="text-2xl font-bold text-gray-800">Aktivitas Terbaru</h1>
                <div className="flex flex-col">
                    {laporan.map((laporan) => (
                    <div className="flex justify-between items-center mt-8">
                        <div className="flex">
                            <div className={`w-12 h-12 ${(laporan.keterangan === "keluar") ? "bg-red-500" : (laporan.keterangan === "masuk") ? "bg-green-500" : "bg-blue-500"} rounded-full flex justify-center items-center text-white`}>
                                <span className={`mdi ${(laporan.keterangan === "keluar") ? "mdi-logout-variant" : "mdi-login-variant"} text-2xl`}></span>
                            </div>
                            <div className="flex flex-col ml-4">
                                <p className="text-gray-800 font-bold text-lg">{laporan.nama_barang}</p>
                                <p className="text-gray-500 text-sm">{laporan.jumlah}</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">{laporan.tanggal.split("T")[0]}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </div>  
    );
}

export default Home;