import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIService = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://auth-sps6.onrender.com/api/v1",
    prepareHeaders: (header) => {
      if (localStorage.getItem("token")) {
        header.set("authorization", `Bearer ${localStorage.getItem("token")}`);
      } else {
        header.delete("authorization");
      }
      return header;
    },
  }),
  endpoints: (builder) => ({}),
});

export default APIService;
