import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemons(props.pokemon);
  }, [pokemon]);

  const getPokemons = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  return (
    <div>
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    </div>
  );
};

export default PokeCard;
