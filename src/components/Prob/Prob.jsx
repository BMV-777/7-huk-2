// const userId = [
//   { id: 1, name: 'Gren', age: 20 },
//   { id: 2, name: 'Men', age: 25 },
//   { id: 3, name: 'Ben', age: 30 },
//   { id: 4, name: 'Mery', age: 35 },
// ];
export const Prob = ({ item }) => {
  // const { id, name, age } = items;
  return (
    <div>
      {item.map(items => (
        <ul key={items.id}>
          {items.id}
          <li name={items.name}>{items.name}</li>
          <li age={items.age}>{items.age}</li>
        </ul>
      ))}
    </div>
  );
};
