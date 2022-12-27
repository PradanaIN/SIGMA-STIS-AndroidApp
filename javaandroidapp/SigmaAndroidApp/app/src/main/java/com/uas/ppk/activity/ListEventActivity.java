package com.uas.ppk.activity;

import static android.content.ContentValues.TAG;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import java.util.List;
import java.util.Objects;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.uas.ppk.R;
import com.uas.ppk.adapter.EventsAdapter;
import com.uas.ppk.admin.HomeAdminActivity;
import com.uas.ppk.response.EventResponse;
import com.uas.ppk.server.BaseUrl;
import com.uas.ppk.user.HomeUserActivity;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ListEventActivity extends AppCompatActivity implements EventsAdapter.ClickedItem{

    Toolbar toolbar;
    RecyclerView recyclerView;
    SharedPreferences sharedPreferences;
    EventsAdapter eventsAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_event);

        Objects.requireNonNull(getSupportActionBar()).hide();

        toolbar = findViewById(R.id.toolbar);
        recyclerView = findViewById(R.id.recyclerview);

        // toolbar intent
        toolbar.setOnClickListener(v -> {
            if(sharedPreferences.getString("role", "").equals("1")) {
                Intent back = new Intent( ListEventActivity.this, HomeAdminActivity.class);
                startActivity(back);
                finish();
            } else {
                Intent back = new Intent( ListEventActivity.this, HomeUserActivity.class);
                startActivity(back);
                finish();
            }
        });


        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.addItemDecoration(new DividerItemDecoration(this,DividerItemDecoration.VERTICAL));

        eventsAdapter = new EventsAdapter(this::ClickedEvent);

        sharedPreferences = getSharedPreferences("USER_LOGIN",MODE_PRIVATE);

        getAllEvents();


    }

    public void getAllEvents(){

        Call<List<EventResponse>> eventlist = BaseUrl.getUserService()
                .getAllEvents("Bearer " + sharedPreferences.getString("token",""));

        eventlist.enqueue(new Callback<List<EventResponse>>() {
            @Override
            public void onResponse(Call<List<EventResponse>> call, Response<List<EventResponse>> response) {

                if(response.isSuccessful()){
                    List<EventResponse> eventResponses = response.body();
                    eventsAdapter.setData(eventResponses);
                    recyclerView.setAdapter(eventsAdapter);
                }

            }

            @Override
            public void onFailure(Call<List<EventResponse>> call, Throwable t) {
                Log.e("failure",t.getLocalizedMessage());

            }
        });
    }

    @Override
    public void ClickedEvent(EventResponse eventResponse) {

        startActivity(new Intent(this, EventDetailActivity.class).putExtra("data", eventResponse));

    }


}