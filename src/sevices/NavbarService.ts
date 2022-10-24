import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {INavbar} from "../models/INavbar";

export const navbarAPI = createApi({
    reducerPath: 'navbarAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<INavbar[], any>({
            query: () => ({
                url: '/navbar'
            })
        })
    })
})