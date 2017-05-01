<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;
use App\User;

class NotesController extends Controller
{
    /**
     * Return all notes (TODO filter by user)
     */
    public function getAllNotes(Request $request)
    {
        $getDeleted = filter_var(
            $request->query('deleted', false),
            FILTER_VALIDATE_BOOLEAN);

        return response(
            Note::where('deleted', $getDeleted)->get(),
            200);
    }

    /**
     * Create a new note based on POST body
     */
    public function createNote(Request $request)
    {
        $this->checkNoteRequest($request);

        $note = new Note;

        $note->title = $request->get('title');
        $note->body = $request->get('body');

        $note->User()->save(User::where('email', 'test@test.com')->first());
        $note->save();

        return response()->json($note, 201);
    }

    /**
     * Return specific note by ID
     */
    public function getNote(int $id)
    {
        return Note::findOrFail($id);
    }

    /**
     * Update the contents of an existing note
     */
    public function updateNote(Request $request, int $id)
    {
        $this->checkNoteRequest($request);
        
        $note = Note::findOrFail($id);

        $note->title = $request->get('title');
        $note->body = $request->get('body');

        $note->save();

        return response()->json($note, 200);
    }

    /**
     * Mark a specific note as deleted
     */
    public function deleteNote(int $id)
    {
        $note = Note::findOrFail($id);

        $note->deleted = true;
        $note->save();

        return response()->json($note, 200);
    }

    private function checkNoteRequest(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'body' => 'required'
        ]);
    }
}
