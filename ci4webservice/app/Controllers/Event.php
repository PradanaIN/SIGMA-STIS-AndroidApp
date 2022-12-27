<?php

namespace App\Models;

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\EventModel;

class Event extends ResourceController
{
    use ResponseTrait;

    // all users
    public function index()
    {
        $model = new EventModel();
        $data = $model->orderBy('id', 'DESC')->findAll();
        return $this->respond($data);
    }

    // create
    public function create()
    {
        $model = new EventModel();
        $data = [
            'namaKegiatan' => $this->request->getVar('namaKegiatan'),
            'penyelenggaraKegiatan' => $this->request->getVar('penyelenggaraKegiatan'),
            'kategoriKegiatan' => $this->request->getVar('kategoriKegiatan'),
            'statusKegiatan' => $this->request->getVar('statusKegiatan'),
            'tanggalKegiatan' => $this->request->getVar('tanggalKegiatan'),
            'waktuKegiatan' => $this->request->getVar('waktuKegiatan'),
            'tempatKegiatan' => $this->request->getVar('tempatKegiatan'),
            'deskripsiKegiatan' => $this->request->getVar('deskripsiKegiatan')
        ];

        $model->insert($data);

        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'Kegiatan berhasil ditambahkan!'
            ]
        ];
        return $this->respondCreated($response);
    }

    // single user
    public function show($id = null)
    {
        $model = new EventModel();
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
        $model = new EventModel();
        
        $json = $this->request->getJSON();
        if($json){
            $data = [
                'namaKegiatan' => $json->namaKegiatan,
                'penyelenggaraKegiatan' => $json->penyelenggaraKegiatan,
                'kategoriKegiatan' => $json->kategoriKegiatan,
                'statusKegiatan' => $json->statusKegiatan,
                'tanggalKegiatan' => $json->tanggalKegiatan,
                'waktuKegiatan' => $json->waktuKegiatan,
                'tempatKegiatan' => $json->tempatKegiatan,
                'deskripsiKegiatan' => $json->deskripsiKegiatan
            ];
        }else{
            $data = [
                'namaKegiatan' => $this->request->getRawInput['namaKegiatan'],
                'penyelenggaraKegiatan' => $this->request->getRawInput['penyelenggaraKegiatan'],
                'kategoriKegiatan' => $this->request->getRawInput['kategoriKegiatan'],
                'statusKegiatan' => $this->request->getRawInput['statusKegiatan'],
                'tanggalKegiatan' => $this->request->getRawInput['tanggalKegiatan'],
                'waktuKegiatan' => $this->request->getRawInput['waktuKegiatan'],
                'tempatKegiatan' => $this->request->getRawInput['tempatKegiatan'],
                'deskripsiKegiatan' => $this->request->getRawInput['deskripsiKegiatan']
            ];
        }

        $model->update($id, $data);

        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Kegiatan berhasil diubah!'
            ]
        ];
        return $this->respond($response);
    }


    // delete
    public function delete($id = null)
    {
        $model = new EventModel();
        $data = $model->where('id', $id)->delete($id);
        if ($data) {
            $model->delete($id);
            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'Kegiatan berhasil dihapus!'
                ]
            ];
            return $this->respondDeleted($response);
        } else {
            return $this->failNotFound('Data tidak ditemukan!');
        }
    }
}
