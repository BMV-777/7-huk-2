// import Count from 'components/Counter/Counter';
// import Friends from 'Friend/Friends';
// import { Prob } from 'components/Prob/Prob';
// import { Container } from 'components/Prob/Proba.styled';
import { AppBar } from 'components/AppBar/AppBar';

// const userId = [
//   { id: 1, name: 'Gren', age: 20 },
//   { id: 2, name: 'Men', age: 25 },
//   { id: 3, name: 'Ben', age: 30 },
//   { id: 4, name: 'Mery', age: 35 },
// ];

function App() {
  return (
    <div>
      {/* <Container>
        
        <Prob item={userId} />
      </Container> */}
      <AppBar
        user={{
          username: 'Maks vsemogushi',
          isOnline: false,
          points: {
            total: 200,
            required: 700,
          },
        }}
      />
      {/* {userId.map(users => (
        <Prob key={users.id} name={users.name} age={users.age} />
      ))} */}

      {/* <Count /> */}
      {/* <Friends /> */}
    </div>
  );
}

export default App;
