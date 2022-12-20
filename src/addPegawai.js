function AddPegawai (){
    return (
        <div className="bg- white rounded-lg shadow-lg">
            <form action="/pegawai/add" method="POST" className="flex flex-col px-8 py -6">
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label for="nip" className="mb-1 text-gray-600">NIP</label>
                        <input type="text" name="nip" placeholder="NIP" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" required="required"/>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label for="name" className="mb-1 text-gray-600" >Nama</label>
                        <input type="text" name="nama" placeholder="Nama" className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" required="required"/>
                    </div>
                    <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-sky-600">Tambahkan</button>
                </div>
            </form>
        </div>
    )
}

export default AddPegawai;