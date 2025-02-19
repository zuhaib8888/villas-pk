<?php

namespace App\Jobs;

use App\Models\Property;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessPropertyUpload implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $data;
    private $batchNumber;

    public function __construct(array $data, string $batchNumber)
    {
        $this->data = $data;
        $this->batchNumber = $batchNumber;
    }

    public function handle()
    {
        
        foreach ($this->data as $row) {
           Property::create([
    'batch' => $this->batchNumber,
    'city' => $row['city'] ?? 'Unknown',
    'society' => $row['society'] ?? 'Unknown',
    'block' => $row['block'] ?? 'Unknown',
    'marla' => $row['marla'] ?? 0,
    'size' => $row['size'] ?? '',
    'price' => $row['price'] ?? 0,
    'status' => $row['status'] ?? 'Available'
]);

        }
    }
}