package com.uas.ppk.activity;

import static android.content.ContentValues.TAG;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;

import java.util.List;
import java.util.Objects;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.uas.ppk.R;
import com.uas.ppk.adapter.UsersAdapter;
import com.uas.ppk.admin.HomeAdminActivity;
import com.uas.ppk.response.UserResponse;
import com.uas.ppk.server.BaseUrl;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ListUserActivity extends AppCompatActivity implements UsersAdapter.ClickedItem{

    Toolbar toolbar;
    RecyclerView recyclerView;
    SharedPreferences sharedPreferences;
    UsersAdapter usersAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_user);

        Objects.requireNonNull(getSupportActionBar()).hide();

        toolbar = findViewById(R.id.toolbar);
        // toolbar intent
        toolbar.setOnClickListener(v -> {
            Intent back = new Intent( ListUserActivity.this, HomeAdminActivity.class);
            startActivity(back);
            finish();
        });

        recyclerView = findViewById(R.id.recyclerview);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.addItemDecoration(new DividerItemDecoration(this,DividerItemDecoration.VERTICAL));

        usersAdapter = new UsersAdapter(this::ClickedUser);

        sharedPreferences = getSharedPreferences("USER_LOGIN",MODE_PRIVATE);

        // get all users
        getAllUsers();
    }

    public void getAllUsers(){

        Call<List<UserResponse>> userlist = BaseUrl.getUserService()
                .getAllUsers("Bearer " + sharedPreferences.getString("token",""));

        userlist.enqueue(new Callback<List<UserResponse>>() {
            @Override
            public void onResponse(Call<List<UserResponse>> call, Response<List<UserResponse>> response) {

                if(response.isSuccessful()){
                    List<UserResponse> userResponses = response.body();
                    usersAdapter.setData(userResponses);
                    recyclerView.setAdapter(usersAdapter);

                }

            }

            @Override
            public void onFailure(Call<List<UserResponse>> call, Throwable t) {
                Log.e("failure",t.getLocalizedMessage());

            }
        });
    }

    @Override
    public void ClickedUser(UserResponse userResponse) {

        startActivity(new Intent(this, UserDetailActivity.class).putExtra("data",userResponse));

    }
}