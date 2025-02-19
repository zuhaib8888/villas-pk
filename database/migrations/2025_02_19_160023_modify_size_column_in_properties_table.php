<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('properties', function (Blueprint $table) {
            $table->string('size')->change(); // Change from decimal/int to string
        });
    }

    public function down()
    {
        Schema::table('properties', function (Blueprint $table) {
            $table->decimal('size', 8, 2)->change(); // Revert if needed
        });
    }
};
