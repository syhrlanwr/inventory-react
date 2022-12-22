import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout({ children }) {
    return (
        <div className="flex h-screen bg-slate-100">
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <div className="flex h-full">
                    <Sidebar />
                    <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto mb-14">
                        <div className="flex w-full mx-auto px-6 py-8">
                            <div className="flex flex-col w-full">
                            {children}                            

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}

export default Layout