import api from '../../store/api';

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => 'puppies',
      providesTags: ['Puppy'],
      transformErrorResponse: (error) => ({
        status: error.status,
        message: 'Failed to fetch puppies',
      }),
    }),
    getPuppy: build.query({
      query: (id) => `puppies/${id}`,
      providesTags: ['Puppy'],
      transformResponse: (response) => response.data,
      transformErrorResponse: (error) => ({
        status: error.status,
        message: `Failed to fetch puppy with id ${id}`,
      }),
    }),
    addPuppy: build.mutation({
      query: (newPuppy) => ({
        url: 'puppies',
        method: 'POST',
        body: newPuppy,
      }),
      invalidatesTags: ['Puppy'],
      transformErrorResponse: (error) => ({
        status: error.statud,
        message: 'Failed to add new puppy',
      }),
    }),
    deletePuppy: build.mutation({
      query: (id) => ({
        url: `puppies/${id}`,
        method: 'DELETE',
      }),
      inavlidTags: ['Puppy'],
      transformErrorResponse: (error) => ({
        status: error.status,
        message: `Failed to delete puppy with id ${id}`,
      }),
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;

export default puppyApi;
