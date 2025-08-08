<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use Inertia\Inertia;
use Inertia\Response;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
public function store(RegisterRequest $request): RedirectResponse
{
    $user = User::create([
        'firstname' => $request->firstname,
        'lastname' => $request->lastname,
        'phone' => $request->phone,
        'region' => $request->region,
        'province' => $request->province,
        'city' => $request->city,
        'barangay' => $request->barangay,
        'age' => $request->age,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'role' => 'customer', // Or set default role
    ]);

    event(new Registered($user));
    Auth::login($user);

    // Redirect based on role
    if ($user->role === 'admin') {
        return redirect()->intended(route('admin.dashboard'));
    } else {
        return redirect()->intended(route('customer.dashboard'));
    }
}

 
public function checkEmail(Request $request)
{
    $email = $request->query('email');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return response()->json(['exists' => false], 400); 
    }

    $exists = User::where('email', $email)->exists();

    return response()->json(['exists' => $exists]);
}

}