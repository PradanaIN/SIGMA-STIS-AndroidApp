package com.uas.ppk.authentication;

import static android.content.ContentValues.TAG;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import com.uas.ppk.R;
import com.uas.ppk.admin.HomeAdminActivity;
import com.uas.ppk.model.LoginModel;
import com.uas.ppk.response.LoginResponse;
import com.uas.ppk.server.BaseUrl;
import com.uas.ppk.user.HomeUserActivity;

import org.json.JSONObject;

import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity {

    CardView cardView;
    TextView textView;
    Button buttonRegister, buttonLogin;
    EditText editEmail, editPassword;
    ProgressDialog progressDialog;
    SharedPreferences.Editor editor;

    Handler handler = new Handler();
    Runnable runnable = new Runnable() {
        @Override
        public void run() {
            textView.setVisibility(View.VISIBLE);
            cardView.setVisibility(View.VISIBLE);
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Objects.requireNonNull(getSupportActionBar()).hide();

        // login effect
        cardView = findViewById(R.id.cardView);
        textView = findViewById(R.id.textLogin);
        handler.postDelayed(runnable, 1500);

        editor = getSharedPreferences("USER_LOGIN", MODE_PRIVATE).edit();
        // progress dialog
        progressDialog = new ProgressDialog(this);
        progressDialog.setCancelable(false);

        // parameter
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);

        buttonLogin = findViewById(R.id.buttonLogin);
        buttonRegister = findViewById(R.id.buttonRegister);

        // Intent Register
        buttonRegister.setOnClickListener(v -> {
            Intent intent = new Intent( LoginActivity.this, RegisterActivity.class);
            startActivity(intent);
            finish();
        });

        // Intent Home
        buttonLogin.setOnClickListener(v -> {
            // convert to string
            String stringEmail = editEmail.getText().toString();
            String stringPassword = editPassword.getText().toString();

            // rule validation
            if(stringEmail.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Email tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else if(stringPassword.isEmpty()) {
                Toast.makeText(getApplicationContext(), "Password tidak boleh kosong!", Toast.LENGTH_LONG).show();
            } else {
                login();
            }
        });
    }

    // login process
    public void login(){

        LoginModel loginModel = new LoginModel();
        loginModel.setEmail(editEmail.getText().toString());
        loginModel.setPassword(editPassword.getText().toString());

        Call<LoginResponse> loginResponseCall = BaseUrl.getUserService().userLogin(loginModel);
        loginResponseCall.enqueue(new Callback<LoginResponse>() {
            @Override
            public void onResponse(Call<LoginResponse> call, Response<LoginResponse> response) {

                showDialog();

                if(response.isSuccessful()){
                    hideDialog();
                    editor.putString("id", response.body().getId());
                    editor.putString("role", response.body().getRole());
                    editor.putString("nama", response.body().getNama());
                    editor.putString("username", response.body().getUsername());
                    editor.putString("email", response.body().getEmail());
                    editor.putString("token", response.body().getToken());
                    editor.apply();
                    Toast.makeText(LoginActivity.this,"Berhasil Login!", Toast.LENGTH_LONG).show();
                    LoginResponse loginResponse = response.body();

                    new Handler().postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            if(loginResponse.getEmail().equals("admin@gmail.com")) {
                                startActivity(new Intent(LoginActivity.this, HomeAdminActivity.class).putExtra("data",loginResponse.getNama()));
                            } else {
                                startActivity(new Intent(LoginActivity.this, HomeUserActivity.class).putExtra("data",loginResponse.getNama()));
                            }
                        }
                    },250);

                }else{
                    hideDialog();
                    try {
                        JSONObject jObjError = new JSONObject(response.errorBody().string());
                        Toast.makeText(getApplicationContext(), jObjError.getString("messages"), Toast.LENGTH_LONG).show();
                    } catch (Exception e) {
                        Toast.makeText(getApplicationContext(), e.getMessage(), Toast.LENGTH_LONG).show();
                    }
                }

            }

            @Override
            public void onFailure(Call<LoginResponse> call, Throwable t) {
                Toast.makeText(LoginActivity.this,"Throwable "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();

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
