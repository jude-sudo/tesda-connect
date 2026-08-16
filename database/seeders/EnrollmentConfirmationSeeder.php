<?php

namespace Database\Seeders;

use App\Models\Enrollment;
use App\Models\EnrollmentConfirmation;
use App\Models\User;
use Illuminate\Database\Seeder;

class EnrollmentConfirmationSeeder extends Seeder
{
    public function run(): void
    {
        $registrar = User::where('role', 'Registrar')->first();

        if (!$registrar) {
            $this->command->warn(
                'Walang Registrar user na nakita. Gumawa muna ng Registrar account.'
            );

            return;
        }

        $enrollment = Enrollment::where('status', 'confirmed')
            ->first();

        if (!$enrollment) {
            $this->command->warn(
                'Walang confirmed enrollment na nakita.'
            );

            return;
        }

        EnrollmentConfirmation::create([
            'enrollment_id' => $enrollment->id,
            'action' => 'confirmed',
            'remarks' => 'Enrollment confirmed by Registrar.',
            'processed_by' => $registrar->id,
            'processed_at' => $enrollment->confirmed_at ?? now(),
        ]);

        $this->command->info(
            'Enrollment confirmation successfully seeded.'
        );
    }
}