<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('competency_results', function (Blueprint $table) {
            $table->id();

            $table->foreignId('assessment_result_id')
                ->constrained('assessment_results')
                ->cascadeOnDelete();

            $table->enum('competency_status', [
                'competent',
                'not_competent',
            ]);

            $table->date('result_date')->nullable();

            $table->text('remarks')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('competency_results');
    }
};