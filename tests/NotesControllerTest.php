<?php

class NotesControllerTest extends TestCase
{
    public function testGetNotes_AllNotesJsonReturned()
    {
        $this->get('/notes')
            ->seeStatusCode(200)
            ->seeJsonStructure([['id']]);
    }
    
    public function testGetNoteById_ValidID_NoteJsonReturned()
    {
        $this->get('/notes/1')
            ->seeStatusCode(200)
            ->seeJsonStructure(['id']);
    }

    public function testGetNoteById_InvalidID_NotFound()
    {
        $this->get('/notes/-1')
            ->seeStatusCode(404);
    }

    public function testPostNote_ValidBody_NoteJsonReturned()
    {
        $this->json('POST', '/notes', [ 'title'=>'functional test', 'body'=>'functional body' ])
            ->seeStatusCode(201)
            ->seeJsonStructure(['id'])
            ->seeJsonStructure(['created_at'])
            ->seeJson([
                'title' => 'functional test',
                'body' => 'functional body'
            ]);
    }

    public function testPostNote_InvalidBody_BadRequest()
    {
        $this->json('POST', '/notes', [ 'foo' => 'bar' ])
            ->seeStatusCode(400);
    }
}