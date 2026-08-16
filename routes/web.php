<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\SettingsController;
use Illuminate\Http\Request;
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
| Authenticated User
|--------------------------------------------------------------------------
|
| React uses this endpoint to determine whether the user is logged in.
|
*/

Route::get('/api/me', function (Request $request) {

    if (!$request->user()) {

        return response()->json([
            'user' => null,
            'message' => 'Unauthenticated.',
        ], 401);

    }

    return response()->json([
        'user' => [
            'id' => $request->user()->id,
            'name' => $request->user()->name,
            'username' => $request->user()->username,
            'role' => $request->user()->role,
        ],
    ]);

})->middleware('auth')->name('api.me');


/*
|--------------------------------------------------------------------------
| Protected SPA Pages
|--------------------------------------------------------------------------
|
| These routes are protected by BOTH:
|
| auth
| role
|
| Administrator automatically has access to everything
| because of your RoleMiddleware.
|
*/


/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
|
| All authenticated roles can access Dashboard.
|
*/

Route::get('/dashboard', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Registrar,Focal Person,Trainer,Trainee,Scholar'
    ])
    ->name('dashboard');


/*
|--------------------------------------------------------------------------
| Trainee Intake
|--------------------------------------------------------------------------
|
| Administrator + Registrar only.
|
*/

Route::get('/trainee-intake', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Registrar'
    ])
    ->name('trainee-intake');


/*
|--------------------------------------------------------------------------
| Profiles & Records
|--------------------------------------------------------------------------
|
| Administrator + Registrar only.
|
*/

Route::get('/profiles-records', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Registrar'
    ])
    ->name('profiles-records');


/*
|--------------------------------------------------------------------------
| Announcements
|--------------------------------------------------------------------------
|
| Administrator + Focal Person + Trainee + Scholar.
|
*/

Route::get('/announcements', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Focal Person,Trainee,Scholar'
    ])
    ->name('announcements.index');


/*
|--------------------------------------------------------------------------
| Announcements Management
|--------------------------------------------------------------------------
|
| Administrator + Focal Person only.
|
*/

Route::get('/announcements/manage', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Focal Person'
    ])
    ->name('announcements.manage');


/*
|--------------------------------------------------------------------------
| Schedule Coordination
|--------------------------------------------------------------------------
|
| Administrator + Focal Person + Trainer + Trainee + Scholar.
|
*/

Route::get('/schedule-coordination', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Focal Person,Trainer,Trainee,Scholar'
    ])
    ->name('schedule-coordination');


/*
|--------------------------------------------------------------------------
| Schedules
|--------------------------------------------------------------------------
|
| View:
| Administrator + Focal Person + Trainer + Trainee + Scholar
|
*/

Route::get('/schedules', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Focal Person,Trainer,Trainee,Scholar'
    ])
    ->name('schedules.index');


/*
|--------------------------------------------------------------------------
| Schedule Management
|--------------------------------------------------------------------------
|
| Administrator + Focal Person + Trainer.
|
*/

Route::get('/schedules/manage', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Focal Person,Trainer'
    ])
    ->name('schedules.manage');


/*
|--------------------------------------------------------------------------
| Report Readiness
|--------------------------------------------------------------------------
|
| Administrator + Focal Person only.
|
*/

Route::get('/report-readiness', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Focal Person'
    ])
    ->name('report-readiness');


/*
|--------------------------------------------------------------------------
| Settings
|--------------------------------------------------------------------------
|
| All authenticated roles.
|
*/

Route::get('/settings', function () {
    return view('welcome');
})
    ->middleware([
        'auth',
        'role:Administrator,Registrar,Focal Person,Trainer,Trainee,Scholar'
    ])
    ->name('settings');


/*
|--------------------------------------------------------------------------
| User / Account
|--------------------------------------------------------------------------
|
| These remain protected by authentication.
|
*/

Route::middleware('auth')->group(function () {

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
| Public Landing Page
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');


/*
|--------------------------------------------------------------------------
| React SPA Catch-All
|--------------------------------------------------------------------------
|
| IMPORTANT:
| Keep this LAST.
|
*/

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');