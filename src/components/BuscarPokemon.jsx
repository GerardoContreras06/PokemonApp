import { useState  } from "react"

export const BuscarPokemon = ({handleGetPokemon}) => {

    const [pokemon, setPokemon] = useState('')

    return(
        <>
    <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
        <form className='d-flex' onSubmit={ (e)=> { handleGetPokemon(e, pokemon)}}>
            <input type="text" className='form-control me-2' onChange={ (e)=>{ setPokemon(e.target.value)}}/>
            <input type="submit" value="Buscar" className='btn btn-outline-success'/>
        </form>
    </div>
    </>
    )
}