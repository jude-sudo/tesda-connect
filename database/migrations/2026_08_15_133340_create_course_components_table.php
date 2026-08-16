<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('course_components', function (Blueprint $table) {
            $table->id();

            $table->foreignId('course_id')
                ->constrained('courses')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->string('name');

            $table->enum('type', [
                'technical_training',
                'entrepreneurship',
                'assessment',
                'other',
            ])->default('technical_training');

            $table->unsignedInteger('hours')->default(0);
            $table->unsignedInteger('days')->default(0);

            $table->boolean('is_required')->default(true);

            $table->text('description')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('course_components');
    }
};