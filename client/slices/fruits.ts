import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFruits } from '../apis/fruits'
const initialState = [] as string[]

export const fetchFruits = createAsyncThunk('fruits/fetchFruits', async () => {
  const fruits = await getFruits()
  return fruits
})

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchFruits.fulfilled, (state, action) => {
      return action.payload
    }),
})

export default fruitsSlice.reducer
