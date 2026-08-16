<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Student;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        /*
        |--------------------------------------------------------------------------
        | USERS WITH DIFFERENT ROLES
        |--------------------------------------------------------------------------
        */

        $users = [
            [
                'name' => 'Juan Cruz',
                'username' => 'juan',
                'email' => 'juan.cruz@example.com',
                'role' => 'Registrar',
            ],

            [
                'name' => 'Maria Reyes',
                'username' => 'maria',
                'email' => 'maria.reyes@example.com',
                'role' => 'Focal Person',
            ],

            [
                'name' => 'Pedro Santos',
                'username' => 'pedro',
                'email' => 'pedro.santos@example.com',
                'role' => 'Trainer',
            ],

            [
                'name' => 'Ana Garcia',
                'username' => 'ana',
                'email' => 'ana.garcia@example.com',
                'role' => 'Trainee',
            ],

        ];


        /*
        |--------------------------------------------------------------------------
        | CREATE USERS
        |--------------------------------------------------------------------------
        */

        foreach ($users as $data) {

            User::updateOrCreate(
                [
                    'username' => $data['username'],
                ],
                [
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'password' => Hash::make('admin123'),
                    'role' => $data['role'],
                ]
            );
        }


        /*
        |--------------------------------------------------------------------------
        | STUDENTS / TRAINEES
        |--------------------------------------------------------------------------
        |
        | Student records should only be created for actual trainees/scholars.
        |
        */

        $students = [

            [
                'first_name' => 'Juan',
                'middle_name' => 'Dela',
                'last_name' => 'Cruz',
                'username' => 'juan.cruz',

                'sex' => 'Male',
                'birth_date' => '2002-05-15',
                'civil_status' => 'Single',
                'contact_number' => '09171234567',
                'email' => 'juan.cruz@example.com',
                'address' => 'Barangay Poblacion',
                'barangay' => 'Poblacion',
                'municipality' => 'Mamburao',
                'province' => 'Occidental Mindoro',
            ],

            [
                'first_name' => 'Maria',
                'middle_name' => 'Santos',
                'last_name' => 'Reyes',
                'username' => 'maria.reyes',

                'sex' => 'Female',
                'birth_date' => '2001-08-20',
                'civil_status' => 'Single',
                'contact_number' => '09181234567',
                'email' => 'maria.reyes@example.com',
                'address' => 'Barangay Fatima',
                'barangay' => 'Fatima',
                'municipality' => 'Mamburao',
                'province' => 'Occidental Mindoro',
            ],
        ];


        /*
        |--------------------------------------------------------------------------
        | CREATE STUDENT RECORDS
        |--------------------------------------------------------------------------
        */

        foreach ($students as $data) {

            $user = User::where(
                'username',
                $data['username']
            )->first();

            if (!$user) {
                continue;
            }

            Student::updateOrCreate(
                [
                    'user_id' => $user->id,
                ],
                [
                    'student_number' => 'STU-' . date('Y') . '-' .
                        str_pad(
                            Student::count() + 1,
                            4,
                            '0',
                            STR_PAD_LEFT
                        ),

                    'first_name' => $data['first_name'],
                    'middle_name' => $data['middle_name'],
                    'last_name' => $data['last_name'],

                    'birth_date' => $data['birth_date'],
                    'sex' => $data['sex'],
                    'civil_status' => $data['civil_status'],

                    'contact_number' => $data['contact_number'],
                    'email' => $data['email'],

                    'address' => $data['address'],
                    'barangay' => $data['barangay'],
                    'municipality' => $data['municipality'],
                    'province' => $data['province'],

                    'status' => 'active',
                ]
            );
        }
    }
}

