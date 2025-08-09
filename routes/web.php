<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\CheckUserRole;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;


Route::get('/welcome', function () {
    return Inertia::render('Landing/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('page.welcome');


Route::get('/about',fn()=>inertia('Landing/About'))->name('page.about');
Route::get('/services',fn()=>inertia('Landing/Service'))->name('page.service');
Route::get('/blog',fn()=>inertia('Landing/Blog'))->name('page.blog');
Route::get('/contact',fn()=>inertia('Landing/Contact'))->name('page.contact');


Route::get('/', function(){
  if(Auth::check()){
    $user = Auth::user();
    if($user->role === 'admin') return redirect()->route('admin.dashboard');
    else if($user->role === 'customer') return redirect()->route('customer.dashboard');
   }

   return redirect()->route('page.welcome'); 
});


Route::middleware(['auth','verified',CheckUserRole::class . ':admin'])->group(function(){
  Route::get('/admin/dashboard', fn()=>inertia('Admin/Dashboard'))->name('admin.dashboard');
  Route::get('/dashboard', fn()=>inertia('Dashboard'))->name('dashboard');
});

Route::middleware(['auth','verified',CheckUserRole::class . ':customer'])->group(function(){
  Route::get('/customer/dashboard', fn()=>inertia('Customers/Dashboard'))->name('customer.dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
