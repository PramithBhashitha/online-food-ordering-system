import api from "./api";

export const cartApi = api.injectEndpoints({
    reducerPath: "cartApi", 
    tagTypes: ["Cart"],
    endpoints: (builder) => ({
        addProductToCart: builder.mutation({
            query: (data) => {
                return {
                    url: "cart/addCart",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Cart"], 
        }),

        getCart: builder.query({
            query: () => "cart/getCart",
            providesTags: ["Cart"],
        }),

        updateCart: builder.mutation({
            query: (data) => {
                return {
                    url: "cart/updateCart",
                    method: "PATCH",
                    body: data,
                };
            },
            invalidatesTags: ["Cart"], 
        }),

        deleteCart: builder.mutation({
            query: (data) => ({
                url: "cart/deleteCart",
                method: "DELETE",
                body: data,
            }),
            invalidatesTags: ["Cart"],  // Ensures refetching
        }),
    }),
})

export const {
    useAddProductToCartMutation,
    useGetCartQuery,
    useUpdateCartMutation,
    useDeleteCartMutation,
} = cartApi;