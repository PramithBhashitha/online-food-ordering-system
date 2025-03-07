import api from "./api";

export const paymentApi = api.injectEndpoints({
    reducerPath: "paymentApi",
    endpoints: (builder) => ({
        makePayment: builder.mutation({
            query: (data) => {
                return {
                    url: "payment/addPayment",
                    method: "POST",
                    body: data,
                };
            },
        }),
    }),
})

export const { useMakePaymentMutation } = paymentApi;