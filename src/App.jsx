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

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
{
  id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
},
    ];
      
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
        const filteredTodos = newTodos.filter((todo) => 
            todo.id !== id? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
      todo.id === id? todo.isCompleted = !todo.isCompleted: todo);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1>Minha Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm AddTodo={addTodo} />
    </div>
  );
}

export default App;
