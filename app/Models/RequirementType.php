<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RequirementType extends Model
{
    protected $fillable = [
        'name',
        'description',
        'is_required',
        'applies_to',
        'status',
    ];

    protected $casts = [
        'is_required' => 'boolean',
    ];

    /*
    |--------------------------------------------------------------------------
    | Enrollment Requirements
    |--------------------------------------------------------------------------
    */

    public function enrollmentRequirements(): HasMany
    {
        return $this->hasMany(EnrollmentRequirement::class);
    }
}