import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  useAddPuppyMutation,
  useDeletePuppyMutation,
  useGetPuppiesQuery,
  useGetPuppyQuery,
} from '../features/puppies/puppySlice';

const COHORT_CODE = 'Marina';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.
const api = createApi({
  reducePath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  tagTypes: ['Puppy'],
  endpoints: (builder) => ({
    fetchPuppies: builder.query({
      query: () => 'puppies',
      provideTags: ['Puppy'],
    }),
  }),
});

export const {useFetchPuppiesQuery} = api;
export default api;
