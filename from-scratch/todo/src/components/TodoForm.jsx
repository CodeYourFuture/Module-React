import { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="todo-form">
      <h2> Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Adicionar Tarefa' 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        > 
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;

