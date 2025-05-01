'use client'
import { Provider } from "react-redux";
import { store } from './index';
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}')
        store.dispatch(setFavoritePokemons(favorite))
    },[])
        
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

