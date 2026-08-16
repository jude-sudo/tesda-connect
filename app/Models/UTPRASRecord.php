<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UTPRASRecord extends Model
{
    protected $fillable = [
        'student_id',
        'course_id',
        'created_by',
        'registration_number',
        'record_type',
        'status',
        'registration_date',
        'remarks',
    ];

    protected $casts = [
        'registration_date' => 'date',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function documents(): HasMany
    {
        return $this->hasMany(UTPRASDocument::class);
    }
}