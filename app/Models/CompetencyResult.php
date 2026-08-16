<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompetencyResult extends Model
{
    protected $fillable = [
        'assessment_result_id',
        'competency_status',
        'result_date',
        'remarks',
    ];

    protected $casts = [
        'result_date' => 'date',
    ];

    public function assessmentResult(): BelongsTo
    {
        return $this->belongsTo(AssessmentResult::class);
    }
}