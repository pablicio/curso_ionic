<?php

namespace App\Providers;

use Dingo\Api\Exception\Handler;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\ServiceProvider;

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

        $handler->register(function (AuthenticationException $exception){

            return response()->json(['error' => 'Não Autenticado'], 401);
        });
    }
}
