import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_ENDPOINT = '/Comments';
const BASE_URL = 'https://65284718931d71583df21c39.mockapi.io/';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Comments'],
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: comment,

      }),
      invalidatesTags: ['Comments'],
    }),
    updateComments: builder.mutation({
      query: ({id, ...newCount}) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body: newCount,
      }),
      invalidatesTags: ['Comments'],
    })
  })
});

export const { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentsMutation } = commentApi;