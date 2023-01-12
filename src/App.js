// import Count from 'components/Counter/Counter';
// import Friends from 'Friend/Friends';
import { Prob } from 'components/Prob/Prob';

const userId = [
  { id: 1, name: 'Gren', age: 20 },
  { id: 2, name: 'Men', age: 25 },
  { id: 3, name: 'Ben', age: 30 },
  { id: 4, name: 'Mery', age: 35 },
];

function App() {
  return (
    <div>
      <Prob item={userId} />
      {/* {userId.map(users => (
        <Prob key={users.id} name={users.name} age={users.age} />
      ))} */}

      {/* <Count /> */}
      {/* <Friends /> */}
    </div>
  );
}

export default App;
