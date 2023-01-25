import { ImSpinner } from 'react-icons/im';
import pendingImage from '../../img_vapros.jpg';
import PocemonDateView from './PocemonDateView';

export default function PokemonPending({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div>
      <div>
        <ImSpinner size="32" />
        Загружаем...
      </div>
      <PocemonDateView pokemon={pokemon} />
    </div>
  );
}
