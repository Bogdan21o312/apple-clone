import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../config";
import {IBottomFooter, ICountryFooter, ILinkColumnFooter, ITextFooter} from "../models/IFooter";

export const footerAPI = createApi({
    reducerPath: 'footerAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllNewsFooter: build.query<ITextFooter[], any>({
            query: () => ({
                url: '/newsFooter'
            })
        }),
        fetchAllTitle: build.query<ITextFooter[], any>({
            query: () => ({
                url: '/titleColumnFooter'
            })
        }),
        fetchAllLink: build.query<ILinkColumnFooter[], any>({
            query: () => ({
                url: '/linkColumnFooter'
            })
        }),
        fetchAllBottomFooter: build.query<IBottomFooter[], any>({
            query: () => ({
                url: '/bottomFooter'
            })
        }),
        fetchAllPagesFooter: build.query<ITextFooter[], any>({
            query: () => ({
                url: '/pagesFooter'
            })
        }),
        fetchAllCountryFooter: build.query<ICountryFooter[], any>({
            query: () => ({
                url: '/countryFooter'
            })
        }),
    })
})