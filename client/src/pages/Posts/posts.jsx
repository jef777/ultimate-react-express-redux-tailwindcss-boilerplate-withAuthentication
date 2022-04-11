import React, { useEffect } from 'react'

import List from '../../utils/List'
import ListItem from '../../utils/ListItem'

import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postThunk'

export default function Posts() {
    const dispatch = useDispatch()

    const { posts, loading, status } = useSelector((state) => state.posts)

    const getPosts = async () => {
        dispatch(fetchPosts())
    }

    useEffect(() => {
        getPosts()
    }, [])
    if (loading == false) {
        return (
            <div className="relative top-24 mx-auto px-4 sm:px-8">
                <div className=" rounded-lg">
                    <List>
                        {posts.value.map((post, i) => (
                            <ListItem key={i} post={post} />
                        ))}
                    </List>
                </div>
            </div>
        )
    } else if (loading == true) {
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-80">
                <svg
                    className="mr-3  h-12 w-12 animate-spin text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                <h2 className="text-center text-xl font-semibold text-blue-200">
                    Loading...
                </h2>
                <p className="w-1/3 text-center text-blue-200">
                    loading page content.
                </p>
            </div>
        )
    }
}
