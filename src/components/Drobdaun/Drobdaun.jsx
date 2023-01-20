import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    isOnlain: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOnlain: !prevState.isOnlain,
    }));
  };
  // show = () => {
  //   this.setState({ isOnlain: true });
  // };
  // hide = () => {
  //   this.setState({ isOnlain: false });
  // };

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {this.state.isOnlain ? 'Показать' : 'Скрыть'}
        </button>

        {/* {this.state.isOnlain ? (
          <button type="button" onClick={this.toggle}>
            Скрыть
          </button>
        ) : (
          <button type="button" onClick={this.show}>
            Показать
          </button>
        )} */}
      </div>
    );
  }
}

export default Dropdown;
