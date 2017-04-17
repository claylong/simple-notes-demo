<?php

namespace App\Http\Controllers;

class NotesController extends Controller
{
    public function getAllNotes()
    {
        return response(
            [ 'notes' => ['note1', 'note2', 'note3'] ],
            200);
    }

    public function createNote()
    {
        return response(null, 201);
    }

    public function getNote(int $id)
    {
        return response(
            [ 'id' => $id ],
            200);
    }

    public function updateNote(int $id)
    {
        return response(
            [ 'id' => $id ],
            200);
    }

    public function deleteNote(int $id)
    {
        return response(
            [ 'id' => $id ],
            200);
    }
}
