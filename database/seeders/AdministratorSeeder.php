<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdministratorSeeder extends Seeder
{
    public function run(): void
    {
         User::updateOrCreate(
            [
                'username' => 'admin',
            ],
            [
                'name' => 'Administrator',
                'email' => 'admin@tesdaconnect.local',
                'role' => 'Administrator',
                'password' => Hash::make('admin123'),
            ]
        );
    }
}