<?php

namespace Database\Seeders;

use App\Models\Institution;
use Illuminate\Database\Seeder;

class InstitutionSeeder extends Seeder
{
    public function run(): void
    {
        Institution::create([
            'name' => 'Mamburao Integrated Farm',
            'acronym' => 'MIF',
            'ownership_type' => 'sole_proprietor',
            'institution_type' => 'training_institution',
            'address' => 'Mamburao, Occidental Mindoro',
            'status' => 'active',
        ]);

        Institution::create([
            'name' => 'Balli School of Technology',
            'acronym' => 'BST',
            'ownership_type' => 'corporation',
            'institution_type' => 'assessment_center',
            'address' => 'Mamburao, Occidental Mindoro',
            'status' => 'active',
        ]);
    }
}