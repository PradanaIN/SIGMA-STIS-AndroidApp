package com.uas.ppk.user;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.uas.ppk.R;
import com.uas.ppk.activity.EventDetailActivity;
import com.uas.ppk.activity.ListEventActivity;
import com.uas.ppk.admin.HomeAdminActivity;
import com.uas.ppk.authentication.LoginActivity;
import com.uas.ppk.response.UserResponse;
import com.uas.ppk.server.BaseUrl;

import org.json.JSONObject;

import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ProfileActivity extends AppCompatActivity {

    TextView nama,username,email;
    Toolbar toolbar;
    Button buttonEdit, buttonLogout;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        Objects.requireNonNull(getSupportActionBar()).hide();

        toolbar = findViewById(R.id.toolbar);
        // toolbar intent
        toolbar.setOnClickListener(v -> {
            Intent back = new Intent( ProfileActivity.this, HomeUserActivity.class);
            startActivity(back);
            finish();
        });

        sharedPreferences = getSharedPreferences("USER_LOGIN",MODE_PRIVATE);

        nama = findViewById(R.id.nama);
        username  = findViewById(R.id.username);
        email  = findViewById(R.id.email);

        buttonEdit = findViewById(R.id.buttonEdit);
        buttonLogout = findViewById(R.id.buttonLogout);

        // parameter
        nama.setText(sharedPreferences.getString("nama",""));
        username.setText(sharedPreferences.getString("username", ""));
        email.setText(sharedPreferences.getString("email", ""));

        // Intent buttonEdit
        buttonEdit.setOnClickListener(v -> {
            Call<UserResponse> userResponseCall = BaseUrl.getUserService().getMe("Bearer " + sharedPreferences.getString("token",""));
            userResponseCall.enqueue(new Callback<UserResponse>() {
                @Override
                public void onResponse(Call<UserResponse> call, Response<UserResponse> response) {

                    if(response.isSuccessful()){
                        startActivity(new Intent(ProfileActivity.this, EditProfilActivity.class));
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
                public void onFailure(Call<UserResponse> call, Throwable t) {
                    Toast.makeText(ProfileActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();

                }
            });
        });

        // Intent button logout
        buttonLogout.setOnClickListener(v -> {
            Intent intent = new Intent( ProfileActivity.this, LoginActivity.class);
            startActivity(intent);
            finish();
        });
    }
}