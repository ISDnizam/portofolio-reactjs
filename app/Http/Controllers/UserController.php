<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller {
	public function __construct() {
		$this->middleware('auth');
	}

	public function index(Request $request, User $user) {
		$users = User::all();
		// return json response
		return response()->json([
			'user' => $users,
		]);
	}

	public function create() {
		//
	}

	public function store(Request $request) {
		// validatino
		// create a new task based on user tasks relationship
		$task = User::create([
			'name' => $request->name,
			'email' => $request->email,
			'password' => $request->password,
		]);
		// return task with user object
		return response()->json(User::find(1));
	}

	public function show($id) {
		//
	}

	public function edit($id) {
		$task = Task::findOrFail($id);
		return response()->json([
			'task' => $task,
		]);
	}

	public function update(Request $request, $id) {
		$input = $request->all();
		$task = Task::findOrFail($id);
		$task->update($input);
		return response()->json($task->with('user')->find($task->id));
	}

	public function destroy($id) {
		Task::findOrFail($id)->delete();
	}
}
