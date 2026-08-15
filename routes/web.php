<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');


Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', [LoginController::class, 'login'])
    ->name('login');

    
Route::middleware('auth')->group(function () {

    Route::get('/dashboard', function () {
        return view('welcome');
    })->name('dashboard');

});


Route::post('/logout', function () {
    Auth::logout();

    request()->session()->invalidate();
    request()->session()->regenerateToken();

    return response()->json([
        'success' => true,
    ]);
})->middleware('auth')->name('logout');