import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postThunk'
const initialState = {
    posts: { value: [] },
    loading: false,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.value.push(action.payload)
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'
                state.loading = false
                state.posts.value = payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.loading = false
                state.error = action.error.message
            })
    },
})

export const { addPost } = postsSlice.actions
export default postsSlice.reducer
