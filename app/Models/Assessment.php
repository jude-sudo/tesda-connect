<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Assessment extends Model
{
    protected $fillable = [
        'student_id',
        'batch_id',
        'course_id',
        'assessment_date',
        'assessment_type',
        'assessor_name',
        'status',
        'remarks',
    ];

    protected $casts = [
        'assessment_date' => 'date',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function batch(): BelongsTo
    {
        return $this->belongsTo(Batch::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function result(): HasOne
    {
        return $this->hasOne(AssessmentResult::class);
    }
}