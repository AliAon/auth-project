"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";
import { getToken } from "../helper";
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }

  }),
  endpoints: (build) => ({
    GetAllUsers: build.query<any, void>({
      query: () => ({ url: `/user/allUsers` }),
      transformResponse: (response: any) => response.data
    }),
    CreateUser: build.mutation<any, any>({
      query: (credentials) => ({ url: `/auth/register`, method: 'POST', body: credentials }),
      transformResponse: (response: any) => response

    }),
    LoginUser: build.mutation<any, any>({
      query: (credentials) => ({ url: `/auth/token`, method: 'POST', body: credentials }),
      transformResponse: (response: any) => response
    }),
    VerifyUser: build.query<any, any>({
      query: (credentials) => ({ url: `/auth/verify-email?token=${credentials?.token}`}),
      transformResponse: (response: any) => response
    }),
    UpdateeUser: build.mutation<any, any>({
      query: (body) => ({ url: `/auth/me`, method: 'PUT', body: body }),
      transformResponse: (response: any) => response
    }),
    CreateHostShift: build.mutation<any, any>({
      query: (body) => ({ url: `/shift-details/`, method: 'POST', body: body }),
      transformResponse: (response: any) => response
    }),
    GetUserRole: build.query<any, void>({
      query: () => ({ url: `/user-type/user/role` }),
      transformResponse: (response: any) => response
    }),
    UpdateUserRole: build.mutation<any, any>({
      query: (body) => ({ url: `/user-type/user/role`, method: 'PUT', body: body }),
      transformResponse: (response: any) => response
    }),
    DeleteUser: build.mutation<any, void>({
      query: (id) => ({ url: `/user/deleteUser/${id} `, method: 'DELETE' }),
      transformResponse: (response: any) => {
        return {
          response: response.data,
          status: response.success
        }
      }
    }),
    ForgetPassword: build.mutation<any, any>({
      query: (credentials) => ({ url: `/auth/forgot-password?email=${credentials?.email}`, method: 'POST'}),
      transformResponse: (response: any) => response

    }),
    ResetPassword: build.mutation<any, any>({
      query: (credentials) => ({ url: `/auth/reset-password?token=${credentials.token}&new_password=${credentials.password}`, method: 'POST', body: credentials }),
      transformResponse: (response: any) => response
    }),

  }),
});

export const { useCreateUserMutation,useLoginUserMutation,useForgetPasswordMutation,useResetPasswordMutation,useUpdateUserRoleMutation,useVerifyUserQuery,useCreateHostShiftMutation,useGetUserRoleQuery } = userApi;
