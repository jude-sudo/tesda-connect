<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    public function handle(
        Request $request,
        Closure $next,
        string ...$roles
    ): Response {

        $user = $request->user();


        /*
        |--------------------------------------------------------------------------
        | Not Authenticated
        |--------------------------------------------------------------------------
        */

        if (!$user) {

            if ($request->expectsJson()) {

                return response()->json([
                    'message' => 'Unauthenticated.',
                ], 401);

            }

            return redirect('/');
        }


        /*
        |--------------------------------------------------------------------------
        | Administrator
        |--------------------------------------------------------------------------
        |
        | Administrator can access everything.
        |
        */

        if ($user->role === 'Administrator') {

            return $next($request);

        }


        /*
        |--------------------------------------------------------------------------
        | Check Role
        |--------------------------------------------------------------------------
        */

        if (!in_array($user->role, $roles, true)) {

            if ($request->expectsJson()) {

                return response()->json([
                    'message' => 'Unauthorized.',
                ], 403);

            }

            return redirect('/dashboard');

        }


        /*
        |--------------------------------------------------------------------------
        | Authorized
        |--------------------------------------------------------------------------
        */

        return $next($request);
    }
}