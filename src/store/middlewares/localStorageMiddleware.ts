/* import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: MiddlewareAPI<RootState> = (state) => {
    return (next) => (action) => {
        next(action)
        console.log(action)

        if(action.type === 'pokemons/toggleFavorite'){
            const {pokemons} =state.getState() as RootState 
            localStorage.setItem('favoritePokemons', JSON.stringify(pokemons))
            return
        }
    
    }
} */


    import { MiddlewareAPI, Dispatch, Action } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware = (storeAPI: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    next(action);
    if (action.type === 'pokemons/toggleFavorite') {
        const { pokemons } = storeAPI.getState();
        localStorage.setItem('favoritePokemons', JSON.stringify(pokemons));
    }
};

    
