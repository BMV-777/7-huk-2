import { useState, useEffect } from 'react';
import PocemonDateView from './PocemonDateView';
import PokemonError from './PocemonError';
import PokemonPending from './PokemonPending';

// export default class PokemonInfo extends Component {
//   state = {
//     pokemonName: null,
//     error: false,
//     status: 'idle',
//   };

//   componentDidUpdate = (prevProp, prevState) => {
//     if (prevProp.pokemonName !== this.props.pokemonName) {
//       this.setState({ status: 'pending' });
//       fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(
//             new Error(`Нет покемона с именем ${this.props.pokemonName}`)
//           );
//         })
//         .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   };

//   render() {
//     const { pokemon, error, status } = this.state;

//     if (status === 'idle') {
//       return <div>Ведите имя покемона!</div>;
//     }

//     if (status === 'pending') {
//       return <PokemonPending />;
//     }

//     if (status === 'rejected') {
//       return <PokemonError message={error.message} />;
//     }
//     if (status === 'resolved') {
//       return <PocemonDateView pokemon={pokemon} />;
//     }
//   }
// }

// const Status = {
//   IDLE: 'idle',
//   PENDING: '',
// };

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`Нет покемона с именем ${pokemonName}`)
        );
      })
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <div>Ведите имя покемона!</div>;
  }

  if (status === 'pending') {
    return <PokemonPending pokemonName={pokemonName} />;
  }

  if (status === 'rejected') {
    return <PokemonError message={error.message} />;
  }
  if (status === 'resolved') {
    return <PocemonDateView pokemon={pokemon} />;
  }
}
