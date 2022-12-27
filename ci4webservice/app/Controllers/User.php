<?php

namespace App\Models;

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;
use CodeIgniter\HTTP\Request;

class User extends ResourceController
{
    use ResponseTrait;

    public function index()
    {
        $model = new UserModel();
        $data = $model->orderBy('id', 'DESC')->findAll();
        return $this->respond($data);
    }

    // single user
    public function show($id = null)
    {
        $model = new UserModel();
        $data = $model->where('id', $id)->first();
        if ($data) {
            return $this->respond($data);
        } else {
            return $this->failNotFound('Data tidak ditemukan!');
        }
    }

    // update
    public function update($id = null)
    {

        $model = new UserModel();

        $json = $this->request->getJSON();
        if($json){
            $data = [
                'nama' => $json->nama,
                'username' => $json->username,
                'email' => $json->email,
                'password' => $json->password,
                'role' => $json->role
            ];
        }else{
            $data = [
                'nama' => $this->request->getRawInput()['nama'],
                'username' => $this->request->getRawInput()['username'],
                'email' => $this->request->getRawInput()['email'],
                'password' => $this->request->getRawInput()['password'],
                'role' => $this->request->getRawInput()['role']
            ];
        }

        $model->update($id, $data);
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Data berhasil diubah!'
            ]
        ];
        return $this->respond($response);
    }
}
