<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessPropertyUpload;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class PropertyController extends Controller
{
    public function index()
    {
        
        $properties = Property::paginate(10);
        
        return Inertia::render('Dashboard', [
            'properties' => $properties
        ]);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,xls'
        ]);

        $file = $request->file('file');
        $batchNumber = 'BATCH-' . time();

        $data = Excel::toArray([], $file)[0];
        
        // Remove header row
        array_shift($data);
        
        // Process in chunks of 100
        $chunks = array_chunk($data, 100);
        
        foreach ($chunks as $chunk) {
            ProcessPropertyUpload::dispatch($chunk, $batchNumber);
        }

        return response()->json(['message' => 'Upload started successfully']);
    }
}