import { TfiApple } from 'react-icons/tfi';
import { Container, Cards, Span } from './Listfrinds.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Container class="friend-list">
      {friends.map(item => (
        <Cards key={item.id}>
          <Span isOnline={item.isOnline}>
            <TfiApple />
          </Span>
          <img
            className="avatar"
            src={item.avatar}
            alt={item.name}
            width="38"
          />
          <p className="name">{item.name}</p>
        </Cards>
      ))}
    </Container>
  );
};
