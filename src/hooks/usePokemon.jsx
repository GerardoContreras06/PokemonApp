import { useState } from "react";
import { reqPokemon } from "../service/pokemon";
 
export const usePokemon = () =>{
    const [pokemons, setPokemon] = useState([])
    const [nombrePokemon, setNombrePokemon] = useState('')
 
    const handleGetPokemon = (e, nombre) =>{
        e.preventDefault()
        reqPokemon(nombre).then((pokemons)=>{
            setPokemon(pokemons)
        })
        setNombrePokemon(nombre)
    }
 
    return{
        handleGetPokemon,
        pokemons,
        nombrePokemon
    }
}