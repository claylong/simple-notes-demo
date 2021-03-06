<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
    * A list of the exception types that should not be reported.
    *
    * @var array
    */
    protected $dontReport = [
    AuthorizationException::class,
    HttpException::class,
    ModelNotFoundException::class,
    ValidationException::class,
    ];
    
    /**
    * Report or log an exception.
    *
    * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
    *
    * @param  \Exception  $e
    * @return void
    */
    public function report(Exception $e)
    {
        parent::report($e);
    }
    
    /**
    * Render an exception into an HTTP response.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Exception  $e
    * @return \Illuminate\Http\Response
    */
    public function render($request, Exception $e)
    {
        
        if ($e instanceof ModelNotFoundException && $request->wantsJson()) {
            return response()
            ->json(
                ['message' => 'Record not found'],
                404
            );
        }
        
        // For validation failures, a 400 status is preferred for simplicity
        if ($e instanceof ValidationException && $request->wantsJson()) {
            return response()
            ->json(
                ['message' => $e->getMessage()],
                400
            );
        }
        
        return parent::render($request, $e);
    }
}