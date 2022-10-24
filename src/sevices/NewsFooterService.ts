import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {INewsFooter} from "../models/INewsFooter";

export const newsFooterAPI = createApi({
    reducerPath: 'newsFooterAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<INewsFooter[], any>({
            query: () => ({
                url: '/newsFooter'
            })
        })
    })
})