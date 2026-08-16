<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class AssessmentResult extends Model
{
    protected $fillable = [
        'assessment_id',
        'score',
        'remarks',
        'result_status',
        'encoded_by',
        'submitted_to_provincial_office_at',
    ];

    protected $casts = [
        'score' => 'decimal:2',
        'submitted_to_provincial_office_at' => 'datetime',
    ];

    public function assessment(): BelongsTo
    {
        return $this->belongsTo(Assessment::class);
    }

    public function encoder(): BelongsTo
    {
        return $this->belongsTo(User::class, 'encoded_by');
    }

    public function competencyResult(): HasOne
    {
        return $this->hasOne(CompetencyResult::class);
    }
}