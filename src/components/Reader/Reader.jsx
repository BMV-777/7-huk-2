import { Component } from 'react';
import { ReaderControls } from './RaderControls';
import { ReaderProgress } from './ReaderProgress';
import { ReaderPublication } from './ReaderPublication';

const Key_Lock = 'reder_gren_day';

export class Reader extends Component {
  state = {
    publication: 0,
  };

  componentDidMount() {
    const index = localStorage.getItem(Key_Lock);
    if (index !== null) {
      this.setState({ publication: Number(index) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.publication !== this.state.publication) {
      localStorage.setItem(Key_Lock, this.state.publication);
    }
  }

  changeIndex = value => {
    this.setState(prev => ({
      publication: prev.publication + value,
    }));
  };

  render() {
    const { items } = this.props;
    const numbersOfItems = items.length;
    const { publication } = this.state;
    const position = publication + 1;
    const currentItem = items[publication];
    const isFirst = publication === 0;
    const isLast = publication === numbersOfItems - 1;
    return (
      <div>
        <ReaderControls
          onBack={() => this.changeIndex(-1)}
          onForward={() => this.changeIndex(1)}
          prevDisabled={isFirst}
          nextDisabled={isLast}
        />
        {/* <section>
          <button type="button" onClick={() => this.changeIndex(-1)}>
            Назад
          </button>
          <button type="button" onClick={() => this.changeIndex(1)}>
            Вперед
          </button>
        </section> */}
        <ReaderProgress current={position} total={numbersOfItems} />
        {/* <p>
          {position}/{numbersOfItems}
        </p> */}
        <ReaderPublication item={currentItem} />
        {/* <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article> */}
      </div>
    );
  }
}
