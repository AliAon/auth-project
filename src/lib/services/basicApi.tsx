"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";
import { getToken } from "../helper";
export const basicApi = createApi({
  reducerPath: "basicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    GetAllCountry: build.query<any, void>({
      query: () => ({ url: `/basicinfo/countries/` }),
      transformResponse: (response: any) => response,
    }),

    AddBacisInfo: build.mutation<any, any>({
      query: (credentials) => ({
        url: `/basicinfo/basicinfo/`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => response,
    }),
    AddContactInfo: build.mutation<any, any>({
      query: (credentials) => ({
        url: `/contactinfo/contactinfo/`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => response,
    }),
    AddRefference: build.mutation<any, any>({
      query: (credentials) => ({
        url: `/references/`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any) => response,
    }),
  }),
});

export const {
  useGetAllCountryQuery,
  useAddBacisInfoMutation,
  useAddContactInfoMutation,
  useAddRefferenceMutation
} = basicApi;
