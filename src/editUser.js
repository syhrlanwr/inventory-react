function editUser() {
    return (
        <div class="bg-white rounded-lg shadow-lg">
            <form class="flex flex-col px-8 py-6" action="/users/edit/" method="POST">
                <div class="px-6 py-4 text-xl">
                    <div class="flex flex-col mb-6"><label class="mb-1 text-gray-600" for="name">Nama</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="name" placeholder="Nama" required="required" /></div>
                    <div class="flex flex-col mb-6"><label class="mb-1 text-gray-600" for="username">Username</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="text" name="username" placeholder="Username" required="required" /></div>
                    <div class="flex flex-col mb-6"><label class="mb-1 text-gray-600" for="password">Password</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="password" name="password" placeholder="******" /></div>
                    <div class="flex flex-col mb-6"><label class="mb-1  text-gray-600" for="confirmPassword">Konfirmasi Password</label><input class="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" type="password" name="confirmPassword" placeholder="******" /></div><button class="bg-sky-500 text-white px-4 py-2 rounded font-medium  hover:bg-sky-600" type="submit">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default editUser;