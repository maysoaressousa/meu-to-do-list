import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar Funcionalidade x no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir pra Academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ])

  return (
    <div className='app'>
      <h1>Minha Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo={todo}/>
          
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
