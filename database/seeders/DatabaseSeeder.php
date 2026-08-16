<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        
         $this->call([
            AdministratorSeeder::class,
            RegistrarSeeder::class, 
            FocalPersonSeeder::class,

            InstitutionSeeder::class,
            CourseSeeder::class,
            BatchSeeder::class,
            RequirementTypeSeeder::class,

            StudentSeeder::class,
            
            PermissionSeeder::class,
            RolePermissionSeeder::class,
            
            EnrollmentSeeder::class,
            EnrollmentRequirementSeeder::class,
            EnrollmentConfirmationSeeder::class,
        ]);

       
    }
}