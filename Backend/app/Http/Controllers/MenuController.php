<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Menu;
use Illuminate\Support\Str;

class MenuController extends Controller
{
    function index()
    {
        $objects = Menu::where('status', '!=', 0)
        ->orderBy('created_at', 'desc')
        ->select('*')
        ->get();
        $total = Menu::count();
        $result = [
            'status' => true,
            'objects' => $objects,
            'message' => 'Tai lieu thanh cong',
            'total' => $total
        ];
        return response()->json($result, 200);
    }

    function show($id)
    {
        $object = Menu::find($id);
        if ($object == null) {
            $result = [
                'status' => false,
                'object' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $result = [
            'status' => true,
            'object' => $object,
            'message' => 'Tai du lieu thanh cong',
        ];
        return response()->json($result, 200);
    }

    public function store(Request $request)
    {
        $object = new Menu();
        $object->name = $request->name;
        $object->link = $request->link;
        $object->sort_order = $request->sort_order;
        $object->parent_id = $request->parent_id;
        $object->type = $request->type;
        $object->table_id = $request->table_id;
        $object->description = $request->description;
        $object->created_by = $request->created_by;
        $object->created_at = now(); 
        $object->status = $request->status;
    
        if ($object->save()) {
            $result = [
                'status' => true,
                'object' => $object,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
    
        $result = [
            'status' => false,
            'object' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);
    }
    
    function update(Request $request, $id)
    {
        $object = Menu::find($id);
        if ($object == null) {
            $result = [
                'status' => false,
                'object' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $object->name = $request->name;
        $object->link = $request->link;
        $object->sort_order = $request->sort_order;
        $object->parent_id = $request->parent_id;
        $object->type = $request->type;
        $object->table_id = $request->table_id;
        $object->description = $request->description;
        $object->updated_by = $request->updated_by;
        $object->status = $request->status;
        $object->updated_at = date('Y-m-d H:i:s');
        if ($object->save()) {
            $result = [
                'status' => true,
                'object' => $object,
                'message' => 'Cap nha du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'object' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    function status( $id)
    {
        $object = Menu::find($id);
        if ($object == null) {
            $result = [
                'status' => false,
                'object' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }
        $object->status = ($object->status == 1) ? 2 : 1;
        $object->updated_at = date('Y-m-d H:i:s');
        $object->updated_by = 1;
        if ($object->save()) {
            $result = [
                'status' => true,
                'brand' => $object,
                'message' => 'Cap nhat du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'object' => null,
            'message' => 'Khong the cap nhat du lieu',
        ];
        return response()->json($result, 200);
    }

    function destroy($id)
    {
        $object = Menu::find($id);
        if ($object == null) {
            $result = [
                'status' => false,
                'object' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        if ($object->delete()) {
            $result = [
                'status' => true,
                'object' => $object,
                'message' => 'Cap nha du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'object' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }
}