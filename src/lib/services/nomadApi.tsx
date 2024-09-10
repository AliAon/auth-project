"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";
import { getToken } from "../helper";
export const nomadApi = createApi({
  reducerPath: 'nomadApi',
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
    CreateNomadIntoduction: build.mutation<any, any>({
      query: (credentials) => ({ url: `/introductions/`, method: 'POST', body: credentials }),
      transformResponse: (response: any) => response
    }),
    CreateNomadDescription: build.mutation<any, any>({
        query: (credentials) => ({ url: `/nomad/`, method: 'POST', body: credentials }),
        transformResponse: (response: any) => response
    }),
    CreateNomadPrefferedCountry: build.mutation<any, any>({
        query: (credentials) => ({ url: `/preferred-countries/`, method: 'POST', body: credentials }),
        transformResponse: (response: any) => response
      }),

      CreateNomadOccupation: build.mutation<any, any>({
        query: (credentials) => ({ url: `/nomad-profile/`, method: 'POST', body: credentials }),
        transformResponse: (response: any) => response
      }),



  

 
  }),
});

export const { useCreateNomadDescriptionMutation,useCreateNomadIntoductionMutation,useCreateNomadPrefferedCountryMutation,useCreateNomadOccupationMutation} = nomadApi;
