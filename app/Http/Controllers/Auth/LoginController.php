<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
            'role' => ['required'],
        ]);

        if (!Auth::attempt([
            'username' => $credentials['username'],
            'password' => $credentials['password'],
        ])) {
            return response()->json([
                'message' => 'Invalid username or password.'
            ], 401);
        }

        $request->session()->regenerate();

        $user = Auth::user();

        // Siguraduhin na tugma ang role
        if ($user->role !== $credentials['role']) {
            Auth::logout();

            return response()->json([
                'message' => 'The selected account type does not match this account.'
            ], 403);
        }

        return response()->json([
            'message' => 'Login successful.',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'username' => $user->username,
                'role' => $user->role,
            ]
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out successfully.'
        ]);
    }
}