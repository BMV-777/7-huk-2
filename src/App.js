// import Count from 'components/Counter/Counter';
// import Friends from 'Friend/Friends';
// import { Prob } from 'components/Prob/Prob';
// import { Container } from 'components/Prob/Proba.styled';
// import { AppBar } from 'components/AppBar/AppBar';
// import inpute from './input.json';
import { FriendsList } from 'components/Listfrinds/Listfrinds';
// import { friends } from './friends.json';
// const userId = [
//   { id: 1, name: 'Gren', age: 20 },
//   { id: 2, name: 'Men', age: 25 },
//   { id: 3, name: 'Ben', age: 30 },
//   { id: 4, name: 'Mery', age: 35 },
// ];

const friends = [
  {
    id: 1,
    avatar:
      'https://vjoy.cc/wp-content/uploads/2020/11/9ada3bc305a1f45eab527f60da172d53.png',
    name: 'Mari',
    isOnline: true,
  },
  {
    id: 2,
    avatar:
      'https://vjoy.cc/wp-content/uploads/2020/11/9ada3bc305a1f45eab527f60da172d53.png',
    name: 'M',
    isOnline: false,
  },
  {
    id: 3,
    avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
    name: 'Enot',
    isOnline: false,
  },
  {
    id: 4,
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
    name: 'Cat',
    isOnline: true,
  },
  {
    id: 5,
    avatar:
      'https://bipbap.ru/wp-content/uploads/2021/07/unikal-nye-kartinki-na-avu-vk-i-odnoklassniki-samye-krasivye-2.jpg',
    name: 'Asassin',
    isOnline: true,
  },
  {
    id: 6,
    avatar:
      'https://bipbap.ru/wp-content/uploads/2021/07/unikal-nye-kartinki-na-avu-vk-i-odnoklassniki-samye-krasivye-2.jpg',
    name: 'Vedro',
    isOnline: false,
  },
  {
    id: 7,
    avatar:
      'https://www.meme-arsenal.com/memes/42302aa704d6b36a703b76ce8d82d4a4.jpg',
    name: 'Venom',
    isOnline: true,
  },
];

function App() {
  return (
    <div>
      <FriendsList friends={friends} />
      {/* <Container>
        
        <Prob item={userId} />
      </Container> */}
      {/* <AppBar
        user={{
          username: 'Maks vsemogushi',
          isOnline: true,
          points: {
            total: 200,
            required: 700,
          },
        }}
      /> */}
      {/* {userId.map(users => (
        <Prob key={users.id} name={users.name} age={users.age} />
      ))} */}
      {/* <Count /> */}
      {/* <Friends /> */}
    </div>
  );
}

export default App;
