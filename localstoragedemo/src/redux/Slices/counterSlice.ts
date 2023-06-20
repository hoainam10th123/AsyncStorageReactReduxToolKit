import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'

export interface CounterState {
  value: number,
  text: string
}

const initialState: CounterState = {
  value: 0,
  text: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      state.text = `counter ${state.value}`
    },
    decrement: (state) => {
      state.value -= 1
      state.text = `counter ${state.value}`
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers(builder) {//This is especially helpful when you are looking to clear persisted state on a dispatched logout action
    builder.addCase(PURGE, (state) => {
      //customEntityAdapter.removeAll(state);
  });
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer