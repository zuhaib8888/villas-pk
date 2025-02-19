<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory; // Add this line

    protected $fillable = [
        'batch',
        'city',
        'society',
        'block',
        'marla',
        'size',
        'price',
        'status'
    ];
}
