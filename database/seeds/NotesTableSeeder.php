<?php

use App\Note;
use App\User;
use Illuminate\Database\Seeder;

class NotesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('Notes')->truncate();

        $testUser = User::where('email', 'test@test.com')->first();

        $note = Note::create([
            'title' => 'Test Note',
            'body' => 'Note contents go here'
        ]);

        $note->User()->save($testUser);
    }
}
