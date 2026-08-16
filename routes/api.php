<?php

use Illuminate\Support\Facades\Route;



Route::middleware('auth')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Administrator
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator')->prefix('admin')->group(function () {

        Route::get('/dashboard', function () {
            return response()->json([
                'message' => 'Administrator dashboard'
            ]);
        });

    });


    /*
    |--------------------------------------------------------------------------
    | Registrar
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Registrar')->prefix('registrar')->group(function () {

        Route::get('/dashboard', function () {
            return response()->json([
                'message' => 'Registrar dashboard'
            ]);
        });

        Route::get('/trainee-intake', function () {
            return response()->json([
                'message' => 'Trainee Intake'
            ]);
        });

        Route::get('/profiles-records', function () {
            return response()->json([
                'message' => 'Profiles & Records'
            ]);
        });

    });


    /*
    |--------------------------------------------------------------------------
    | Focal Person
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Focal Person')->prefix('focal-person')->group(function () {

        Route::get('/dashboard', function () {
            return response()->json([
                'message' => 'Focal Person dashboard'
            ]);
        });

        Route::get('/announcements', function () {
            return response()->json([
                'message' => 'Announcements'
            ]);
        });

        Route::get('/schedule-coordination', function () {
            return response()->json([
                'message' => 'Schedule Coordination'
            ]);
        });

        Route::get('/report-readiness', function () {
            return response()->json([
                'message' => 'Report Readiness'
            ]);
        });

    });


    /*
    |--------------------------------------------------------------------------
    | Trainer
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Trainer')->prefix('trainer')->group(function () {

        Route::get('/dashboard', function () {
            return response()->json([
                'message' => 'Trainer dashboard'
            ]);
        });

        Route::get('/schedule-coordination', function () {
            return response()->json([
                'message' => 'Schedule Coordination'
            ]);
        });

    });


    /*
    |--------------------------------------------------------------------------
    | Trainee / Scholar
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Trainee')->prefix('trainee')->group(function () {

        Route::get('/dashboard', function () {
            return response()->json([
                'message' => 'Trainee / Scholar dashboard'
            ]);
        });

        Route::get('/announcements', function () {
            return response()->json([
                'message' => 'Announcements'
            ]);
        });

        Route::get('/schedule-coordination', function () {
            return response()->json([
                'message' => 'Schedule Coordination'
            ]);
        });

    });

});