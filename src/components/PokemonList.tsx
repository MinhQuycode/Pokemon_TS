import React, { useEffect, useState } from "react";
import { Detail } from "../App";
import "./pokemon.css";

interface Props {
  name: string;
  id: number;
  image: string;
  abilities:
    | {
        abilities: string;
        name: string;
      }[]
    | undefined;
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState<boolean>(false);
  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);

  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpen: false,
    });
  };
  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt={name} className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">
                Ability:
                {abilities?.map((abi: any, index) => {
                  return <div key={index}>{abi.ability.name}</div>;
                })}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt={name} />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
