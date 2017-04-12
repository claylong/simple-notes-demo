<?php

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('/login', function () use ($app) {
    return view('login');
});

$app->get('/dashboard', function () use ($app) {
    return view('dashboard');
});

$app->get('/logout', function () use ($app) {
    return "Logged out!";
});
