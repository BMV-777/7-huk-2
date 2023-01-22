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

import { Component } from 'react';
// import Todo from 'components/Todo/Todo';
// import Price from 'components/Price/Price';
// import transaction from './transaction.json';
import Form from './components/Form/Form.jsx';

// import Dropdown from 'components/Drobdaun/Drobdaun';

class App extends Component {
  state = {
    todos: [{ id: 'id-1', text: 'Выучить React', completed: true }],
  };

  handelDelete = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    // const { todos } = this.state;
    // const completeTodo = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0);

    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
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
