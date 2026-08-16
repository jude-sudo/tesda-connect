<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class FocalPersonSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['username' => 'focal.person'],
            [
                'name' => 'UTPRAS Focal Person',
                'email' => 'focalperson@tesdaconnect.test',
                'password' => Hash::make('password'),
                'role' => 'Focal Person',
            ]
        );
    }
}

