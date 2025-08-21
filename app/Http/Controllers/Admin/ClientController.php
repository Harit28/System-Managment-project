<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\User;

class ClientController extends Controller
{
    public function index()
    {
        $clients = User::where('role', 'client')->get();

        return Inertia::render('Admin/Clients/Index', [
            'clients' => $clients
        ]);
    }
}
