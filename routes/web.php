<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

Route::post('/login', [LoginController::class, 'login'])
    ->name('login');


/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    Route::get('/dashboard', function () {
        return view('welcome');
    })->name('dashboard');


    /*
    |--------------------------------------------------------------------------
    | User / Account Settings
    |--------------------------------------------------------------------------
    */

    Route::get('/user', [SettingsController::class, 'user'])
        ->name('user');

    Route::put('/user/profile', [
        SettingsController::class,
        'updateProfile'
    ])->name('user.profile');


    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */

    Route::post('/logout', [LoginController::class, 'logout'])
        ->name('logout');
});


/*
|--------------------------------------------------------------------------
| React SPA Catch-All
|--------------------------------------------------------------------------
*/

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');