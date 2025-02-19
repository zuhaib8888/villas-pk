<?php

namespace Database\Factories;

use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyFactory extends Factory
{
    protected $model = Property::class;

    public function definition(): array
    {
        return [
            'batch' => $this->faker->unique()->randomNumber(5),
            'city' => $this->faker->city,
            'society' => $this->faker->word,
            'block' => $this->faker->randomLetter,
            'marla' => $this->faker->randomFloat(1, 3, 20), // Between 3 to 20 marla
            'size' => $this->faker->randomElement(['5 Marla', '10 Marla', '1 Kanal']),
            'price' => $this->faker->numberBetween(1000000, 50000000), // Between 1M and 50M
            'status' => $this->faker->randomElement(['available', 'sold', 'reserved']),
        ];
    }
}
