import { configureStore } from "@reduxjs/toolkit";

import NewsReducer from './slice/NewsSlice'
import changePage from "./slice/ChangePage";

export const store = configureStore({
    reducer: {
        newsItems: NewsReducer,
        changePage: changePage,
    }
})