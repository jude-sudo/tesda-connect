<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Enrollment extends Model
{
    protected $fillable = [
        'student_id',
        'batch_id',
        'enrollment_number',
        'status',
        'submitted_at',
        'confirmed_at',
        'confirmed_by',
        'rejected_at',
        'rejected_by',
        'rejection_reason',
        'remarks',
    ];

    protected $casts = [
        'submitted_at' => 'datetime',
        'confirmed_at' => 'datetime',
        'rejected_at' => 'datetime',
    ];

public function student(): BelongsTo
{
    return $this->belongsTo(Student::class);
}

public function batch(): BelongsTo
{
    return $this->belongsTo(Batch::class);
}

public function confirmedBy(): BelongsTo
{
    return $this->belongsTo(User::class, 'confirmed_by');
}

public function rejectedBy(): BelongsTo
{
    return $this->belongsTo(User::class, 'rejected_by');
}

public function requirements(): HasMany
{
    return $this->hasMany(EnrollmentRequirement::class);
}

public function confirmations(): HasMany
{
    return $this->hasMany(EnrollmentConfirmation::class);
}
}