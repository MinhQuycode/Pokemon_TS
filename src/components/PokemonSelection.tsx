import React from "react";
import { Pokemon, PokemonDetail } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";
import { Detail } from "../App";

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonSelection: React.FC<Props> = (props) => {
  const { pokemons, setDetail, viewDetail } = props;

  const selectPokemon = (id: number) => {
    if (!viewDetail.isOpen) {
      setDetail({
        id: id,
        isOpen: true,
      });
    }
  };

  return (
    <>
      <section
        className={
          viewDetail.isOpen
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {viewDetail.isOpen ? <div className="overlay"></div> : <div></div>}
        {pokemons.map((poke) => {
          return (
            <div key={poke.id} onClick={() => selectPokemon(poke.id)}>
              <PokemonList
                viewDetail={viewDetail}
                setDetail={setDetail}
                key={poke.id}
                name={poke.name}
                id={poke.id}
                abilities={poke.abilities}
                image={poke.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonSelection;
