import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../types'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: build => ({
    getPosts: build.query<Post[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      })
    }),
    getPostById: build.query<Post, string>({
      query: id => `/posts/${id}`
    })
  })
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi
