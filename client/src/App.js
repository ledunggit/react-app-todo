import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

// components

import InputTodos from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return <Fragment>
    <div className="container">
      <InputTodos></InputTodos>
      <ListTodos></ListTodos>
    </div>
  </Fragment>;
}

export default App;
