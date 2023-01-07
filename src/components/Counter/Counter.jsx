import { useEffect, useRef, useReducer } from 'react';

function repeter(state, action) {
  switch (action.type) {
    case 'incriment':
      return state + action.payload;

    case 'dicrement':
      return state - action.payload;

    default:
      throw new Error(`Unsuport action type ${action.type}`);
  }
}

export default function Count() {
  // const [count, setCount] = useState(0);
  const isNotRender = useRef(true);
  const [count, dispatch] = useReducer(repeter, 0);

  useEffect(() => {
    if (isNotRender.current) {
      isNotRender.current = false;
      return;
    }
    console.log(`Один раз - ${Date.now()}`);
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'incriment', payload: 1 })}>
        Увеличить
      </button>

      <button onClick={() => dispatch({ type: 'dicrement', payload: 1 })}>
        Уменьшить
      </button>
    </div>
  );
}
