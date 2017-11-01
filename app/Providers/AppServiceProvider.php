<?php

namespace App\Providers;

use Dingo\Api\Exception\Handler;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\ServiceProvider;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $handler = app(Handler::class);

        $handler->register(function (AuthenticationException $exception) {
            return response()
                ->json([
                    'error' => 'Não Autenticado'
                ], 401);
        });

        $handler->register(function (JWTException $exception) {
            return response()->json([
                'error' => $exception->getMessage()
            ], 401);
        });
    }
}
