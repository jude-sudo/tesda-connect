<?php

namespace Database\Seeders;

use App\Models\Enrollment;
use App\Models\RequirementType;
use App\Models\EnrollmentRequirement;
use Illuminate\Database\Seeder;

class EnrollmentRequirementSeeder extends Seeder
{
    public function run(): void
    {
        $enrollments = Enrollment::orderBy('id')->get();

        $requirements = RequirementType::where('status', 'active')
            ->orderBy('id')
            ->get();

        if ($enrollments->isEmpty()) {
            $this->command->warn(
                'Walang enrollment na nakita.'
            );

            return;
        }

        if ($requirements->isEmpty()) {
            $this->command->warn(
                'Walang active requirement types na nakita.'
            );

            return;
        }

        foreach ($enrollments as $enrollment) {

            foreach ($requirements as $requirement) {

                $status = 'pending';

                if ($enrollment->status === 'confirmed') {
                    $status = 'verified';
                }

                EnrollmentRequirement::create([
                    'enrollment_id' => $enrollment->id,
                    'requirement_type_id' => $requirement->id,
                    'file_path' => null,
                    'original_filename' => null,
                    'mime_type' => null,
                    'file_size' => null,
                    'status' => $status,
                    'submitted_at' => $enrollment->submitted_at,
                    'verified_at' => $status === 'verified'
                        ? $enrollment->confirmed_at
                        : null,
                    'verified_by' => null,
                    'remarks' => $status === 'verified'
                        ? 'Requirement verified.'
                        : 'Waiting for student submission.',
                ]);
            }
        }

        $this->command->info(
            'Enrollment requirements successfully seeded.'
        );
    }
}