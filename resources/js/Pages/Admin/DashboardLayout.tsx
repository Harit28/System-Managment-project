import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="px-6 py-4 font-bold text-xl border-b">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href={route('admin.dashboard')} className="block p-2 rounded hover:bg-gray-200">
            📊 Dashboard
          </Link>
          <Link href={route('admin.projects.index')} className="block p-2 rounded hover:bg-gray-200">
            📁 Proyek
          </Link>
          <Link href={route('admin.teams.index')} className="block p-2 rounded hover:bg-gray-200">
            👥 Tim / Developer
          </Link>
          <Link href={route('admin.clients.index')} className="block p-2 rounded hover:bg-gray-200">
            🧑‍💼 Klien
          </Link>
          <Link href="#" className="block p-2 rounded hover:bg-gray-200">
            ⚙️ Pengaturan
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">Admin Dashboard</h1>
          <form method="POST" action={route('logout')}>
            <button type="submit" className="text-red-600 hover:underline">
              Logout
            </button>
          </form>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
