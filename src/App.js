// import Count from 'components/Counter/Counter';
// import Friends from 'Friend/Friends';
// import { Prob } from 'components/Prob/Prob';
// import { Container } from 'components/Prob/Proba.styled';
// import { AppBar } from 'components/AppBar/AppBar';
// import inpute from './input.json';
// import { FriendsList } from 'components/Listfrinds/Listfrinds';
// import friends from './friends.json';
// const userId = [
//   { id: 1, name: 'Gren', age: 20 },
//   { id: 2, name: 'Men', age: 25 },
//   { id: 3, name: 'Ben', age: 30 },
//   { id: 4, name: 'Mery', age: 35 },
// ];

// import { Reader } from 'components/Reader/Reader.jsx';
// import item from './publication.json';
import { Component } from 'react';
// import Todo from 'components/Todo/Todo';
// import Price from 'components/Price/Price';
// import transaction from './transaction.json';
// import Form from './components/Form/Form.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from 'components/Pocemon/PokemonForm';
import PokemonInfo from 'components/Pocemon/PokemonInfo';
// import { MaterialForm } from 'components/MaterialsForm/MaterialsForm';
import * as API from './components/server/server';
// import { Materials } from 'components/MaterialsForm/Materials';
// import { Millets } from 'components/Green/green.jsx';
// import Dropdown from 'components/Drobdaun/Drobdaun';

class App extends Component {
  state = {
    pokemonName: '',
    materials: [],
    isLoading: false,
    error: null,
  };
  // state = {
  //   todos: [{ id: 'id-1', text: 'Выучить React', completed: true }],
  // };

  // handelDelete = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  // handlerProbaForm = e => {
  //   e.preventDefault();
  //   console.log(e.target.elements.password);
  //   console.log(
  //     e.target.elements.password.value,
  //     e.target.elements.login.value
  //   );
  // };

  handelSubmitForm = pokemonName => {
    this.setState({ pokemonName });
  };

  // componentDidMount() {
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }));
  // }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterials = async id => {
    try {
      await API.deleteMaterials(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterials = async field => {
    try {
      const updateMaterials = await API.updateMaterials(field);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.ai === field.id ? updateMaterials : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    // const { todos } = this.state;
    // const completeTodo = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0);
    // const { isLoading, materials, error } = this.state;
    return (
      <div>
        {/* <Millets />
        {error && (
          <p>
            Ой! что то пошло не так :( попробуйти еще раз перезагрузить
            страницу!
          </p>
        )}

        <MaterialForm onSubmit={this.addMaterial} />
        {isLoading ? (
          'Загружаем материал!'
        ) : (
          <Materials
            items={materials}
            onDelete={this.deleteMaterials}
            onUpdate={this.updateMaterials}
          />
        )} */}

        <PokemonForm onSubmit={this.handelSubmitForm} />
        <PokemonInfo pokemonName={this.state.pokemonName} />

        {this.state.pokemon && <div>Тут будет покемон!!</div>}
        <ToastContainer />
        {/* <Reader items={item} />
        <br />
        <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <Price items={transaction} /> */}
        {/* <Todo todos={todos} onDeleteTodo={this.handelDelete} /> */}

        {/* <p>Общее количество todo: {todos.length}</p>
        <p>Колич-тво выполниных: {completeTodo}</p> */}
        {/* <Dropdown /> */}
        {/* <FriendsList friends={friends} /> */}
        {/* <Container>
          
          <Prob item={userId} />
        </Container> */}
        {/* <AppBar
          user={{
            username: 'Maks vsemogushi',
            isOnline: true,
            points: {
              total: 200,
              required: 700,
            },
          }}
        /> */}
        {/* {userId.map(users => (
          <Prob key={users.id} name={users.name} age={users.age} />
        ))} */}
        {/* <Count /> */}
        {/* <Friends /> */}
      </div>
    );
  }
}

export default App;
