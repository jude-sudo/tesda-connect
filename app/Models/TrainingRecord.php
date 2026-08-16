<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrainingRecord extends Model
{
    protected $fillable = [
        'student_id',
        'batch_id',
        'training_hours',
        'attendance_percentage',
        'training_status',
        'completed_at',
        'remarks',
    ];

    protected $casts = [
        'training_hours' => 'decimal:2',
        'attendance_percentage' => 'decimal:2',
        'completed_at' => 'date',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function batch(): BelongsTo
    {
        return $this->belongsTo(Batch::class);
    }
}