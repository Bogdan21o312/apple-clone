import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IColumnFooter} from "../models/IColumnFooter";

export const columnFooterAPI = createApi({
    reducerPath: 'columnFooterAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<IColumnFooter[], any>({
            query: () => ({
                url: '/columnFooter'
            })
        })
    })
})