package com.uas.ppk.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import com.uas.ppk.R;
import com.uas.ppk.admin.HomeAdminActivity;
import com.uas.ppk.response.UserResponse;

import java.util.Objects;

public class UserDetailActivity extends AppCompatActivity {

    TextView nama,username,email;
    UserResponse userResponse;
    Toolbar toolbar;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_detail);

        Objects.requireNonNull(getSupportActionBar()).hide();

        toolbar = findViewById(R.id.toolbar);
        // toolbar intent
        toolbar.setOnClickListener(v -> {
            Intent back = new Intent( UserDetailActivity.this, ListUserActivity.class);
            startActivity(back);
            finish();
        });

        nama = findViewById(R.id.nama);
        username  = findViewById(R.id.username);
        email  = findViewById(R.id.email);

        Intent intent = getIntent();
        if(intent.getExtras() !=null){
            userResponse = (UserResponse) intent.getSerializableExtra("data");

            nama.setText(userResponse.getNama());
            username.setText(userResponse.getUsername());
            email.setText(userResponse.getEmail());

        }
    }
}