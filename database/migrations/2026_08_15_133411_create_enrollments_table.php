<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enrollments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('student_id')
                ->constrained('students')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->foreignId('batch_id')
                ->constrained('batches')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->string('enrollment_number')->unique();

            $table->enum('status', [
                'draft',
                'submitted',
                'under_review',
                'requirements_incomplete',
                'confirmed',
                'rejected',
                'cancelled',
                'completed',
            ])->default('draft');

            $table->timestamp('submitted_at')->nullable();
            $table->timestamp('confirmed_at')->nullable();

            $table->foreignId('confirmed_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamp('rejected_at')->nullable();

            $table->foreignId('rejected_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->text('rejection_reason')->nullable();
            $table->text('remarks')->nullable();

            $table->timestamps();

            $table->index(['student_id', 'status']);
            $table->index(['batch_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrollments');
    }
};
