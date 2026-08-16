<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UTPRASDocument extends Model
{
    protected $fillable = [
        'utpras_record_id',
        'uploaded_by',
        'document_name',
        'document_type',
        'file_path',
        'status',
        'remarks',
    ];

    public function utprasRecord(): BelongsTo
    {
        return $this->belongsTo(UTPRASRecord::class);
    }

    public function uploader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }
}   