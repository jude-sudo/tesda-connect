<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EnrollmentRequirement extends Model
{
    protected $fillable = [
        'enrollment_id',
        'requirement_type_id',
        'file_path',
        'original_filename',
        'mime_type',
        'file_size',
        'status',
        'submitted_at',
        'verified_at',
        'verified_by',
        'rejected_at',
        'rejected_by',
        'rejection_reason',
        'remarks',
    ];

    protected $casts = [
        'submitted_at' => 'datetime',
        'verified_at' => 'datetime',
        'rejected_at' => 'datetime',
    ];

    /*
    |--------------------------------------------------------------------------
    | Enrollment
    |--------------------------------------------------------------------------
    */

    public function enrollment(): BelongsTo
    {
        return $this->belongsTo(Enrollment::class);
    }

    /*
    |--------------------------------------------------------------------------
    | Requirement Type
    |--------------------------------------------------------------------------
    */

    public function requirementType(): BelongsTo
    {
        return $this->belongsTo(RequirementType::class);
    }

    /*
    |--------------------------------------------------------------------------
    | Verified By - Registrar
    |--------------------------------------------------------------------------
    */

    public function verifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by');
    }

    /*
    |--------------------------------------------------------------------------
    | Rejected By - Registrar
    |--------------------------------------------------------------------------
    */

    public function rejectedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'rejected_by');
    }
}