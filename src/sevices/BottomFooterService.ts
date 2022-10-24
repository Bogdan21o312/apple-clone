import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IBottomFooter} from "../models/IBottomFooter";

export const bottomFooterAPI = createApi({
    reducerPath: 'bottomFooterAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<IBottomFooter[], any>({
            query: () => ({
                url: '/bottomFooter'
            })
        })
    })
})