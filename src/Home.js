import Layout from "./layouts/Layout";

function Home (){
    return (
      <Layout>
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 rounded-lg shadow-lg">
                <div className="text-white font-bold p-8">
                    <p className="text-end text-7xl">100</p>
                </div>
                <div className="text-white p-4 bg-green-600 rounded-b-lg">
                    <p className="text-start text-xl">Barang Masuk</p>
                </div>
            </div>
            <div className="bg-red-500 rounded-lg shadow-lg">
                <div className="text-white font-bold p-8">
                    <p className="text-end text-7xl">100</p>
                </div>
                <div className="text-white p-4 bg-red-600 rounded-b-lg">
                    <p className="text-start text-xl">Barang Keluar</p>
                </div>
            </div>
            <div className="bg-blue-500 rounded-lg shadow-lg">
                <div className="text-white font-bold p-8">
                    <p className="text-end text-7xl">100</p>
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
                    <div className="flex justify-between items-center mt-8">
                        <div className="flex">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center text-center text-white">
                                <span className="mdi mdi-login-variant text-2xl">
                                </span>
                            </div>
                            <div className="flex flex-col ml-4">
                                <p className="text-gray-800 font-bold text-lg">Beras</p>
                                <p className="text-gray-500 text-sm">200 kg</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">10/10/2021</p>
                    </div>
                </div>
            </div>
        </div>
      </Layout>  
    );
}

export default Home;