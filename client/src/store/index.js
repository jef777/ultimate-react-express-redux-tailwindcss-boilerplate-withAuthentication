import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/auth'
import postsReducer from './slices/posts/posts'

export default configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
    },
})
