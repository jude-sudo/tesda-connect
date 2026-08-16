<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->string('student_number')->unique();

            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('name_extension')->nullable();

            $table->date('birth_date')->nullable();

            $table->string('sex')->nullable();
            $table->string('civil_status')->nullable();

            $table->string('contact_number')->nullable();
            $table->string('email')->nullable();

            $table->text('address')->nullable();
            $table->string('barangay')->nullable();
            $table->string('municipality')->nullable();
            $table->string('province')->nullable();

            $table->enum('status', [
                'active',
                'inactive',
                'archived',
            ])->default('active');

            $table->timestamps();

            $table->index(['last_name', 'first_name']);
            $table->index(['status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};