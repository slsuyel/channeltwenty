import baseApi from "../../api/baseApi";

const articleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        articlePost: builder.mutation({
            query: (data) => ({
                url: "/api/articles",
                method: "POST",
                body: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
    }),
});

export const { useArticlePostMutation } = articleApi;