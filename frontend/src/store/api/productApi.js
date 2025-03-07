import api from "./api";

export const productApi = api.injectEndpoints({
    reducerPath: "productApi",
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (data) => {
                return {
                    url: "products/addProduct",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Products"],
        }),

        getAllProducts: builder.query({
            query: (category) => {
                const queryParam = category ? `?category=${category}` : ""; // Add query parameter if category is provided
                return `products/getAllProducts${queryParam}`;
            },
            providesTags: ["Products"],
        }),

        updateProduct: builder.mutation({
            query: (data) => {
                return {
                    url: `products/updateProduct/${data.id}`,
                    method: "PUT",
                    body: data,
                };
            },
            invalidatesTags: ["Products"],
        }),

        deleteProduct: builder.mutation({
            query: (productId) => {
                return {
                    url: `products/deleteProduct/${productId}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["Products"],
        }),
    }),
});

export const {
    useAddProductMutation,
    useGetAllProductsQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;
