<?php

use Illuminate\Http\Request;

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

RouteDingo::version('v1', function() {
    RouteDingo::group(['namespace' => 'App\Http\Controllers\Api', 'as' => 'api'], function(){

//        RouteDingo::post('/login', 'AuthController@authenticate');

        RouteDingo::post('/acess_token', 'AuthController@acessToken')
        ->name('.acess_token');
    });
});


