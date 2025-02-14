import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://estate-backend-6esa.onrender.com/api",
    credentials: "include",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (userData) => ({
        url: "/product/create",
        method: "POST",
        body: userData,
      }),
    }),

    getAllProduct: builder.query({
      query: (query) => {
        const searchParams = new URLSearchParams(query).toString();
        return {
          url: `/product/getHomes?${searchParams}`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.allHomes.map(({ id }) => ({ type: "Products", id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    savedAPost: builder.mutation({
      query: (savePostDetails) => ({
        url: "/product/savedpost",
        method: "POST",
        body: savePostDetails,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
    getFavoriteProduct: builder.query({
      query: () => ({
        url: "/product/favorite",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products", id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useSavedAPostMutation,
  useGetFavoriteProductQuery,
} = productApi;
