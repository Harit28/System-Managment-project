import React, { ReactNode } from "react";
import { Link, usePage } from "@inertiajs/react";

interface Props {
    children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
    const { auth } = usePage().props as any;

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-2xl font-bold border-b border-gray-700">
                    Admin Panel
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link href={route("admin.dashboard")} className="block px-3 py-2 rounded hover:bg-gray-700">📊 Dashboard</Link>
                    <Link href={route("projects.index")} className="block px-3 py-2 rounded hover:bg-gray-700">📁 Proyek</Link>
                    <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">👥 Tim</Link>
                    <Link href="#" className="block px-3 py-2 rounded hover:bg-gray-700">⚙️ Pengaturan</Link>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700">{auth?.user?.name}</span>
                        <form method="POST" action={route("logout")}>
                            <button type="submit" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                Logout
                            </button>
                        </form>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
