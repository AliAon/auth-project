"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";
import { getToken } from "../helper";
export const skillApi = createApi({
  reducerPath: 'skillApi',
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
    GetAllSkills: build.query<any, void>({
      query: () => ({ url: `/skills/skills/` }),
      transformResponse: (response: any) => response
    }),
    AddUserSkil: build.mutation<any, void>({
      query: (body) => ({ url: `/skills/skills/users/me/skills/`,method: 'POST', body: body }),
      transformResponse: (response: any) => response
    }),
  }),
});

export const { useGetAllSkillsQuery,useAddUserSkilMutation  } = skillApi;
