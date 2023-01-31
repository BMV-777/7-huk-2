const GENRES = [
  {
    identifier: 'fiction',
    name: 'Fiction',
  },
  {
    identifier: 'classics',
    name: 'Classics',
  },
  {
    identifier: 'fantasy',
    name: 'Fantasy',
  },
  {
    identifier: 'romance',
    name: 'Romance',
  },
];

export function Millets({ onFilterC }) {
  return (
    <>
      <p>Book Genres</p>
      <ul>
        {GENRES.map(genre => (
          <li>
            <div onClick={() => onFilterC(genre.identifier)}>{genre.name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
