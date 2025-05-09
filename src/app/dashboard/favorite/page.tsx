import { Favorite, PokemonGrid } from "@/pokemons/components"

export const metadata ={
    title: 'Favoritos',
    description: 'Esta es la pagina de los pokemon favoritos'
}


const FavoritePage = async () => {


    return (
        <div className="flex flex-col">

            <span className="text-5xl my-5">
                Pokemons Favoritos <small className="text-blue-600">(Global State)</small>
            </span>

            {/* <PokemonGrid pokemons={[]}/> */}
            <Favorite/>
            
        </div>
    )
}

export default FavoritePage
