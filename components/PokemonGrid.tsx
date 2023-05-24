import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";
import CardState from "../interfaces/ICardState";


type PokemonGridProps = {
    cards: CardState[];
    onFlip: (id: number) => void;
  };

  
  const PokemonGrid = ({ cards, onFlip }: PokemonGridProps) => {

    
    return (
      <Grid container className="custom-container" columns={12}>
        {cards.map((card, index) => (
          <Grid item sm={4}>
            <PokemonCard
              index={index}
              pokemon={card.pokemon}
              flipped={card.flipped}
              onFlip={onFlip}
            />
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default PokemonGrid;