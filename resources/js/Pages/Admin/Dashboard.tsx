import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ totalProjects, totalClients, totalTeams, projects }: any) {
    return (
        <AdminLayout>
            {/* Statistik */}
            <h2 className="text-2xl font-bold mb-6">Ringkasan Statistik</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 shadow rounded-lg">
                    <h3 className="text-lg font-semibold">📂 Total Proyek</h3>
                    <p className="text-3xl font-bold">{totalProjects}</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg">
                    <h3 className="text-lg font-semibold">👥 Total Klien</h3>
                    <p className="text-3xl font-bold">{totalClients}</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg">
                    <h3 className="text-lg font-semibold">🛠️ Total Tim</h3>
                    <p className="text-3xl font-bold">{totalTeams}</p>
                </div>
            </div>

            {/* Daftar Proyek */}
            <h2 className="text-xl font-bold mb-4">Proyek Terbaru</h2>
            <div className="bg-white shadow rounded-lg p-4">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2 text-left">Nama Proyek</th>
                            <th className="border px-4 py-2">Status</th>
                            <th className="border px-4 py-2">Progress</th>
                            <th className="border px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p: any) => (
                            <tr key={p.id}>
                                <td className="border px-4 py-2">{p.name}</td>
                                <td className="border px-4 py-2">{p.status}</td>
                                <td className="border px-4 py-2">{p.progress ?? 0}%</td>
                                <td className="border px-4 py-2">
                                    <a href={route("projects.show", p.id)} className="text-blue-600 hover:underline">Detail</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
