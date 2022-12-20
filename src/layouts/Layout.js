import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout({ children }) {
    return (
        <div className="bg-slate-100">
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <div className="flex h-full">
                        <Sidebar />
                        <div className="flex flex-col w-full position-relative overflow-y-auto">
                            <div className="flex w-full mx-auto px-6 py-8">
                                <div className="flex flex-col w-full">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout