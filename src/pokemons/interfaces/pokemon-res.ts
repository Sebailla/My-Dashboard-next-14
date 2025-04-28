
export interface PokemonResponse {
    count: number
    next: string
    previus: null
    results: Results[]
}

export interface Results {
    name: string
    url: string
}