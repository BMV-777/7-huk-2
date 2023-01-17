export const FriendsList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(item => (
        <li key={item.id}>
          <span className={item.isOnline}>{item.isOnline}</span>
          <img
            className={item.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p class={item.name}></p>
        </li>
      ))}
    </ul>
  );
};
