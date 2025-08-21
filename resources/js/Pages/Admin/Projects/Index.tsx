import { Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

interface Project {
  id: string;
  name: string;
  description?: string;
  status: string;
  client_id?: string;
}

export default function Index({ projects }: { projects: Project[] }) {
  // Pastikan kalau bukan array (kadang object) → ubah ke array
  const list: Project[] = Array.isArray(projects) ? projects : Object.values(projects || {});

  return (
    <>
      <Head title="Daftar Proyek" />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">📁 Daftar Proyek</h1>

        <div className="overflow-x-auto border rounded-lg shadow bg-white">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border">Nama Proyek</th>
                <th className="px-4 py-2 border">Deskripsi</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border font-semibold">{project.name}</td>
                    <td className="px-4 py-2 border">{project.description || '-'}</td>
                    <td className="px-4 py-2 border">{project.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-4 py-4 text-center text-gray-500">
                    Belum ada proyek.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}