import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IRepresentation} from "../models/IRepresentation"

export const homeAPI = createApi({
    reducerPath: 'homeAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllRepresentation: build.query<IRepresentation[], any>({
            query: () => ({
                url: 'homeRepresentation'
            })
        })
    })
})