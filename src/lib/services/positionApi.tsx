"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";
import { getToken } from "../helper";
export const positionApi = createApi({
  reducerPath: 'positionApi',
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
    AddRequirements: build.mutation<any, void>({
      query: (body) => ({ url: `/requirements/create/`,method: 'POST', body: body }),
      transformResponse: (response: any) => response
    }),
    Addavailability: build.mutation<any, void>({
        query: (body) => ({ url: `/availability/positions/`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
    GetAllOffers: build.query<any, void>({
        query: () => ({ url: `/your-offers/` }),
        transformResponse: (response: any) => response
      }),
      GetAllLanguages: build.query<any, void>({
        query: () => ({ url: `/description/list/` }),
        transformResponse: (response: any) => response
      }),
      AddOffer: build.mutation<any, void>({
        query: (body) => ({ url: `/your-offers/select`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
      AddDescription: build.mutation<any, void>({
        query: (body) => ({ url: `/description/descriptions/`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
      AddScreeningQuestions: build.mutation<any, void>({
        query: (body) => ({ url: `/screening-questions/screening-questions/`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
      AddFileUploadNomadAccomodations: build.mutation<any, any>({
        query: (body) => ({ url: `/media/nomad_accommodations/`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
      AddFileUploadBussinessPhoto: build.mutation<any, any>({
        query: (body) => ({ url: `/media/business_photos/`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
      AddFileUploadVideoGalleries: build.mutation<any, any>({
        query: (body) => ({ url: `/media/video_galleries/`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
      AddFileSocialMediaHandles: build.mutation<any, any>({
        query: (body) => ({ url: `/media/social_media_handles/`,method: 'POST', body: body }),
        transformResponse: (response: any) => response
      }),
  }),
});

export const { useAddRequirementsMutation,useGetAllOffersQuery,useGetAllLanguagesQuery,useAddOfferMutation ,useAddavailabilityMutation,useAddDescriptionMutation,useAddScreeningQuestionsMutation,useAddFileSocialMediaHandlesMutation,useAddFileUploadBussinessPhotoMutation,useAddFileUploadNomadAccomodationsMutation,useAddFileUploadVideoGalleriesMutation } = positionApi;
