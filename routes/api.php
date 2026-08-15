<?php

use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {

    // Get currently logged-in user
    Route::get('/user', [
        SettingsController::class,
        'user'
    ]);

    // Update profile and password
    Route::put('/user/profile', [
        SettingsController::class,
        'updateProfile'
    ]);

});