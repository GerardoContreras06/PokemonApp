export const ContenedorPokemons = ({pokemons, nombrePokemon}) =>{

    return(
        <>
            <div class="container text-center">
            <h1>{nombrePokemon}</h1>
            
            <img className="m-5 w-25" src={pokemons.url} alt="image"/>
            </div>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Peso</th>
                <th scope="col">Altura</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Informacion</th>
                <td>{+ pokemons.peso /10 + "kg" }</td>
                <td>{+ pokemons.altura /10 + "m"}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}