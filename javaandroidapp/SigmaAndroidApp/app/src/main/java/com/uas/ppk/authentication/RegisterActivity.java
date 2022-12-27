package com.uas.ppk.authentication;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.uas.ppk.R;
import com.uas.ppk.model.RegisterModel;
import com.uas.ppk.response.RegisterResponse;
import com.uas.ppk.server.BaseUrl;

import org.json.JSONObject;

import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegisterActivity extends AppCompatActivity {

    Button buttonRegister, buttonLogin;
    EditText editNama, editEmail, editUsername, editPassword;
    ProgressDialog progressDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        Objects.requireNonNull(getSupportActionBar()).hide();

        // progress dialog
        progressDialog = new ProgressDialog(this);
        progressDialog.setCancelable(false);

        // parameter
        editNama = findViewById(R.id.editNama);
        editEmail = findViewById(R.id.editEmail);
        editUsername = findViewById(R.id.editUsername);
        editPassword = findViewById(R.id.editPassword);


        // button login
        buttonLogin = findViewById(R.id.buttonLogin);
        buttonRegister = findViewById(R.id.buttonRegister);

        // Intent Login
        buttonLogin.setOnClickListener(v -> {
            Intent intent = new Intent( RegisterActivity.this, LoginActivity.class);
            startActivity(intent);
            finish();
        });

        // action register
        buttonRegister.setOnClickListener(v -> {
            // convert to string
            String stringNama = editNama.getText().toString();
            String stringEmail = editEmail.getText().toString();
            String stringUsername = editUsername.getText().toString();
            String stringPassword = editPassword.getText().toString();

            // rule validation
            if(stringNama.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Nama tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringEmail.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Email tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringUsername.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Username tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringPassword.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Password tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else {
                // validation success
                register();
            }
        });
    }

    // login process
    public void register(){

        RegisterModel registerModel = new RegisterModel();
        registerModel.setNama(editNama.getText().toString());
        registerModel.setEmail(editEmail.getText().toString());
        registerModel.setUsername(editUsername.getText().toString());
        registerModel.setPassword(editPassword.getText().toString());

        Call<RegisterResponse> registerResponseCall = BaseUrl.getUserService().userRegister(registerModel);
        registerResponseCall.enqueue(new Callback<RegisterResponse>() {
            @Override
            public void onResponse(Call<RegisterResponse> call, Response<RegisterResponse> response) {

                if(response.isSuccessful()){
                    Toast.makeText(RegisterActivity.this,"Register Success!", Toast.LENGTH_LONG).show();
                    startActivity(new Intent(RegisterActivity.this, LoginActivity.class));
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
            public void onFailure(Call<RegisterResponse> call, Throwable t) {
                Toast.makeText(RegisterActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();
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