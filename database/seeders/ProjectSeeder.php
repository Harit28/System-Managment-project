<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'id' => (string) Str::uuid(),
            'name' => 'Website Perusahaan',
            'description' => 'Pembuatan website company profile',
            'status' => 'ongoing',
            'client_id' => null,
        ]);

        Project::create([
            'id' => (string) Str::uuid(),
            'name' => 'Aplikasi Mobile',
            'description' => 'Pengembangan aplikasi mobile untuk e-commerce',
            'status' => 'pending',
            'client_id' => null,
        ]);
    }
}
