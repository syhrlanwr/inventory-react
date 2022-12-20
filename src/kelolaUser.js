function KelolaUser() {
    return (
        <div>
            <div class="flex justify-between items-center mb-4">
                <div class="text-xl"> <a class="hover:bg-sky-600 bg-sky-500 text-white px-4 py-2 rounded-lg font-medium" href="/users/add"><span class="mdi mdi-account-multiple-plus mr-2"></span>Tambah User</a></div>
                <div class="text-xl flex items-center">
                    <p class="text-gray-800 font-medium mr-2">Tampilkan </p><select class="bg-white border border-gray-300 rounded-lg px-4 py-2 outline-none" id="rows" onchange="changeRows()">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                    <p class="text-gray-800 font-medium ml-2">baris</p>
                </div>
            </div>
            <table class="table-auto w-full text-md bg-white shadow-md rounded-lg overflow-hidden" id="table">
                <thead class="bg-gray-800 border-b border-gray-300 text-white">
                    <tr>
                        <th class="text-left p-3 px-5">No</th>
                        <th class="text-left p-3 px-5">Nama</th>
                        <th class="text-left p-3 px-5">Username</th>
                        <th class="text-left p-3 px-5">Created At</th>
                        <th class="text-left p-3 px-5">Aksi</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <script>
                {/* disini script */}
            </script>
        </div>
    )
}

export default KelolaUser;