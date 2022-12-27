<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;
use Firebase\JWT\JWT;

class Login extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    use ResponseTrait;
    public function index()
    {
        helper(['form']);
        $rules = [
            'email' => 'required|valid_email',
            'password' => 'required|min_length[8]'
        ];
        
        if (!$this->validate($rules)) return $this->fail($this->validator->getErrors());
        $model = new UserModel();
        $user = $model->where("email", $this->request->getVar('email'))->first();
        if (!$user) return $this->failNotFound('Email atau Password Salah!'); 


        $verify = password_verify($this->request->getVar('password'), $user['password']);
        if (!$verify) return $this->fail('Email atau Password Salah!');

        $key = getenv('TOKEN_SECRET');
        $payload = array(
            "iat" => 1356999524,
            "nbf" => 1357000000,
            "id" => $user['id'],
            "email" => $user['email'],
            "nama" => $user['nama'],
            "username" => $user['username'],
            "role" => $user['role']
        );

        $token = JWT::encode($payload, $key, 'HS256');

        $response = [
            'status' => true,
            'messages' => 'Login Berhasil!',
            'data' => $user,
            'id' => $user['id'],
            'email' => $user['email'],
            'nama' => $user['nama'],
            'username' => $user['username'],
            'role' => $user['role'],
            'password' => $user['password'],
            'token' => $token
        ];

        return $this->respond($response);
    }
}
