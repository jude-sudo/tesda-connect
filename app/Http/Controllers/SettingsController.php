<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class SettingsController extends Controller
{
    /**
     * Get currently logged-in user
     */
    public function user(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
        ]);
    }


    /**
     * Update profile and password
     */
    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users', 'email')
                    ->ignore($user->id),
            ],

            'current_password' => [
                'nullable',
                'string',
            ],

            'new_password' => [
                'nullable',
                'string',
                'min:8',
                'confirmed',
            ],
        ]);


        /*
        |--------------------------------------------------------------------------
        | Update Name
        |--------------------------------------------------------------------------
        */

        $user->name = $validated['name'];


        /*
        |--------------------------------------------------------------------------
        | Update Email
        |--------------------------------------------------------------------------
        */

        $user->email = $validated['email'];


        /*
        |--------------------------------------------------------------------------
        | Update Password
        |--------------------------------------------------------------------------
        */

        if (!empty($validated['new_password'])) {

            if (empty($validated['current_password'])) {

                return response()->json([
                    'message' =>
                        'Current password is required when changing password.',
                ], 422);
            }


            if (!Hash::check(
                $validated['current_password'],
                $user->password
            )) {

                return response()->json([
                    'message' =>
                        'Current password is incorrect.',
                ], 422);
            }


            $user->password = Hash::make(
                $validated['new_password']
            );
        }


        $user->save();


        return response()->json([
            'message' =>
                'Account settings updated successfully.',

            'user' => $user,
        ]);
    }
}