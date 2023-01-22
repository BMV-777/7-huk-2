import React from 'react';
import styles from './Prise.styled.css';

function Price({ items }) {
  return (
    <table className={styles.table}>
      <thead className="tabl">
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr className="list">
            <td className="prise" type={item.type}>
              {item.type}
            </td>
            <td className="prise" amount={item.amount}>
              {item.amount}
            </td>
            <td className="prise" currency={item.currency}>
              {item.currency}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Price;
