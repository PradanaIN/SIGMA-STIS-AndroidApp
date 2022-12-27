<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class EventSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'namaKegiatan' => 'Kegiatan 1',
                'penyelenggaraKegiatan' => 'Penyelenggara 1',
                'kategoriKegiatan' => 'Kategori 1',
                'statusKegiatan' => 'Status 1',
                'tanggalKegiatan' => 'Tanggal 1',
                'waktuKegiatan' => 'Waktu 1',
                'tempatKegiatan' => 'Tempat 1',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 1'
            ],
            [
                'namaKegiatan' => 'Kegiatan 2',
                'penyelenggaraKegiatan' => 'Penyelenggara 2',
                'kategoriKegiatan' => 'Kategori 2',
                'statusKegiatan' => 'Status 2',
                'tanggalKegiatan' => 'Tanggal 2',
                'waktuKegiatan' => 'Waktu 2',
                'tempatKegiatan' => 'Tempat 2',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 2'
            ],
            [
                'namaKegiatan' => 'Kegiatan 3',
                'penyelenggaraKegiatan' => 'Penyelenggara 3',
                'kategoriKegiatan' => 'Kategori 3',
                'statusKegiatan' => 'Status 3',
                'tanggalKegiatan' => 'Tanggal 3',
                'waktuKegiatan' => 'Waktu 3',
                'tempatKegiatan' => 'Tempat 3',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 3'
            ],
            [
                'namaKegiatan' => 'Kegiatan 4',
                'penyelenggaraKegiatan' => 'Penyelenggara 4',
                'kategoriKegiatan' => 'Kategori 4',
                'statusKegiatan' => 'Status 4',
                'tanggalKegiatan' => 'Tanggal 4',
                'waktuKegiatan' => 'Waktu 4',
                'tempatKegiatan' => 'Tempat 4',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 4'
            ],
            [
                'namaKegiatan' => 'Kegiatan 5',
                'penyelenggaraKegiatan' => 'Penyelenggara 5',
                'kategoriKegiatan' => 'Kategori 5',
                'statusKegiatan' => 'Status 5',
                'tanggalKegiatan' => 'Tanggal 5',
                'waktuKegiatan' => 'Waktu 5',
                'tempatKegiatan' => 'Tempat 5',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 5'
            ],
            [
                'namaKegiatan' => 'Kegiatan 6',
                'penyelenggaraKegiatan' => 'Penyelenggara 6',
                'kategoriKegiatan' => 'Kategori 6',
                'statusKegiatan' => 'Status 6',
                'tanggalKegiatan' => 'Tanggal 6',
                'waktuKegiatan' => 'Waktu 6',
                'tempatKegiatan' => 'Tempat 6',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 6'
            ],
            [
                'namaKegiatan' => 'Kegiatan 7',
                'penyelenggaraKegiatan' => 'Penyelenggara 7',
                'kategoriKegiatan' => 'Kategori 7',
                'statusKegiatan' => 'Status 7',
                'tanggalKegiatan' => 'Tanggal 7',
                'waktuKegiatan' => 'Waktu 7',
                'tempatKegiatan' => 'Tempat 7',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 7'
            ],
            [
                'namaKegiatan' => 'Kegiatan 8',
                'penyelenggaraKegiatan' => 'Penyelenggara 8',
                'kategoriKegiatan' => 'Kategori 8',
                'statusKegiatan' => 'Status 8',
                'tanggalKegiatan' => 'Tanggal 8',
                'waktuKegiatan' => 'Waktu 8',
                'tempatKegiatan' => 'Tempat 8',
                'deskripsiKegiatan' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!',
                // 'imageKegiatan' => 'Image 8'
            ]
        ];

        // Simple Queries
        // $this->db->query('INSERT INTO users (namaKegiatan, penyelenggaraKegiatan, kategoriKegiatan, statusKegiatan, tanggalKegiatan, 
        //                     waktuKegiatan, tempatKegiatan, deskripsiKegiatan, imageKegiatan) VALUES(:namaKegiatan:, :penyelenggaraKegiatan:, 
        //                     :kategoriKegiatan:, :statusKegiatan:, :tanggalKegiatan:, :waktuKegiatan:, :tempatKegiatan:, :deskripsiKegiatan:, :imageKegiatan:)', $data);

        // Using Query Builder
        $this->db->table('events')->insertBatch($data);
    }
}