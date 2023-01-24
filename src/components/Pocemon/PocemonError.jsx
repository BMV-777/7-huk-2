import errorImage from '../../error.png';

export default function PokemonError({ message }) {
  return (
    <div>
      <img src={errorImage} width="240" alt="znak" />
      <p>{message}</p>
    </div>
  );
}
