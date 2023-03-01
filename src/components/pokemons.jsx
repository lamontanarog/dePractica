import { useState, useEffect } from "react";
import React from "react";

 function TraerPokemon() {

    const [pokedex, setPokedex] = useState();


    return(
        <>
        <button onClick={() => alert('Bulbasur')}>Traer pokemones</button>
        </>
    )
 }

 export default TraerPokemon;