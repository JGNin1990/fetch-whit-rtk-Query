import APIService from "../APIService";

const authEndPoint = APIService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (regData) => ({
        url: "/user/register",
        method: "POST",
        body: regData,
      }),
    }),
    me: builder.query({
      query: () => "user/me"
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useMeQuery } =
  authEndPoint;
