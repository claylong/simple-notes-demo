<?php

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('login', function () use ($app) {
    return view('login');
});

$app->get('dashboard', function () use ($app) {
    return view('dashboard');
});


$app->get('auth', 'AuthController@verify');
$app->post('auth', 'AuthController@login');
$app->delete('auth', 'AuthController@logout');

$app->get('notes', 'NotesController@getAllNotes');
$app->post('notes', 'NotesController@createNote');
$app->get('notes/{id}', 'NotesController@getNote');
$app->put('notes/{id}', 'NotesController@updateNote');
$app->delete('notes/{id}', 'NotesController@deleteNote');