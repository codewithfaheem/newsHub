import { createSlice } from "@reduxjs/toolkit";
import { CHANGE_PAGE, HOME_PAGE } from "../Constants";

const initialState = {
    page: HOME_PAGE,
    newsIndex: '23421424'
}
export const changePage = createSlice({
    name: CHANGE_PAGE,
    initialState,
    reducers:{
        setPage: (state, pageName)=>{
            state.page = pageName.payload
        },
        setNewsIndex: (state, a)=>{
            state.newsIndex = a.payload
        }
    }
})

export const{ setPage, setNewsIndex } = changePage.actions
export default changePage.reducer