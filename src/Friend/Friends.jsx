import { useState, useMemo } from 'react';

const initFriends = [
  'Aren',
  'Aeren',
  'Arrrren',
  'Bren',
  'Bjjren',
  'Bllren',
  'Vren',
  'Vsxxren',
  'Vdsren',
  'Veeren',
  'Gren',
  'Gcren',
  'Grben',
  'Gren',
  'Gbren',
  'Dren',
  'Dhhren',
  'Drren',
  'Wren',
  'Weeren',
  'Wssren',
  'Rren',
  'Reeren',
  'Ryuren',
  'Udsfren',
  'Ukkren',
  'Jsren',
  'Jllen',
  'Pouren',
  'Paren',
  'Kfren',
  'Yccren',
  'Hren',
];

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    console.log('Вызовится ' + Date.now());
    return friends.filter(friends => friends.toLowerCase().includes(filter));
  }, [filter, friends]);

  // const visibleFriends = friends.filter(friends =>
  //   friends.toLowerCase().includes(filter)
  // );

  return (
    <div>
      <button type="button" onClick={() => setCount(c => c + 1)}>
        {count}
      </button>
      <hr />
      <input
        onChange={e => setFilter(() => setFilter(e.target.value))}
        value={filter}
      />
      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
