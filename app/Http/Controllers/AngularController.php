<?php

namespace App\Http\Controllers;

class AngularController extends Controller
{
    /**
     * Serve the angular application.
     */
    public function serve()
    {
        return file_get_contents(base_path('public/assets/index.html'));
    }
}