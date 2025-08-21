import { Link, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '../../Layouts/AdminLayout';

type Option = { id: string; name: string };

export default function Create() {
  const { props }: any = usePage();
  const clients: Option[] = props.clients || [];
  const developers: Option[] = props.developers || [];

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
    client_id: '',
    developer_id: '',
    start_date: '',
    deadline: '',
    status: 'planned',
    progress: 0,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.projects.store'));
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Tambah Proyek</h2>
        <Link href={route('admin.projects.index')} className="text-indigo-600 hover:underline">
          &larr; Kembali
        </Link>
      </div>

      <form onSubmit={submit} className="bg-white shadow rounded-lg p-6 space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium">Nama Proyek</label>
          <input
            className="mt-1 w-full rounded border-gray-300"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Client</label>
          <select
            className="mt-1 w-full rounded border-gray-300"
            value={data.client_id}
            onChange={e => setData('client_id', e.target.value)}
          >
            <option value="">-- Pilih Client --</option>
            {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          {errors.client_id && <p className="text-sm text-red-600 mt-1">{errors.client_id}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Developer (opsional)</label>
          <select
            className="mt-1 w-full rounded border-gray-300"
            value={data.developer_id}
            onChange={e => setData('developer_id', e.target.value)}
          >
            <option value="">-- Belum ditentukan --</option>
            {developers.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          {errors.developer_id && <p className="text-sm text-red-600 mt-1">{errors.developer_id}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Mulai</label>
            <input
              type="date"
              className="mt-1 w-full rounded border-gray-300"
              value={data.start_date}
              onChange={e => setData('start_date', e.target.value)}
            />
            {errors.start_date && <p className="text-sm text-red-600 mt-1">{errors.start_date}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Deadline</label>
            <input
              type="date"
              className="mt-1 w-full rounded border-gray-300"
              value={data.deadline}
              onChange={e => setData('deadline', e.target.value)}
            />
            {errors.deadline && <p className="text-sm text-red-600 mt-1">{errors.deadline}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            className="mt-1 w-full rounded border-gray-300"
            value={data.status}
            onChange={e => setData('status', e.target.value)}
          >
            <option value="planned">Planned</option>
            <option value="in_progress">In Progress</option>
            <option value="paused">Paused</option>
            <option value="done">Done</option>
          </select>
          {errors.status && <p className="text-sm text-red-600 mt-1">{errors.status}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Progress (%)</label>
          <input
            type="number"
            min={0}
            max={100}
            className="mt-1 w-full rounded border-gray-300"
            value={data.progress}
            onChange={e => setData('progress', Number(e.target.value))}
          />
          {errors.progress && <p className="text-sm text-red-600 mt-1">{errors.progress}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Deskripsi</label>
          <textarea
            className="mt-1 w-full rounded border-gray-300"
            rows={4}
            value={data.description}
            onChange={e => setData('description', e.target.value)}
          />
          {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={processing}
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            {processing ? 'Menyimpan...' : 'Simpan'}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
