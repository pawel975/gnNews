import { configureStore } from "@reduxjs/toolkit";
import articlesViewTypeReducer from "./slices/articlesViewTypeSlice";

const store = configureStore({
    reducer: {
        articlesViewType: articlesViewTypeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;