import { PokemonGrid } from "@/pokemons/components"
import { SimplePokemon, PokemonResponse } from "@/pokemons/interfaces"




const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemon = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    return pokemon
}

const PokemonPage = async () => {

    const pokemons = await getPokemon(151)

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-5">
                Listado de Pokemons <small className="text-blue-600">(estático)</small>
            </span>

            <PokemonGrid pokemons={pokemons}/>
        </div>
    )
}

export default PokemonPage