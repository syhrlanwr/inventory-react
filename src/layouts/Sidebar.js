function Sidebar(){
    return (
        <div className="flex w-1/5 flex-col bg-zinc-900 bg-opacity-95 text-white text-xl font-semibold shadow-lg">
            <div className="flex-1 overflow-y-auto">
                <ul className="flex flex-col py-4 justify-center space-y-1">
                    <li>
                        <a href="/" className="flex flex-row items-center h-12 px-4 rounded-lg text-white bg-zinc-800">
                            <i className="mdi mdi-view-dashboard-outline mr-3"></i>
                            Dashboard
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar