<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Orderdetail;
use Illuminate\Support\Str;

class OrderdetailController extends Controller
{
    function index()
    {
        $object = Orderdetail::where('qty', '!=', 0)
        ->orderBy('amount', 'desc')
        ->select('id', 'order_id', 'product_id', 'price', 'qty', 'discount', 'amount')
        ->get();
        $total = Orderdetail::count();
        $result = [
            'status' => true,
            'orderdetail' => $object,
            'message' => 'Tai lieu thanh cong',
            'total' => $total
        ];
        return response()->json($result, 200);
    }

    function show($id)
    {
        $object = Orderdetail::find($id);
        if ($object == null) {
            $result = [
                'status' => false,
                'orderdetail' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $result = [
            'status' => true,
            'orderdetail' => $object,
            'message' => 'Tai du lieu thanh cong',
        ];
        return response()->json($result, 200);
    }

    function store(Request $request)
    {
        $object = new Orderdetail();
        $object->order_id = 1; // tam
        $object->product_id = 1; // tam
        $object->price = $request->price; // reactjs
        $object->qty = $request->qty; // reactjs
        $object->discount = $request->discount; // reactjs
        $object->amount = $request->amount; // reactjs
        if ($object->save()) {
            $result = [
                'status' => true,
                'orderdetail' => $object,
                'message' => 'Them du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'orderdetail' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    function update(Request $request, $id)
    {
        $object = Orderdetail::find($id);
        if ($object == null) {
            $result = [
                'status' => false,
                'object' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }
        $object->order_id = 1; // tam
        $object->product_id = 1; // tam
        $object->price = $request->price; // reactjs
        $object->qty = $request->qty; // reactjs
        $object->discount = $request->discount; // reactjs
        $object->amount = $request->amount; // reactjs
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
            'message' => 'Khong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    function destroy($id)
    {
        $object = Orderdetail::find($id);
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
            'message' => 'Khong the them du lieu',
        ];
        return response()->json($result, 200);
    }
    public function indexByUser($user_id)
{
    // Assuming there's a relationship set up in the Order model to Orderdetail
    // and a relationship or method to access the User from an Order
    $orderDetails = Orderdetail::query()
        ->whereHas('order', function ($query) use ($user_id) {
            $query->where('user_id', $user_id);
        })
        ->with('order') // Load the related order
        ->orderBy('amount', 'desc')
        ->select('id', 'order_id', 'product_id', 'price', 'qty', 'discount', 'amount')
        ->get();

    $total = $orderDetails->count();

    return response()->json([
        'status' => true,
        'orderdetails' => $orderDetails,
        'message' => 'Tai lieu thanh cong',
        'total' => $total
    ], 200);
}

}