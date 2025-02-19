<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Remove this route as it conflicts with the PropertyController route
 Route::get('/dashboard', function () {
     return Inertia::render('Dashboard', [
         'laravelVersion' => app()->version(),
         'phpVersion' => PHP_VERSION,
     ]);
 })->name('dashboard');

// Group all authenticated routes together
Route::middleware(['auth'])->group(function () {
    // Dashboard route
    Route::get('/dashboard', [PropertyController::class, 'index'])->name('dashboard');
    
    // Property routes
    Route::post('/properties/upload', [PropertyController::class, 'upload'])->name('properties.upload');
    
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';