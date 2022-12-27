package com.uas.ppk.admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

import com.uas.ppk.R;
import com.uas.ppk.activity.ListEventActivity;
import com.uas.ppk.activity.ListUserActivity;
import com.uas.ppk.authentication.LoginActivity;

import java.util.Objects;

public class HomeAdminActivity extends AppCompatActivity {

    CardView addEvent, listEvent, listUser, logout;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_admin);

        Objects.requireNonNull(getSupportActionBar()).hide();

        addEvent = findViewById(R.id.addEvent);
        listEvent = findViewById(R.id.listEvent);
        listUser = findViewById(R.id.listUser);
        logout = findViewById(R.id.logout);

        // addEvent Intent
        addEvent.setOnClickListener(v -> {
            Intent intent = new Intent( HomeAdminActivity.this, AddEventActivity.class);
            startActivity(intent);
            finish();
        });

        // listEvent Intent
        listEvent.setOnClickListener(v -> {
            Intent intent = new Intent( HomeAdminActivity.this, ListEventActivity.class);
            startActivity(intent);
            finish();
        });

        // listUser Intent
        listUser.setOnClickListener(v -> {
            Intent intent = new Intent( HomeAdminActivity.this, ListUserActivity.class);
            startActivity(intent);
            finish();
        });

        // logout Intent
        logout.setOnClickListener(v -> {
            Intent intent = new Intent( HomeAdminActivity.this, LoginActivity.class);
            startActivity(intent);
            finish();
        });

    }
}