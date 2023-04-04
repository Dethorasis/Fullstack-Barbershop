import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: rootReducer,
})

export default store
