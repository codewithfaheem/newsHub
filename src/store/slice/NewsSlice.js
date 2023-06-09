import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    newsCategory :"all",
    newsItems: "",
    loading: true
}
export const NewsSlice = createSlice( {
    name:'newsItems',
    initialState,
    reducers:{
        changeNewsCategory: (state, a) => {
            state.newsCategory = a.payload
        },
        addNewsItems: (state, a) => {
            state.newsItems = a
        },
        setLoading: (state, a) => {
            state.loading = a.payload
        }
    }
})

export const{ changeNewsCategory, addNewsItems, setLoading } = NewsSlice.actions
export default NewsSlice.reducer