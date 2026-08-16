<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = DB::table('permissions')
            ->pluck('id', 'name');

        $roles = [

            'Administrator' => [
                'enrollment.view',
                'student.view',
                'student.manage',
                'announcement.view',
                'announcement.manage',
                'schedule.view',
                'schedule.manage',
                'training.record.view',
                'training.record.manage',
                'assessment.view',
                'assessment.manage',
                'competency.view',
                'utpras.view',
                'utpras.manage',
                'utpras.documents.manage',
                'system.manage',
            ],

            'Registrar' => [
                'enrollment.view',
                'enrollment.confirm',
                'enrollment.reject',
                'student.view',
                'student.manage',
                'student.account.manage',
                'announcement.view',
                'announcement.manage',
                'schedule.view',
                'training.record.view',
                'assessment.view',
                'competency.view',
            ],

            'Focal Person' => [
                'student.view',
                'announcement.view',
                'schedule.view',
                'training.record.view',
                'assessment.view',
                'competency.view',
                'utpras.view',
                'utpras.manage',
                'utpras.documents.manage',
            ],

            'Trainee' => [
                'enrollment.submit',
                'announcement.view',
                'schedule.view',
                'training.record.view',
                'competency.view',
            ],
        ];

        foreach ($roles as $role => $permissionNames) {

            foreach ($permissionNames as $permissionName) {

                if (!isset($permissions[$permissionName])) {
                    continue;
                }

                DB::table('role_permissions')->updateOrInsert(
                    [
                        'role' => $role,
                        'permission_id' => $permissions[$permissionName],
                    ],
                    [
                        'updated_at' => now(),
                        'created_at' => now(),
                    ]
                );
            }
        }
    }
}