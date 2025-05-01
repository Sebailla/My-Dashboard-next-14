'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useEffect, useState } from "react"

export const Favorite = () => {

    const favorite = useAppSelector(state => Object.values(state.pokemons.favorite))

    /* const [pokemon, setPokemon] = useState(favorite)

    useEffect(() => {
        setPokemon(favorite)
    }, [favorite]) */

    return (
        <>
            {
                favorite.length === 0
                    ?
                    <NoFavorite />
                    :
                    <PokemonGrid pokemons={favorite} />
            }
        </>
    )
}

export const NoFavorite = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <span className="text-2xl">No hay pokemons favoritos</span>
        </div>
    )
}