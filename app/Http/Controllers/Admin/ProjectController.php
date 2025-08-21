<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
{
    $projects = \App\Models\Project::latest()->get();

    return \Inertia\Inertia::render('Admin/Projects/Index', [
        'projects' => $projects,
    ]);
}


    public function create()
    {
        // Dropdown untuk pilih client & developer
        $clients = User::where('role','client')->get(['id','name']);
        $developers = User::where('role','tim')->get(['id','name']);

        return Inertia::render('Admin/Projects/Create', [
            'clients' => $clients,
            'developers' => $developers,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'         => 'required|string|max:255',
            'description'  => 'nullable|string',
            'client_id'    => 'required|exists:users,id',
            'developer_id' => 'nullable|exists:users,id',
            'start_date'   => 'nullable|date',
            'deadline'     => 'nullable|date|after_or_equal:start_date',
            'status'       => 'required|in:planned,in_progress,paused,done',
            'progress'     => 'nullable|integer|min:0|max:100',
        ]);

        // default progress 0 kalau belum diisi
        if (!isset($data['progress'])) {
            $data['progress'] = 0;
        }

        Project::create($data);

        return redirect()->route('projects.index')->with('success', 'Proyek berhasil ditambahkan.');
    }
}
