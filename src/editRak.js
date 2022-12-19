function editRak() {
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <form className="flex flex-col px-8 py-6" action="/rak/edit/" method="POST">
                <div className="px-6 py-4 text-xl">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-gray-600" for="name">Nama</label>
                        <input className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="nama" placeholder="Nama" required="required" />
                    </div>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded font-medium tracking-wide hover:bg-sky-600" type="submit">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default editRak;