<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Event extends Migration
{
    public function up()
    {
        $this->forge->addField([
            
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'auto_increment' => true
            ],
            'namaKegiatan' => [
                'type' => 'VARCHAR',
                'constraint' => 255
            ], 
            'penyelenggaraKegiatan' => [
                'type' => 'VARCHAR',
                'constraint' => 255
            ],
            'kategoriKegiatan' => [
                'type' => 'VARCHAR',
                'constraint' => 255
            ],
            'statusKegiatan' => [
                'type' => 'VARCHAR',
                'constraint' => 255
            ], 
            'tanggalKegiatan' => [
                'type' => 'VARCHAR',
                'constraint' => 255
            ], 
            'waktuKegiatan'=> [
                'type' => 'VARCHAR',
                'constraint' => 255
            ], 
            'tempatKegiatan'=> [
                'type' => 'VARCHAR',
                'constraint' => 255
            ], 
            'deskripsiKegiatan'=> [
                'type' => 'VARCHAR',
                'constraint' => 255
            ], 
            // 'imageKegiatan' => [
            //     'type' => 'VARCHAR',
            //     'constraint' => 255
            // ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('events');
    }

    public function down()
    {
        $this->forge->dropTable('events');
    }
}
