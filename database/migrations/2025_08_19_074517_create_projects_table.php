<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->text('description')->nullable();

            // Relasi user (pakai UUID sesuai tabel users kamu)
            $table->uuid('client_id');               // pemilik proyek
            $table->uuid('developer_id')->nullable(); // penanggung jawab utama (opsional)

            $table->date('start_date')->nullable();
            $table->date('deadline')->nullable();

            $table->enum('status', ['planned','in_progress','paused','done'])
                  ->default('planned');

            $table->unsignedTinyInteger('progress')->default(0); // 0..100

            $table->timestamps();

            $table->foreign('client_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('developer_id')->references('id')->on('users')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
