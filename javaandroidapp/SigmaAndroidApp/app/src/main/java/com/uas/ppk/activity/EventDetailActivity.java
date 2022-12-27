package com.uas.ppk.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;


import com.uas.ppk.R;
import com.uas.ppk.admin.EditEventActivity;
import com.uas.ppk.response.EventResponse;
import com.uas.ppk.server.BaseUrl;

import org.json.JSONObject;

import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class EventDetailActivity extends AppCompatActivity {

    TextView namaKegiatan, penyelenggaraKegiatan, kategoriKegiatan, statusKegiatan,
            tanggalKegiatan, waktuKegiatan, tempatKegiatan, deskripsiKegiatan;
    EventResponse eventResponse;
    Toolbar toolbar;
    Button buttonEdit, buttonDelete;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_event_detail);

        Objects.requireNonNull(getSupportActionBar()).hide();

        sharedPreferences = getSharedPreferences("USER_LOGIN",MODE_PRIVATE);

        // toolbar back
        toolbar = findViewById(R.id.toolbar);

        // parameter
        namaKegiatan = findViewById(R.id.NamaKegiatan);
        penyelenggaraKegiatan = findViewById(R.id.penyelenggaraKegiatan);
        kategoriKegiatan = findViewById(R.id.kategoriKegiatan);
        statusKegiatan = findViewById(R.id.statusKegiatan);
        tanggalKegiatan = findViewById(R.id.tanggalKegiatan);
        waktuKegiatan = findViewById(R.id.waktuKegiatan);
        tempatKegiatan = findViewById(R.id.tempatKegiatan);
        deskripsiKegiatan = findViewById(R.id.deskripsiKegiatan);
        //imageKegiatan = findViewById(R.id.imageKegiatan);

        buttonEdit = findViewById(R.id.buttonEdit);
        buttonDelete = findViewById(R.id.buttonDelete);

        // Intent
        Intent intent = getIntent();
        Bundle extras = intent.getExtras();

        if(extras !=null){
            eventResponse = (EventResponse) intent.getSerializableExtra("data");

            namaKegiatan.setText(eventResponse.getNamaKegiatan());
            penyelenggaraKegiatan.setText(eventResponse.getPenyelenggaraKegiatan());
            kategoriKegiatan.setText(eventResponse.getKategoriKegiatan());
            statusKegiatan.setText(eventResponse.getStatusKegiatan());
            tanggalKegiatan.setText("Tanggal   : " + eventResponse.getTanggalKegiatan());
            waktuKegiatan.setText("Waktu      : " + eventResponse.getWaktuKegiatan());
            tempatKegiatan.setText("Tempat    : " + eventResponse.getTempatKegiatan());
            deskripsiKegiatan.setText("Deskripsi : " + eventResponse.getDeskripsiKegiatan());
            //imageKegiatan.setText(eventResponse.getImageKegiatan());
        }


        // set visibility for role
        if(sharedPreferences.getString("email", "").equals("admin@gmail.com")) {
            buttonDelete.setVisibility(View.VISIBLE);
            buttonEdit.setVisibility(View.VISIBLE);
        } else {
            buttonDelete.setVisibility(View.GONE);
            buttonEdit.setVisibility(View.GONE);
        }


        // Intent buttonEdit
        buttonEdit.setOnClickListener(v -> {
            Call<EventResponse> eventResponseCall = BaseUrl.getUserService().getEvent("Bearer " + sharedPreferences.getString("token",""), eventResponse.getId());
            eventResponseCall.enqueue(new Callback<EventResponse>() {
                @Override
                public void onResponse(Call<EventResponse> call, Response<EventResponse> response) {

                    if(response.isSuccessful()){
                        startActivity(new Intent(EventDetailActivity.this, EditEventActivity.class)
                                .putExtras(extras));
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
                    Toast.makeText(EventDetailActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();
                }
            });
        });

        // Intent buttonDelete
        buttonDelete.setOnClickListener(v -> {

            Call<EventResponse> eventResponseCall = BaseUrl.getUserService().deleteEvent("Bearer " + sharedPreferences.getString("token",""), eventResponse.getId());
            eventResponseCall.enqueue(new Callback<EventResponse>() {
                @Override
                public void onResponse(Call<EventResponse> call, Response<EventResponse> response) {

                    if(response.isSuccessful()){
                        Toast.makeText(EventDetailActivity.this,"Hapus Kegiatan Success!", Toast.LENGTH_LONG).show();
                        startActivity(new Intent(EventDetailActivity.this, ListEventActivity.class));
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
                    Toast.makeText(EventDetailActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();
                }
            });
        });

        // toolbar intent
        toolbar.setOnClickListener(v -> {
            Intent back = new Intent( EventDetailActivity.this, ListEventActivity.class);
            startActivity(back);
            finish();
        });
    }
}