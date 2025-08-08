<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

 User::factory()->create([
    'firstname' => 'Andry',
    'lastname' => 'Villacarlos',
    'role' => 'Admin',
    'email' => 'andry@gmail.com',
    'password' => bcrypt('123.321A'),
    'email_verified_at' => time(),

    // Add these:
    'region' => 'Region Name',
    'province' => 'Province Name',
    'city' => 'City Name',
    'barangay' => 'Barangay Name',
    'age' => 20,
]);

    }
}
