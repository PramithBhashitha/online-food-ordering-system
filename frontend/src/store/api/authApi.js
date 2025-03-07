import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),

  reducerPath: "authApi",
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => {
        return {
          url: "user/loginUser",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;