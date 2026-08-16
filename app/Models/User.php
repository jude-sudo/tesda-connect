<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;


class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

public function hasRole(string|array $roles): bool
{
    if (is_array($roles)) {
        return in_array($this->role, $roles, true);
    }

    return $this->role === $roles;
}

public function hasPermission(string $permission): bool
{
    return DB::table('role_permissions')
        ->join(
            'permissions',
            'permissions.id',
            '=',
            'role_permissions.permission_id'
        )
        ->where('role_permissions.role', $this->role)
        ->where('permissions.name', $permission)
        ->exists();
}

public function hasAnyPermission(array $permissions): bool
{
    foreach ($permissions as $permission) {
        if ($this->hasPermission($permission)) {
            return true;
        }
    }

    return false;
}

public function hasAllPermissions(array $permissions): bool
{
    foreach ($permissions as $permission) {
        if (!$this->hasPermission($permission)) {
            return false;
        }
    }

    return true;
}




    public function student()
{
    return $this->hasOne(Student::class);
}

public function announcements()
{
    return $this->hasMany(Announcement::class, 'created_by');
}

public function schedules()
{
    return $this->hasMany(Schedule::class, 'created_by');
}

public function confirmedEnrollments()
{
    return $this->hasMany(Enrollment::class, 'confirmed_by');
}

public function rejectedEnrollments()
{
    return $this->hasMany(Enrollment::class, 'rejected_by');
}

public function assessmentResults()
{
    return $this->hasMany(AssessmentResult::class, 'encoded_by');
}

public function utprasRecords()
{
    return $this->hasMany(UTPRASRecord::class, 'created_by');
}

public function utprasDocuments()
{
    return $this->hasMany(UTPRASDocument::class, 'uploaded_by');
}
}
