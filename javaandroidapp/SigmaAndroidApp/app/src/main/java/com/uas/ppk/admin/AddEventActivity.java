package com.uas.ppk.admin;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.uas.ppk.R;
import com.uas.ppk.activity.ListEventActivity;
import com.uas.ppk.model.EventModel;
import com.uas.ppk.response.EventResponse;
import com.uas.ppk.server.BaseUrl;

import org.json.JSONObject;

import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AddEventActivity extends AppCompatActivity {

    Button buttonAdd;
    EditText namaKegiatan, penyelenggaraKegiatan, kategoriKegiatan, statusKegiatan,
    tanggalKegiatan, waktuKegiatan, tempatKegiatan, deskripsiKegiatan;
    ProgressDialog progressDialog;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_event);

        Objects.requireNonNull(getSupportActionBar()).hide();

        sharedPreferences = getSharedPreferences("USER_LOGIN",MODE_PRIVATE);

        // progress dialog
        progressDialog = new ProgressDialog(this);
        progressDialog.setCancelable(false);

        // parameter
        namaKegiatan = findViewById(R.id.namaKegiatan);
        penyelenggaraKegiatan = findViewById(R.id.penyelenggaraKegiatan);
        kategoriKegiatan = findViewById(R.id.kategoriKegiatan);
        statusKegiatan = findViewById(R.id.statusKegiatan);
        tanggalKegiatan = findViewById(R.id.tanggalKegiatan);
        waktuKegiatan = findViewById(R.id.waktuKegiatan);
        tempatKegiatan = findViewById(R.id.tempatKegiatan);
        deskripsiKegiatan = findViewById(R.id.deskripsiKegiatan);
//        imageKegiatan = findViewById(R.id.imageKegiatan);

        // button add
        buttonAdd = findViewById(R.id.buttonAdd);

        // intent add
        buttonAdd.setOnClickListener(v -> {
            // convert to string
            String stringNamaKegiatan = namaKegiatan.getText().toString();
            String stringDeskripsiKegiatan = deskripsiKegiatan.getText().toString();
            String stringPenyelenggaraKegiatan = penyelenggaraKegiatan.getText().toString();
            String stringKategoriKegiatan = kategoriKegiatan.getText().toString();
            String stringStatusKegiatan = statusKegiatan.getText().toString();
            String stringTanggalKegiatan = tanggalKegiatan.getText().toString();
            String stringWaktuKegiatan = waktuKegiatan.getText().toString();
            String stringTempatKegiatan = tempatKegiatan.getText().toString();
//            String stringImageKegiatan = imageKegiatan.getText().toString();

            // rule validation
            if(stringNamaKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Nama tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringDeskripsiKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Deskripsi tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringPenyelenggaraKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Penyelenggara tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringKategoriKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Kategori tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringStatusKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Status tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringTanggalKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Tanggal tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringWaktuKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Waktu tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringTempatKegiatan.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Tempat tidak boleh kosong!", Toast.LENGTH_LONG).show();
//            } else if(stringImageKegiatan.isEmpty()) {
//                Toast.makeText(getApplicationContext(), "Image tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else {
                // validation success
                addEvent();
            }
        });

    }

    // login process
    public void addEvent(){

        EventModel eventModel = new EventModel();
        eventModel.setNamaKegiatan(namaKegiatan.getText().toString());
        eventModel.setDeskripsiKegiatan(deskripsiKegiatan.getText().toString());
        eventModel.setPenyelenggaraKegiatan(penyelenggaraKegiatan.getText().toString());
        eventModel.setKategoriKegiatan(kategoriKegiatan.getText().toString());
        eventModel.setStatusKegiatan(statusKegiatan.getText().toString());
        eventModel.setTanggalKegiatan(tanggalKegiatan.getText().toString());
        eventModel.setWaktulKegiatan(waktuKegiatan.getText().toString());
        eventModel.setTempatKegiatan(tempatKegiatan.getText().toString());
        //eventModel.setImageKegiatan(imageKegiatan.getText().toString());

        Call<EventResponse> eventResponseCall = BaseUrl.getUserService()
                .addEvent("Bearer " + sharedPreferences.getString("token",""), eventModel);
        eventResponseCall.enqueue(new Callback<EventResponse>() {
            @Override
            public void onResponse(Call<EventResponse> call, Response<EventResponse> response) {

                if(response.isSuccessful()){
                    Toast.makeText(AddEventActivity.this,"Tambah Kegiatan Success!", Toast.LENGTH_LONG).show();
                    startActivity(new Intent(AddEventActivity.this, ListEventActivity.class));
                    finish();
                }else{
                    try {
                        JSONObject jObjError = new JSONObject(response.errorBody().string());
                        Toast.makeText(getApplicationContext(), jObjError.getString("messages"), Toast.LENGTH_LONG).show();
                    } catch (Exception e) {
                        Toast.makeText(getApplicationContext(), e.getMessage(), Toast.LENGTH_LONG).show();
                    }
                }

            }

            @Override
            public void onFailure(Call<EventResponse> call, Throwable t) {
                Toast.makeText(AddEventActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();
            }
        });


    }


    // show progress dialog
    private void showDialog() {
        if(!progressDialog.isShowing()) {
            progressDialog.show();
        }
    }

    // hide progress dialog
    private void hideDialog() {
        if(progressDialog.isShowing()) {
            progressDialog.dismiss();
        }
    }


}