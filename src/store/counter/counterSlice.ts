import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//? Interface 

interface CounterState {
    counter: number
    isReady: boolean
}

//? Estado iniacial

const initialState: CounterState = {
    counter: 0,
    isReady: false
}

//? Slice

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initCounterState: (state, action: PayloadAction<number>) => {
            if (state.isReady) return
            state.counter = action.payload
            state.isReady = true
        },
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            if (state.counter === 0) return
            state.counter -= 1
        },
        reset: (state) => {
            state.counter = 0
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            if (action.payload < 0) action.payload = 0
            state.counter += action.payload
        }
    }
})

//? Expors

export const {
    increment,
    decrement,
    reset,
    incrementByAmount,
    initCounterState
} = counterSlice.actions

export default counterSlice.reducer