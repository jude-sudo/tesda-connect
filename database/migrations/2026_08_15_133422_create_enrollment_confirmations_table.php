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
        Schema::create('enrollment_confirmations', function (Blueprint $table) {
            $table->id();

            $table->foreignId('enrollment_id')
                ->constrained('enrollments')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->enum('action', [
                'submitted',
                'reviewed',
                'confirmed',
                'returned',
                'rejected',
            ]);

            $table->text('remarks')->nullable();

            $table->foreignId('processed_by')
                ->constrained('users')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->timestamp('processed_at');

            $table->timestamps();

            $table->index([
                'enrollment_id',
                'action'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrollment_confirmations');
    }
};
