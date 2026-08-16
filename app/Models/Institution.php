<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Institution extends Model
{
    protected $fillable = [
        'name',
        'acronym',
        'ownership_type',
        'institution_type',
        'address',
        'contact_number',
        'email',
        'status',
    ];

    public function courses(): HasMany
    {
        return $this->hasMany(Course::class);
    }
}