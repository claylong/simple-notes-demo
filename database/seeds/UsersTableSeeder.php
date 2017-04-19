<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('Users')->truncate();

        User::create([
            'name' => 'text',
            'email' => 'test@test.com',
            'password' => '$sh4rpspr1nG$'
        ]);
    }
}
