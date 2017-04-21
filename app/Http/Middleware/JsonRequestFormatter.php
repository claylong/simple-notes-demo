<?php

// https://medium.com/@paulredmond/how-to-submit-json-post-requests-to-lumen-666257fe8280

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class JsonRequestFormatter
{
    public function handle(Request $request, Closure $next)
    {
        if (in_array($request->method(), ['POST', 'PUT', 'PATCH'])
                && $request->isJson())
        {
            $data = $request->json()->all();
            $request->request->replace(is_array($data) ? $data : []);
        }

        return $next($request);
    }
}
