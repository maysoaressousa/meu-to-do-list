import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  // Estados para gerenciar o valor do input (título) e do select (categoria)
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    
    // Validação: se não houver título ou categoria, a função é interrompida
    if (!value || !category) return;
    
    // Executa a função de adicionar tarefa recebida via props
    addTodo(value, category);
    
    // Limpa os campos após a criação
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Digite o título" 
          value={value}
          onChange={(e) => setValue(e.target.value)} 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
