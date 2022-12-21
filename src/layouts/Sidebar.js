function Sidebar() {
    return (
        <div className="flex w-1/5 flex-col bg-zinc-900 bg-opacity-95 text-white text-xl font-semibold shadow-lg">
            <div className="flex-1 overflow-y-auto">
                <ul className="flex flex-col py-4 justify-center space-y-1">
                    <li> <a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/"><span className="mdi mdi-view-dashboard mr-3"></span>Dashboard</a></li>
                    <li><a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/barang"><span className="mdi mdi-package-variant-closed mr-3"></span>Kelola Barang</a></li>
                    <li><a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/jenis"><span className="mdi mdi-tag-multiple mr-3"></span>Kelola Jenis Barang</a></li>
                    <li><a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/satuan"><span className="mdi mdi-scale mr-3"></span>Kelola Satuan Barang</a></li>
                    <li><a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/rak"><span className="mdi mdi-text-box-check mr-3"></span>Kelola Rak</a></li>
                    <li><a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/pegawai"><span className="mdi mdi-account mr-3"></span>Kelola Pegawai</a></li>
                    <li><a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/users"><span className="mdi mdi-account-multiple mr-3"></span>Kelola User</a></li>
                    <li><a className="flex items-center px-6 py-3 hover:bg-sky-500 hover:bg-opacity-25" href="/laporan"><span className="mdi mdi-clipboard-text mr-3"></span>Laporan</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar