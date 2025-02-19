<?php

namespace Database\Seeders;

use App\Models\Property;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed 20 properties
        Property::factory(20)->create();
    }
}
