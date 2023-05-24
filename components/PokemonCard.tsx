import Image from "next/image";
import Pokemon from "../interfaces/IPokemon";
import "../styles/card.css";

type PokemonCardProps = {
  pokemon: Pokemon;
  flipped: boolean;
  onFlip: (id: number) => void;
  index: number;
};

const PokemonCard = ({ pokemon, flipped, onFlip, index }: PokemonCardProps) => {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => onFlip(index)}
    >
      <div>
        {flipped ? (
          <Image src={pokemon.image} alt="pokemon" width={100} height={100} />
        ) : (
          <Image src="/back.webp" alt="card back" width={100} height={100} />
        )}
      </div>
      
    </div>
  );
};

export default PokemonCard;