<?php

namespace App\Http\Controllers\Developer;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $projects = Project::where('developer_id', Auth::id())->get();

        return Inertia::render('Developer/Dashboard', [
            'projects' => $projects
        ]);
    }
}
