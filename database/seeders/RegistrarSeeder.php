<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class RegistrarSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['username' => 'registrar'],
            [
                'name' => 'Juan Cruz',
                'email' => 'registrar@tesdaconnect.test',
                'password' => Hash::make('password'),
                'role' => 'Registrar',
            ]
        );
    }
}
