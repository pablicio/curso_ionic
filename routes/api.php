<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

RouteDingo::version('v1', function () {
    RouteDingo::group(['namespace' => 'App\Http\Controllers\Api', 'as' => 'api'], function () {

        //POSSO ENVIAR ATÉ 10 REQUISIÇÕES POR MINUTO PARA ESTE MIDDLEWARE
        RouteDingo::post('/access_token', [
            'uses' => 'AuthController@acessToken',
            'middleware' => 'api.throttle',
            'limit' => 10,
            'expires' => 1
        ])->name('.access_token');

        //POSSO DAR REFRESH NO MEU TOKEN
        RouteDingo::post('/refresh_token', [
            'uses' => 'AuthController@refreshToken',
            'middleware' => 'api.throttle',
            'limit' => 10,
            'expires' => 1
        ])->name('.refresh_tokenrefresh_token');

        RouteDingo::group([
            'middleware' => ['api.throttle', 'api.auth'],
            'limit' => 100,
            'expires' => 3
        ],
            function () {

            RouteDingo::post('/logout','AuthController@logout');

                RouteDingo::get('/teste', function(){
                    return 'oi estou logado';
                });
            });


    });
});


