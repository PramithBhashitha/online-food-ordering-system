import api from "./api";

export const userApi = api.injectEndpoints({
  reducerPath: "userApi",
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => {
        return {
          url: "user/registerUser",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),

    getAllUsers: builder.query({
      query: () => "user/getAllUsers",
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `user/editUser/${data.id}`, // Assuming the user has an id field
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation({
      query: (userId) => {
        return {
          url: `user/deleteUser/${userId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),



  }),
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;