import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import pokemonsReducer from './pokemons/pokemonsSlice'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { localStorageMiddleware } from './middlewares/localStorageMiddleware'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsReducer
    },
    /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware) */
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector