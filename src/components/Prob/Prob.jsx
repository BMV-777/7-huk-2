// const userId = [
//   { id: 1, name: 'Gren', age: 20 },
//   { id: 2, name: 'Men', age: 25 },
//   { id: 3, name: 'Ben', age: 30 },
//   { id: 4, name: 'Mery', age: 35 },
// ];

import { Card } from './Proba.styled';
import { Ulion } from './Proba.styled';

export const Prob = ({ item }) => {
  // const { id, name, age } = items;
  return (
    <Card>
      {item.map(items => (
        <ul key={items.id}>
          {items.id}
          <Ulion name={items.name}>{items.name}</Ulion>
          <li age={items.age}>{items.age}</li>
        </ul>
      ))}
    </Card>
  );
};
