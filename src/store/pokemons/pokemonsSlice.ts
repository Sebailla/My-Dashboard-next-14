
import { SimplePokemon } from '@/pokemons/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonState {
    favorite: { [key: string]: SimplePokemon }
}

/* const getInitialState = () => {
    const favoritePokemons = localStorage.getItem('favoritePokemons')
    if (!favoritePokemons) return {}
    return JSON.parse(favoritePokemons)
} */


const initialState: PokemonState = {
    favorite: {}
    //...getInitialState()
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorite = action.payload
        },

        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload
            const { id } = pokemon

            if (!!state.favorite[id]) {
                delete state.favorite[id]
                //return
            } else {
                state.favorite[id] = pokemon
            }
            localStorage.setItem('favoritePokemons', JSON.stringify(state.favorite))

        },
    }
});

export const { toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer