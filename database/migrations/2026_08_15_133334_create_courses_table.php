<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();

            $table->foreignId('institution_id')
                ->constrained('institutions')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->string('code')->nullable();
            $table->string('name');
            $table->string('qualification')->nullable();

            $table->text('description')->nullable();

            $table->unsignedInteger('training_hours')->default(0);
            $table->unsignedInteger('training_days')->default(0);

            $table->enum('status', [
                'active',
                'inactive',
                'archived',
            ])->default('active');

            $table->timestamps();

            $table->index(['institution_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};