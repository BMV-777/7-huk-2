export const Materials = ({ items, onDelete, onUpdate }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>
            <b>Названия</b>: {item.title}
          </p>
          <p>
            <b>Ссылка</b>: {item.link}
          </p>
          <button type="button" onClick={() => onDelete(item.id)}>
            Редактировать
          </button>
          <button
            type="button"
            onClick={() => onUpdate({ id: item.id, title: Date.now() })}
          >
            Обновить
          </button>
          <hr />
        </li>
      ))}
    </ul>
  );
};
