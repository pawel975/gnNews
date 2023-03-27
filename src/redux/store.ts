import { configureStore } from "@reduxjs/toolkit";
import articlesViewTypeReducer from "./slices/articlesViewTypeSlice";

const store = configureStore({
    reducer: {
        articlesViewType: articlesViewTypeReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;