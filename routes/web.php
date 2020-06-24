<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
	return view('home');
});

Auth::routes();

// Route::get('/{path?}', [
//     'uses' => 'HomeController@index',
//     'as' => 'home',
//     'where' => ['path' => '.*']
// ]);
Route::get('/admin', 'HomeController@admin');
Route::get('/admin/dashboard', 'HomeController@admin');
Route::get('/admin/logs', 'HomeController@admin');
Route::get('/admin/project', 'HomeController@admin');
Route::get('/admin/project/addProject', 'HomeController@admin');
Route::get('/admin/project/editProject/{id}', 'HomeController@admin');
Route::get('/admin/project/images/{id}', 'HomeController@admin');
Route::get('/admin/project/addImages/{id}', 'HomeController@admin');
Route::get('/admin/blog', 'HomeController@admin');
Route::get('/admin/blog/addBlog', 'HomeController@admin');
Route::get('/admin/blog/editBlog/{id}', 'HomeController@admin');
Route::get('/admin/logout', 'HomeController@admin');


Route::get('/admin/messages', 'HomeController@admin');
Route::get('/authentication/login', 'HomeController@auth');
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/project/detail/{id}', 'HomeController@index');


Route::resource('tasks', 'TaskController');
Route::resource('user', 'UserController');
