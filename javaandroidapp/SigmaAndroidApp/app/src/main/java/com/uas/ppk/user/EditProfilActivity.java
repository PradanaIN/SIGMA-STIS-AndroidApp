package com.uas.ppk.user;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.uas.ppk.R;
import com.uas.ppk.activity.ListEventActivity;
import com.uas.ppk.admin.EditEventActivity;
import com.uas.ppk.model.EventModel;
import com.uas.ppk.model.UserModel;
import com.uas.ppk.response.EventResponse;
import com.uas.ppk.response.UserResponse;
import com.uas.ppk.server.BaseUrl;

import org.json.JSONObject;

import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class EditProfilActivity extends AppCompatActivity {

    TextView nama,username,email,password;
    ProgressDialog progressDialog;
    UserResponse userResponse;
    Button buttonEdit;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_profil);

        Objects.requireNonNull(getSupportActionBar()).hide();

        sharedPreferences = getSharedPreferences("USER_LOGIN",MODE_PRIVATE);

        // parameter
        nama = findViewById(R.id.nama);
        username  = findViewById(R.id.username);
        email  = findViewById(R.id.email);
        password = findViewById(R.id.password);

        nama.setText(sharedPreferences.getString("nama",""));
        username.setText(sharedPreferences.getString("username", ""));
        email.setText(sharedPreferences.getString("email", ""));

        // button edit
        buttonEdit = findViewById(R.id.buttonEdit);

        // intent edit
        buttonEdit.setOnClickListener(v -> {
            // convert to string
            String stringNama = nama.getText().toString();
            String stringUsername = username.getText().toString();
            String stringEmail = email.getText().toString();
            String stringPassword = password.getText().toString();

            // rule validation
            if(stringNama.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Nama tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringUsername.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Username tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringEmail.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Email tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringPassword.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Password tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else {
                // validation success
                editProfil();
            }
        });

    }

    // login process
    public void editProfil(){

        UserModel userModel = new UserModel();
        userModel .setNama(nama.getText().toString());
        userModel .setUsername(username.getText().toString());
        userModel .setEmail(email.getText().toString());
        userModel .setPassword(password.getText().toString());

        Call<UserResponse> userResponseCall = BaseUrl.getUserService().editMe("Bearer " + sharedPreferences.getString("token",""), sharedPreferences.getString("id", ""), userModel );
        userResponseCall.enqueue(new Callback<UserResponse>() {
            @Override
            public void onResponse(Call<UserResponse> call, Response<UserResponse> response) {

                if(response.isSuccessful()){
                    Toast.makeText(EditProfilActivity.this,"Edit Profil Success!", Toast.LENGTH_LONG).show();
                    startActivity(new Intent(EditProfilActivity.this, ProfileActivity.class));
                    finish();
                }else{
                    try {
                        JSONObject jObjError = new JSONObject(response.errorBody().string());
                        Toast.makeText(getApplicationContext(), jObjError.getString("message"), Toast.LENGTH_LONG).show();
                        Log.e("message",  jObjError.getString("message"));
                    } catch (Exception e) {
                        Toast.makeText(getApplicationContext(), e.getMessage(), Toast.LENGTH_LONG).show();
                    }
                }

            }

            @Override
            public void onFailure(Call<UserResponse> call, Throwable t) {
                Toast.makeText(EditProfilActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();
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