import api from "./api";

export const categoryApi = api.injectEndpoints({
  reducerPath: "categoryApi",
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => {
        return {
          url: "category/addCategory",
          method: "POST",
          body: data,
        };
      },
    }),

    getAllCategory: builder.query({
      query: () => "category/getAllCategory",
    }),

    



  }),
});

export const {
  useAddCategoryMutation,
  useGetAllCategoryQuery,
  
} = categoryApi;