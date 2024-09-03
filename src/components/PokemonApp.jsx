import { usePokemon } from '../hooks/usePokemon'
import { BuscarPokemon } from './BuscarPokemon'
import { ContenedorPokemons } from './ContenedorPokemons'

//functional component
export const PokemonApp = () => {

    const {handleGetPokemon, pokemons, nombrePokemon} = usePokemon()

    return(
        <>
        {/*props*/}
            <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
            <ContenedorPokemons pokemons={pokemons} nombrePokemon={nombrePokemon}/>
        </>
    )
}