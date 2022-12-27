<?php

namespace App\Models;

use CodeIgniter\Model;

class EventModel extends Model
{
    protected $table = 'events';
    protected $primaryKey = 'id';
    protected $allowedFields = ['namaKegiatan', 'penyelenggaraKegiatan', 'kategoriKegiatan', 'statusKegiatan', 
                                    'tanggalKegiatan', 'waktuKegiatan', 'tempatKegiatan', 'deskripsiKegiatan', 'imageKegiatan'];
}
