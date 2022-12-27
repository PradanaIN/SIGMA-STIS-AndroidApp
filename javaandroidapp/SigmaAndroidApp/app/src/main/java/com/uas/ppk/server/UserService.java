package com.uas.ppk.server;

import com.uas.ppk.model.EventModel;
import com.uas.ppk.model.LoginModel;
import com.uas.ppk.model.RegisterModel;
import com.uas.ppk.model.UserModel;
import com.uas.ppk.response.EventResponse;
import com.uas.ppk.response.LoginResponse;
import com.uas.ppk.response.RegisterResponse;
import com.uas.ppk.response.UserResponse;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface UserService {

    @POST("login")
    Call<LoginResponse> userLogin(@Body LoginModel loginModel);

    @POST("register")
    Call<RegisterResponse> userRegister(@Body RegisterModel registerModel);

    @GET("event")
    Call<List<EventResponse>> getAllEvents(@Header("Authorization") String token);

    @POST("event")
    Call<EventResponse> addEvent(@Header("Authorization") String token,
                                 @Body EventModel eventModel);

    @GET("event/{id}")
    Call<EventResponse> getEvent(@Header("Authorization") String token,
                                 @Path("id") Integer id);

    @PUT("event/{id}")
    Call<EventResponse> editEvent(@Header("Authorization") String token,
                                  @Path("id") Integer id,
                                  @Body EventModel eventModel
                                  );

    @DELETE("event/{id}")
    Call<EventResponse> deleteEvent(@Header("Authorization") String token,
                                    @Path("id") Integer id);

    @GET("user")
    Call<List<UserResponse>> getAllUsers(@Header("Authorization") String token);

    @GET("me")
    Call<UserResponse> getMe(@Header("Authorization") String token);

    @PUT("user/{id}")
    Call<UserResponse> editMe(@Header("Authorization") String token,
                              @Path("id") String id,
                              @Body UserModel userModel);
}