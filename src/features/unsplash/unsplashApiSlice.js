// import {  createApi } from '@reduxjs/toolkit/query'
import { createApi, reactHooksModule, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Photo from "../../objects/photo";


const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY

export const unsplashApiSlice = createApi({
    reducerPath: 'unsplashApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.unsplash.com",
        prepareHeaders(headers){
            headers.set("Authorization", `Client-ID ${API_KEY}`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        fetchSearch: builder.query({
            query: (searchQuery) => {
                return `/search/photos?query=${searchQuery}&page=1&per_page=10`
            }
        }),
        getPhotoById: builder.query({
            query: (id) => {
                return `/photos/${id}`
            }
        })
    })
})

export const { useFetchSearchQuery, useGetPhotoByIdQuery } = unsplashApiSlice;
