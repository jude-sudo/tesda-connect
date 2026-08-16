<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\Batch;
use App\Models\Enrollment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class EnrollmentSeeder extends Seeder
{
    public function run(): void
    {
        $students = Student::orderBy('id')->get();

        $batches = Batch::orderBy('id')->get();

        if ($students->count() < 3) {
            $this->command->warn(
                'Kailangan ng kahit 3 students bago mag-run ang EnrollmentSeeder.'
            );

            return;
        }

        if ($batches->count() < 2) {
            $this->command->warn(
                'Kailangan ng kahit 2 batches bago mag-run ang EnrollmentSeeder.'
            );

            return;
        }

        $enrollments = [
            [
                'student_id' => $students[0]->id,
                'batch_id' => $batches[0]->id,
                'status' => 'submitted',
                'submitted_at' => now()->subDays(3),
                'remarks' => 'Complete enrollment submission.',
            ],
            [
                'student_id' => $students[1]->id,
                'batch_id' => $batches[0]->id,
                'status' => 'confirmed',
                'submitted_at' => now()->subDays(5),
                'confirmed_at' => now()->subDays(2),
                'remarks' => 'Enrollment confirmed by Registrar.',
            ],
            [
                'student_id' => $students[2]->id,
                'batch_id' => $batches[1]->id,
                'status' => 'draft',
                'remarks' => 'Student has not yet submitted requirements.',
            ],
        ];

        foreach ($enrollments as $data) {

            $student = Student::find($data['student_id']);

            $enrollment = Enrollment::create([
                'student_id' => $data['student_id'],
                'batch_id' => $data['batch_id'],
                'enrollment_number' => 'ENR-' . date('Y') . '-' . strtoupper(
                    Str::random(6)
                ),
                'status' => $data['status'],
                'submitted_at' => $data['submitted_at'] ?? null,
                'confirmed_at' => $data['confirmed_at'] ?? null,
                'confirmed_by' => null,
                'remarks' => $data['remarks'] ?? null,
            ]);

            $this->command->info(
                "Created enrollment {$enrollment->enrollment_number} for {$student->first_name} {$student->last_name}"
            );
        }
    }
}