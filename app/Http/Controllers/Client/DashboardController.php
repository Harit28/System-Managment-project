<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $projects = Project::where('client_id', Auth::id())->get();

        return Inertia::render('Client/Dashboard', [
            'projects' => $projects
        ]);
    }
}
