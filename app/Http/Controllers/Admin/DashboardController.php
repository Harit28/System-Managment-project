<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalProjects = Project::count();
        $totalClients = User::where('role', 'client')->count();
        $totalTeams   = User::where('role', 'developer')->count();

        $projects = Project::latest()->take(5)->get(); // ambil 5 proyek terakhir

        return Inertia::render('Admin/Dashboard', [
            'totalProjects' => $totalProjects,
            'totalClients' => $totalClients,
            'totalTeams'   => $totalTeams,
            'projects'     => $projects,
        ]);
    }
}
