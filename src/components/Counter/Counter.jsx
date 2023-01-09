import { useEffect, useRef, useReducer } from 'react';

function repeter(state, action) {
  switch (action.type) {
    case 'incriment':
      return { ...state, count: state.count + action.payload };

    case 'dicrement':
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error(`Unsuport action type ${action.type}`);
  }
}

export default function Count() {
  // const [count, setCount] = useState(0);
  const isNotRender = useRef(true);
  const [state, dispatch] = useReducer(repeter, {
    count: 0,
  });

  useEffect(() => {
    if (isNotRender.current) {
      isNotRender.current = false;
      return;
    }
    console.log(`Один раз - ${Date.now()}`);
  });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'incriment', payload: 1 })}>
        Увеличить
      </button>

      <button onClick={() => dispatch({ type: 'dicrement', payload: 1 })}>
        Уменьшить
      </button>
    </div>
  );
}
