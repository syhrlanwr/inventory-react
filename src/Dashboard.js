function Dashboard() {
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-green-500 rounded-lg shadow-lg">
        <div class="text-white font-bold p-8">
          <p class="text-end text-7xl">982</p>
        </div>
        <div class="text-white p-4 bg-green-600 rounded-b-lg">
          <p class="text-start text-xl">Barang Masuk</p>
        </div>
      </div>
      <div class="bg-red-500 rounded-lg shadow-lg">
        <div class="text-white font-bold p-8">
          <p class="text-end text-7xl">72</p>
        </div>
        <div class="text-white p-4 bg-red-600 rounded-b-lg">
          <p class="text-start text-xl">Barang Keluar</p>
        </div>
      </div>
      <div class="bg-sky-500 rounded-lg shadow-lg">
        <div class="text-white font-bold p-8">
          <p class="text-end text-7xl">402</p>
        </div>
        <div class="text-white p-4 bg-sky-600 rounded-b-lg">
          <p class="text-start text-xl">Total Barang</p>
          <div class="flex flex-col my-8">
            <div class="bg-white rounded-lg shadow-lg p-8"></div>
            <div class="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h1 class="text-2xl font-bold text-gray-800">Aktivitas Terbaru</h1>
              <div class="flex flex-col">
                <div class="flex justify-between items-center mt-8">
                  <div class="flex">
                    <div class="w-12 h-12 bg-red-500 rounded-full items-center flex justify-center text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                    </div>
                    <div class="flex flex-col ml-4">
                      <p class="text-gray-800 font-bold text-lg">Kawat Tembaga</p>
                      <p class="text-gray-400 text-sm">200 roll</p>
                      <p class="text-gray-400 text-sm">
                        2021-07-01 12:00:00
                        <div class="flex justify-between items-center mt-8">
                          <div class="flex">
                            <div class="w-12 h-12 bg-green-500 rounded-full items-center flex justify-center text-white">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                              ></path>
                            </div>
                            <div class="flex flex-col ml-4">
                              <p class="text-gray-800 font-bold text-lg">Kabel Listrik</p>
                              <p class="text-gray-400 text-sm">100 roll</p>
                              <p class="text-gray-400 text-sm">
                                2021-07-01 12:00:00
                                <div class="flex justify-between items-center mt-8">
                                  <div class="flex">
                                    <div class="w-12 h-12 bg-green-500 rounded-full items-center flex justify-center text-white">
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                      ></path>
                                    </div>
                                    <div class="flex flex-col ml-4">
                                      <p class="text-gray-800 font-bold text-lg">Sianida</p>
                                      <p class="text-gray-400 text-sm">1000 kg</p>
                                    </div>
                                  </div>
                                  <p class="text-gray-400 text-sm">2021-07-01 12:00:00</p>
                                </div>
                                <div class="flex justify-between items-center mt-8">
                                  <div class="flex">
                                    <div class="w-12 h-12 bg-red-500 rounded-full items-center flex justify-center text-white">
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                      ></path>
                                    </div>
                                    <div class="flex flex-col ml-4">
                                      <p class="text-gray-800 font-bold text-lg">Uranium 235</p>
                                      <p class="text-gray-400 text-sm">100 kg</p>
                                    </div>
                                  </div>
                                  <p class="text-gray-400 text-sm">2021-07-01 12:00:00</p>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
