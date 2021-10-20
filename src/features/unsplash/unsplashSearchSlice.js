import {createSlice} from "@reduxjs/toolkit";

/** @type {string} */
const initialState = {
    searchQuery: ""
}

const unsplashSearchSlice = createSlice(
    {
        name: 'search',
        initialState,
        reducers: {
            setQuery(state, action){
                // console.log("searchQuery set action.payload: ", action.payload)
                state.searchQuery = action.payload
            }
        }
    }
)

export const { setQuery } = unsplashSearchSlice.actions
export const selectSearchQuery = (state) => state.search.searchQuery
export  default unsplashSearchSlice.reducer