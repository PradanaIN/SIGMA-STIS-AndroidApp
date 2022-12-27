package com.uas.ppk.user;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;

import com.uas.ppk.R;
import com.uas.ppk.activity.ListEventActivity;
import com.uas.ppk.admin.HomeAdminActivity;
import com.uas.ppk.authentication.LoginActivity;
import com.uas.ppk.model.LoginModel;
import com.uas.ppk.model.UserModel;
import com.uas.ppk.response.LoginResponse;
import com.uas.ppk.response.UserResponse;
import com.uas.ppk.server.BaseUrl;

import org.json.JSONObject;

import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class HomeUserActivity extends AppCompatActivity {

    CardView profile, listEvent, logout;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_user);

        Objects.requireNonNull(getSupportActionBar()).hide();

        sharedPreferences = getSharedPreferences("USER_LOGIN",MODE_PRIVATE);

        profile = findViewById(R.id.profile);
        listEvent = findViewById(R.id.listEvent);

        // addEvent Intent
        profile.setOnClickListener(v -> {
            me();
        });

        // listEvent Intent
        listEvent.setOnClickListener(v -> {
            Intent intent = new Intent( HomeUserActivity.this, ListEventActivity.class);
            startActivity(intent);
            finish();
        });

    }

    public void me(){

        Call<UserResponse> userResponseCall = BaseUrl.getUserService().getMe("Bearer " + sharedPreferences.getString("token",""));
        userResponseCall.enqueue(new Callback<UserResponse>() {
            @Override
            public void onResponse(Call<UserResponse> call, Response<UserResponse> response) {

                if(response.isSuccessful()){
                    startActivity(new Intent(HomeUserActivity.this, ProfileActivity.class));
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
                Toast.makeText(HomeUserActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();

            }
        });


    }
}