import {createSlice} from "@reduxjs/toolkit";

interface ArticlesViewTypeState {
    type: string
}

const initialState: ArticlesViewTypeState = {
    type: "list"
}

export const articlesViewTypeSlice = createSlice({
    name: "articlesViewType",
    initialState,
    reducers: {
        toggleViewType: (state) => {
            state.type === "list" ? state.type = "grid" : state.type = "list"
        }
    }
})

export const {toggleViewType} = articlesViewTypeSlice.actions

export default articlesViewTypeSlice.reducer