<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('assessment_results', function (Blueprint $table) {
            $table->id();

            $table->foreignId('assessment_id')
                ->constrained('assessments')
                ->cascadeOnDelete();

            $table->decimal('score', 5, 2)->nullable();

            $table->text('remarks')->nullable();

            $table->enum('result_status', [
                'pending',
                'competent',
                'not_competent',
            ])->default('pending');

            $table->foreignId('encoded_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamp('submitted_to_provincial_office_at')
                ->nullable();

            $table->timestamps();

            $table->unique('assessment_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('assessment_results');
    }
};