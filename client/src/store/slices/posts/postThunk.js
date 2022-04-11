import { createAsyncThunk } from '@reduxjs/toolkit'
// import { getToken } from '../../../utils/HelperFunctions'
// import api from '../../../services/api'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch(`${process.env.JSON_DUMMY_DATA}/posts`, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json())

    return response
})
