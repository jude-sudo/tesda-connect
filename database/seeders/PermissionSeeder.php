<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            [
                'name' => 'enrollment.view',
                'description' => 'View student enrollments',
            ],
            [
                'name' => 'enrollment.submit',
                'description' => 'Submit enrollment',
            ],
            [
                'name' => 'enrollment.confirm',
                'description' => 'Confirm student enrollment',
            ],
            [
                'name' => 'enrollment.reject',
                'description' => 'Reject student enrollment',
            ],
            [
                'name' => 'student.view',
                'description' => 'View student records',
            ],
            [
                'name' => 'student.manage',
                'description' => 'Manage student records',
            ],
            [
                'name' => 'student.account.manage',
                'description' => 'Manage student accounts and password assistance',
            ],
            [
                'name' => 'announcement.view',
                'description' => 'View announcements',
            ],
            [
                'name' => 'announcement.manage',
                'description' => 'Create and manage announcements',
            ],
            [
                'name' => 'schedule.view',
                'description' => 'View training schedules',
            ],
            [
                'name' => 'schedule.manage',
                'description' => 'Create and manage training schedules',
            ],
            [
                'name' => 'training.record.view',
                'description' => 'View training records',
            ],
            [
                'name' => 'training.record.manage',
                'description' => 'Manage training records',
            ],
            [
                'name' => 'assessment.view',
                'description' => 'View assessment records',
            ],
            [
                'name' => 'assessment.manage',
                'description' => 'Manage assessments and grades',
            ],
            [
                'name' => 'competency.view',
                'description' => 'View competency results',
            ],
            [
                'name' => 'utpras.view',
                'description' => 'View UTPRAS records',
            ],
            [
                'name' => 'utpras.manage',
                'description' => 'Manage UTPRAS registration and records',
            ],
            [
                'name' => 'utpras.documents.manage',
                'description' => 'Upload and manage UTPRAS documents',
            ],
            [
                'name' => 'system.manage',
                'description' => 'Manage system settings and users',
            ],
        ];

        foreach ($permissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['name' => $permission['name']],
                [
                    'description' => $permission['description'],
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }
    }
}