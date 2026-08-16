<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Institution;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $mif = Institution::where('acronym', 'MIF')->first();

        $bst = Institution::where('acronym', 'BST')->first();

        /*
        |--------------------------------------------------------------------------
        | Mamburao Integrated Farm
        |--------------------------------------------------------------------------
        */

        Course::create([
            'institution_id' => $mif->id,
            'code' => 'OAP-NCII',
            'name' => 'Organic Agricultural Production NC II',
            'qualification' => 'Organic Agricultural Production NC II',
            'description' => 'Training program for Organic Agricultural Production NC II.',
            'training_hours' => 232,
            'training_days' => 29,
            'status' => 'active',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Balli School of Technology
        |--------------------------------------------------------------------------
        */

        Course::create([
            'institution_id' => $bst->id,
            'code' => 'RM-O-NCII',
            'name' => 'Rice Machinery Operations NC II',
            'qualification' => 'Rice Machinery Operations NC II',
            'description' => 'Training program for Rice Machinery Operations NC II.',
            'training_hours' => 232,
            'training_days' => 29,
            'status' => 'active',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Entrepreneurship Training
        |--------------------------------------------------------------------------
        |
        | This is treated as a separate course/component as discussed
        | during the interview.
        |
        */

        Course::create([
            'institution_id' => $mif->id,
            'code' => 'ENTREPRENEURSHIP',
            'name' => 'Entrepreneurship Training',
            'qualification' => null,
            'description' => 'Three-day entrepreneurship training associated with the training program.',
            'training_hours' => 24,
            'training_days' => 3,
            'status' => 'active',
        ]);
    }
}