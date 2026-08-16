<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('training_records', function (Blueprint $table) {
            $table->id();

            $table->foreignId('student_id')
                ->constrained('students')
                ->cascadeOnDelete();

            $table->foreignId('batch_id')
                ->constrained('batches')
                ->cascadeOnDelete();

            $table->decimal('training_hours', 8, 2)->default(0);

            $table->decimal('attendance_percentage', 5, 2)
                ->default(0);

            $table->enum('training_status', [
                'ongoing',
                'completed',
                'incomplete',
                'dropped',
            ])->default('ongoing');

            $table->date('completed_at')->nullable();

            $table->text('remarks')->nullable();

            $table->timestamps();

            $table->unique([
                'student_id',
                'batch_id',
            ]);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('training_records');
    }
};