package com.uas.ppk.response;

import java.io.Serializable;

public class EventResponse implements Serializable {
    private Integer id;
    private String namaKegiatan, penyelenggaraKegiatan, kategoriKegiatan, statusKegiatan,
            tanggalKegiatan, waktuKegiatan, tempatKegiatan, deskripsiKegiatan;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNamaKegiatan() {
        return namaKegiatan;
    }

    public void setNamaKegiatan(String namaKegiatan) {
        this.namaKegiatan = namaKegiatan;
    }

    public String getPenyelenggaraKegiatan() {
        return penyelenggaraKegiatan;
    }

    public void setPenyelenggaraKegiatan(String penyelenggaraKegiatan) {
        this.penyelenggaraKegiatan = penyelenggaraKegiatan;
    }

    public String getKategoriKegiatan() {
        return kategoriKegiatan;
    }

    public void setKategoriKegiatan(String kategoriKegiatan) {
        this.kategoriKegiatan = kategoriKegiatan;
    }

    public String getStatusKegiatan() {
        return statusKegiatan;
    }

    public void setStatusKegiatan(String statusKegiatan) {
        this.statusKegiatan = statusKegiatan;
    }

    public String getTanggalKegiatan() {
        return tanggalKegiatan;
    }

    public void setTanggalKegiatan(String tanggalKegiatan) {
        this.tanggalKegiatan = tanggalKegiatan;
    }

    public String getWaktuKegiatan() {
        return waktuKegiatan;
    }

    public void setWaktulKegiatan(String waktuKegiatan) {
        this.waktuKegiatan = waktuKegiatan;
    }

    public String getTempatKegiatan() {
        return tempatKegiatan;
    }

    public void setTempatKegiatan(String tempatKegiatan) {
        this.tempatKegiatan = tempatKegiatan;
    }

    public String getDeskripsiKegiatan() {
        return deskripsiKegiatan;
    }

    public void setDeskripsiKegiatan(String deskripsiKegiatan) {
        this.deskripsiKegiatan = deskripsiKegiatan;
    }

//    public String getImageKegiatan() {
//        return imageKegiatan;
//    }
//
//    public void setImageKegiatan(String imageKegiatan) {
//        this.imageKegiatan = imageKegiatan;
//    }


    @Override
    public String toString() {
        return "EventResponse{" +
                "id=" + id +
                ", namaKegiatan='" + namaKegiatan +'\'' +
                ", penyelenggaraKegiatan='" + penyelenggaraKegiatan +'\'' +
                ", kategoriKegiatan='" + kategoriKegiatan +'\'' +
                ", statusKegiatan='" + statusKegiatan +'\'' +
                ", tanggalKegiatan='" + tanggalKegiatan +'\'' +
                ", waktuKegiatan='" + waktuKegiatan +'\'' +
                ", tempatKegiatan='" + tempatKegiatan +'\'' +
                ", deskripsiKegiatan='" + deskripsiKegiatan +'\'' +
//                ", imageKegiatan='" + imageKegiatan +'\'' +
                '}';
    }
}

