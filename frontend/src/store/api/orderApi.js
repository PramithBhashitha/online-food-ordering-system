import api from "./api";

export const orderApi = api.injectEndpoints({
    reducerPath: "orderApi",
    endpoints: (builder) => ({
        addOrder: builder.mutation({
        query: (data) => {
            return {
            url: "order/addOrder",
            method: "POST",
            body: data,
            };
        },
        }),
    
        getAllOrders: builder.query({
        query: () => "order/getAllOrder",
        providesTags: ["Order"],
        }),
    
        deleteOrder: builder.mutation({
        query: (orderId) => {
            return {
            url: `order/deleteOrderById/${orderId}`,
            method: "DELETE",
            };
        },
        invalidatesTags: ["Order"],
        }),
    
        updateOrder: builder.mutation({
        query: (data) => {
            return {
            url: `order/updateOrder`,
            method: "PUT",
            body: data,
            };
        },
        }),
    }),
})

export const {
    useAddOrderMutation,
    useGetAllOrdersQuery,
    useDeleteOrderMutation,
    useUpdateOrderMutation,
} = orderApi;