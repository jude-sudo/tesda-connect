<?php

namespace Database\Seeders;

use App\Models\RequirementType;
use Illuminate\Database\Seeder;

class RequirementTypeSeeder extends Seeder
{
    public function run(): void
    {
        $requirements = [
            [
                'name' => 'Birth Certificate',
                'description' => 'PSA or valid birth certificate.',
                'is_required' => true,
                'applies_to' => 'all',
                'status' => 'active',
            ],

            [
                'name' => 'Valid ID',
                'description' => 'Government-issued valid identification.',
                'is_required' => true,
                'applies_to' => 'all',
                'status' => 'active',
            ],

            [
                'name' => 'Barangay Certificate',
                'description' => 'Certificate issued by the applicant\'s barangay.',
                'is_required' => true,
                'applies_to' => 'all',
                'status' => 'active',
            ],

            [
                'name' => '2x2 ID Picture',
                'description' => 'Recent 2x2 identification photograph.',
                'is_required' => true,
                'applies_to' => 'all',
                'status' => 'active',
            ],

            [
                'name' => 'Enrollment Form',
                'description' => 'Completed student enrollment form.',
                'is_required' => true,
                'applies_to' => 'all',
                'status' => 'active',
            ],

            [
                'name' => 'Educational Certificate / School Record',
                'description' => 'Available educational record or certificate.',
                'is_required' => false,
                'applies_to' => 'all',
                'status' => 'active',
            ],

            [
                'name' => 'Medical Certificate',
                'description' => 'Medical certificate when required by the training program.',
                'is_required' => false,
                'applies_to' => 'all',
                'status' => 'active',
            ],

            [
                'name' => 'Other Supporting Document',
                'description' => 'Additional document required for the specific training program.',
                'is_required' => false,
                'applies_to' => 'all',
                'status' => 'active',
            ],
        ];

        foreach ($requirements as $requirement) {
            RequirementType::create($requirement);
        }
    }
}