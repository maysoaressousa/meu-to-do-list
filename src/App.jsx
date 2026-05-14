import { useState } from 'react';
import './App.css'; // Importação dos estilos [7]

// Importação dos componentes isolados [8-11]
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  // 1. STATES
  // Estado principal das tarefas (iniciado com alguns dados mockados) [12, 13]
  const [todos, setTodos] = useState([
    { id: 1, text: "Criar funcionalidade X no sistema", category: "Trabalho", isCompleted: false },
    { id: 2, text: "Ir pra academia", category: "Pessoal", isCompleted: false },
    { id: 3, text: "Estudar React", category: "Estudos", isCompleted: false }
  ]);

  // Estados auxiliares para pesquisa e filtros [4, 14]
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // 2. FUNÇÕES DE MANIPULAÇÃO
  // Função para adicionar nova tarefa [1, 15]
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000), // Geração de ID único [1]
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos); // Atualiza o state renderizando a nova tarefa [15]
  };

  // Função para deletar uma tarefa [2, 16]
  const removeTodo = (id) => {
    const newTodos = [...todos];
    // Retorna todos os itens, exceto o que possui o ID passado [2]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Função para marcar a tarefa como completa/incompleta [3, 17]
  const completeTodo = (id) => {
    const newTodos = [...todos];
    // Mapeia os itens e inverte o status isCompleted caso o ID seja igual [3]
    newTodos.map((todo) => 
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  // 3. RENDERIZAÇÃO DA INTERFACE
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      
      {/* Componentes de Pesquisa e Filtro recebendo seus respectivos states [10, 11] */}
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

      <div className="todo-list">
        {todos
          // Primeiro Filtro: Status (Todas, Completas ou Incompletas) [5]
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          // Segundo Filtro: Busca por texto (em tempo real) [4]
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          // Terceiro Filtro/Ordenação: Ordem Alfabética (Ascendente ou Descendente) [6]
          .sort((a, b) =>
            sort === "Asc"
              ? a.text > b.text ? 1 : -1
              : a.text < b.text ? 1 : -1
          )
          // Map: Renderiza o componente Todo iterando sobre o array final filtrado e ordenado [8, 18]
          .map((todo) => (
            <Todo
              key={todo.id} // Prop obrigatória do React para listas [19]
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      
      {/* Formulário de Criação recebendo a função de adicionar via props [15] */}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;