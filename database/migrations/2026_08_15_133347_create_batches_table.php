<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->id();

            $table->foreignId('course_id')
                ->constrained('courses')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->string('batch_code')->unique();
            $table->string('batch_name')->nullable();

            $table->date('start_date');
            $table->date('end_date');

            $table->unsignedInteger('capacity')->nullable();

            $table->unsignedInteger('training_hours')->default(232);
            $table->unsignedInteger('training_days')->default(29);

            $table->enum('status', [
                'planned',
                'enrollment_open',
                'ongoing',
                'completed',
                'cancelled',
            ])->default('planned');

            $table->text('remarks')->nullable();

            $table->timestamps();

            $table->index(['course_id', 'status']);
            $table->index(['start_date', 'end_date']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('batches');
    }
};