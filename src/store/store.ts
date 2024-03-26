import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { postsApi } from './postsApi'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
