<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'nama'    => 'Novan',
                'username' => 'novan',
                'email'    => 'novan@gmail.com',
                'password'  => password_hash(('12345678'), PASSWORD_BCRYPT),
                'role' => 2
            ],
            [
                'nama'    => 'Pradana',
                'username' => 'pradana',
                'email'    => 'pradana@gmail.com',
                'password'  => password_hash(('12345678'), PASSWORD_BCRYPT),
                'role' => 2
            ],
            [
                'nama'    => 'Admin',
                'username' => 'admin',
                'email'    => 'admin@gmail.com',
                'password'  => password_hash(('12345678'), PASSWORD_BCRYPT),
                'role' => 1
            ],
            [
                'nama'    => 'User',
                'username' => 'user',
                'email'    => 'user@gmail.vom',
                'password'  => password_hash(('12345678'), PASSWORD_BCRYPT),
                'role' => 2 
            ],
            [
                'nama'    => 'Test',
                'username' => 'test',
                'email'    => 'Test@gmail.com',
                'password'  => password_hash(('12345678'), PASSWORD_BCRYPT),
                'role' => 2
            ]
        ];

        // Simple Queries
        // $this->db->query('INSERT INTO users (nama, username, email, password, role) VALUES(:nama:, :username:, :email:, :password:, :role:)', $data);

        // Using Query Builder
        $this->db->table('users')->insertBatch($data);
        
    }
}