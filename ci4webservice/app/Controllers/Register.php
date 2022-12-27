<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;

class Register extends ResourceController
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
            'nama' => 'required',
            'username' => 'required|is_unique[users.username]',
            'email' => 'required|valid_email|is_unique[users.email]',
            'password' => 'required|min_length[8]',
            // 'role' => 'permit_empty'
        ];

        if (!$this->validate($rules)) return $this->fail($this->validator->getErrors());
        
        $data = [
            'nama' => $this->request->getVar('nama'),
            'username' => $this->request->getVar('username'),
            'email'     => $this->request->getVar('email'),
            'password'  => password_hash($this->request->getVar('password'), PASSWORD_BCRYPT),
            // 'role'     => $this->request->getVar('role'),
        ];
        
        $model = new UserModel();

        $response = [
            'status' => true,
            'messages' => 'Register Berhasil!'
        ];

        $registered = $model->save($data);
        $this->respondCreated($registered);
        
        return $this->respond($response);
    }
}
