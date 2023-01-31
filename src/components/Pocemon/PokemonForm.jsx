import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handelNameGhange = event => {
//     this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
//   };

//   handelSubmit = e => {
//     e.preventDefault();

//     if (this.state.pokemonName.trim() === '') {
//       toast.error('Веди имя покемонна!');
//       return;
//     }

//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handelSubmit}>
//           <input
//             type="text"
//             name="pokemonName"
//             value={this.state.pokemonName}
//             onChange={this.handelNameGhange}
//           />
//           <button type="submit">
//             <ImSearch style={{ color: 'blue' }} /> Найти
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemon] = useState('');

  const handelNameGhange = event => {
    setPokemon(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Веди имя покемонна!');
      return;
    }

    onSubmit(pokemonName);
    setPokemon('');
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handelNameGhange}
        />
        <button type="submit">
          <ImSearch style={{ color: 'blue' }} /> Найти
        </button>
      </form>
    </div>
  );
}
