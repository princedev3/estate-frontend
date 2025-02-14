import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://estate-backend-6esa.onrender.com/api",
    credentials: "include",
  }),
  // tagTypes: ["User-message"],
  endpoints: (builder) => ({
    getAllChat: builder.query({
      query: () => ({
        url: "/chat/get-chats",
      }),
    }),
    createChat: builder.mutation({
      query: (chatDetails) => ({
        url: "/chat/create-chat",
        method: "POST",
        body: JSON.stringify(chatDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getSingleChat: builder.query({
      query: (id) => ({
        url: `/chat/single-chat/${id}`,
      }),
    }),
    addMessage: builder.mutation({
      query: (messageDetails) => ({
        url: "/chat/add-message",
        method: "POST",
        body: JSON.stringify(messageDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getAllMessage: builder.query({
      query: (chatId) => ({
        url: `/chat/all-message/${chatId}`,
      }),
    }),
  }),
});

export const {
  useGetAllChatQuery,
  useCreateChatMutation,
  useGetSingleChatQuery,
  useAddMessageMutation,
  useGetAllMessageQuery,
} = chatApi;
