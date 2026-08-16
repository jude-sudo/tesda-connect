<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('institutions', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('acronym')->nullable();

            $table->enum('ownership_type', [
                'sole_proprietor',
                'corporation',
                'government',
                'partnership',
                'other',
            ])->default('other');

            $table->enum('institution_type', [
                'training_institution',
                'assessment_center',
                'both',
                'other',
            ])->default('training_institution');

            $table->text('address')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('email')->nullable();

            $table->enum('status', [
                'active',
                'inactive',
            ])->default('active');

            $table->timestamps();

            $table->index('status');
            $table->index('acronym');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('institutions');
    }
};