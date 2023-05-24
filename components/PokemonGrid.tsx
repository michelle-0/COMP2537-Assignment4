import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";
import CardState from "../interfaces/ICardState";

type PokemonGridProps = {
    cards: CardState[];
    onFlip: (id: number) => void;
  };
  
  const PokemonGrid = ({ cards, onFlip }: PokemonGridProps) => {
    return (
      <Grid container>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
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