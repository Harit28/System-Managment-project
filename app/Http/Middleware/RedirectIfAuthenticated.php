<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, ...$guards): Response
    {
        // Kalau user SUDAH login
        if (Auth::check()) {
            // Langsung arahkan ke dashboard default (misalnya admin)
            // Kalau nanti mau dibedakan per role, cukup ubah di AuthenticatedSessionController@store saja
            return redirect()->route('admin.dashboard');
        }

        // Kalau BELUM login, lanjutkan ke halaman login / register
        return $next($request);
    }
}
