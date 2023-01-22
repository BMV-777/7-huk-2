import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    license: false,
  };

  handelGhange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handelCheckrd = e => {
    console.log(e.currentTarget.checked);
    this.setState({
      license: e.currentTarget.checked,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handelGhange}
          />
        </label>
        <label htmlFor="">
          SurName
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handelGhange}
          />
        </label>
        <br />
        <input
          type="checkbox"
          name="license"
          checked={this.state.license}
          onChange={this.handelCheckrd}
        />
        Готов работать
        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
