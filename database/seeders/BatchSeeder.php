<?php

namespace Database\Seeders;

use App\Models\Batch;
use App\Models\Course;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class BatchSeeder extends Seeder
{
    public function run(): void
    {
        $oap = Course::where('code', 'OAP-NCII')->first();

        $riceMachinery = Course::where('code', 'RM-O-NCII')->first();

        /*
        |--------------------------------------------------------------------------
        | MIF - Organic Agricultural Production NC II
        |--------------------------------------------------------------------------
        */

        Batch::create([
            'course_id' => $oap->id,
            'batch_code' => 'MIF-OAP-2026-01',
            'batch_name' => 'Organic Agricultural Production NC II - Batch 1',
            'start_date' => Carbon::parse('2026-09-01'),
            'end_date' => Carbon::parse('2026-09-29'),
            'capacity' => 25,
            'training_hours' => 232,
            'training_days' => 29,
            'status' => 'planned',
            'remarks' => 'Initial training batch for Mamburao Integrated Farm.',
        ]);

        /*
        |--------------------------------------------------------------------------
        | BST - Rice Machinery Operations NC II
        |--------------------------------------------------------------------------
        */

        Batch::create([
            'course_id' => $riceMachinery->id,
            'batch_code' => 'BST-RMO-2026-01',
            'batch_name' => 'Rice Machinery Operations NC II - Batch 1',
            'start_date' => Carbon::parse('2026-10-01'),
            'end_date' => Carbon::parse('2026-10-29'),
            'capacity' => 25,
            'training_hours' => 232,
            'training_days' => 29,
            'status' => 'planned',
            'remarks' => 'Initial training batch for Balli School of Technology.',
        ]);
    }
}