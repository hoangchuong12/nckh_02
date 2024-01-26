<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    function index()
    {
        $user = User::where('status', '!=', 0)
        ->orderBy('created_at', 'desc')
        ->select('*')
        ->get();
        $total = User::count();
        $result = [
            'status' => true,
            'user' => $user,
            'message' => 'Tai lieu thanh cong',
            'total' => $total
        ];
        return response()->json($result, 200);
    }

    function show($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $result = [
            'status' => true,
            'user' => $user,
            'message' => 'Tai du lieu thanh cong',
        ];
        return response()->json($result, 200);
    }

    function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;// react
        $user->username = $request->username;// react
        $user->password = Hash::make($request->password);
        $user->gender = $request->gender; // react
        $user->phone = $request->phone; // react
        $user->email = $request->email; // react
        $user->roles = 2; // react
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = 1;
        if ($user->save()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Them du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'user' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    function update(Request $request, $id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $user->name = $request->name; // reactjs
        $user->username = $request->username; // reactjs
        $user->password = $request->password; // reactjs
        $user->gender = $request->gender; // reactjs
        $user->phone = $request->phone; // reactjs
        $user->email = $request->email; // reactjs
        $user->roles = $request->roles; // reactjs
        $user->updated_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //reactjs
        if ($user->save()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Cap nha du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'user' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    function destroy($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        if ($user->delete()) {
            $result = [
                'status' => true,
                'user' => $user,
                'message' => 'Cap nha du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'user' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->password;

        $user = User::where('username', $username)->first();

        // Kiểm tra xem người dùng có tồn tại và mật khẩu có đúng không
        if (!$user || !Hash::check($password, $user->password)) {
            $result = [
                'status' => false,
                'user' => null,
                'message' => 'Sai tên đăng nhập hoặc mật khẩu',
            ];
            return response()->json($result, 401);
        }

        $result = [
            'status' => true,
            'user' => $user,
            'message' => 'Đăng nhập thành công',
        ];
        return response()->json($result, 200);
    }
    
}