import { useState, useEffect } from 'react'
import axios from 'axios'

function Laporan() {
  const [laporan, setLaporan] = useState([])
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState(false)


  useEffect(() => {
    axios.get('http://localhost:5000/laporan')
      .then((res) => {
        setLaporan(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [loading])

  let modalDetail = []

  if(laporan){
    laporan.forEach((laporan, index) => {
      modalDetail.push(
        <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-title">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Detail Laporan
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        <span class="font-bold">No</span> : {index + 1}
                      </p>
                      <p class="text-sm text-gray-500">
                        <span class="font-bold">Keterangan</span> : {(laporan.keterangan === 'masuk') ? 'Barang Masuk' : (laporan.keterangan === 'keluar') ? 'Barang Keluar' : 'Pengembalian'}
                      </p>
                      <p class="text-sm text-gray-500">
                        <span class="font-bold">Jumlah</span> : {laporan.jumlah}
                      </p>
                      <p class="text-sm text-gray-500">
                        <span class="font-bold">Nama Barang</span> : {laporan.nama_barang}
                      </p>
                      <p class="text-sm text-gray-500">
                        <span class="font-bold">Tanggal</span> : {laporan.tanggal.split('T')[0]}
                      </p>
                      <p class="text-sm text-gray-500">
                        <span class="font-bold">{(laporan.keterangan === 'masuk') ? 'Pengirim' : (laporan.keterangan === 'keluar') ? 'Peminjam' : 'Pengembali'}</span> : {laporan.peminjam} 
                      </p>
                      <p class="text-sm text-gray-500">
                        <span class="font-bold">Admin</span> : {laporan.user}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={() => setModal([])} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    })

    console.log(modalDetail)


  }
  return (
    <div>
      <table class="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-800 border-b border-gray-300 text-white">
          <tr>
            <th class="text-left px-4 py-2">No</th>
            <th class="text-left px-4 py-2">Keterangan</th>
            <th class="text-left px-4 py-2">Jumlah</th>
            <th class="text-left px-4 py-2">Nama Barang</th>
            <th class="text-left px-4 py-2">Tanggal</th>
            <th class="text-left px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {laporan.map((laporan, index) => (
            <tr class="border-b bg-white hover:bg-gray-100">
              <td class="px-4 py-2">{index + 1}</td>
              { laporan.keterangan === 'masuk' ? ( <td class="px-4 py-2 text-green-500">Barang Masuk</td>) :
                laporan.keterangan === 'keluar' ? ( <td class="px-4 py-2 text-red-500">Barang Keluar</td>) :
                ( <td class="px-4 py-2 text-sky-500">Pengembalian</td>) 
              }
              <td class="px-4 py-2">{laporan.jumlah}</td>
              <td class="px-4 py-2">{laporan.nama_barang}</td>
              <td class="px-4 py-2">{laporan.tanggal.split('T')[0]}</td>
              <td class="px-4 py-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModal(modalDetail[index])}>
                  <span class="mdi mdi-information-outline mr-2"></span>
                  Lihat Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal}

    </div>
  )
}

export default Laporan