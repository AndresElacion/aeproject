<?php

namespace App\Http\Controllers\BRGY;

use App\Models\BRGY\Permit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PermitController extends Controller
{
    public function index() {
        $permit = Permit::orderBy('created_at', 'desc')->get();

        return response()->json($permit);
    }

    public function show($id) {
        $permit = Permit::findOrFail($id);

        return response()->json($permit);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'business_name' => 'string',
            'business_address' => 'string',
            'type_of_business' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $permit = Permit::create($formFields);

        return response()->json($permit, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'business_name' => 'string',
            'business_address' => 'string',
            'type_of_business' => 'string',
        ]);

        $permit = Permit::find($user_id);

        if (!$permit) {
            return response()->json(['error' => 'No Permit Found'], 404);
        }

        $permit->update($formFields);

        return response()->json($permit, 201);
    }

    public function destroy($user_id) {
        try {
            $permit = Permit::findOrFail($user_id);
            $permit->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Permit not found'], 404);
        }
    }
}
