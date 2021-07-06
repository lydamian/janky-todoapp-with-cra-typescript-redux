import React, {useState} from 'react';
import { selectTodos, addTodo } from './todoSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'

const Todo = () => {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch();

  const addTodoHelper = (_todo: string) => {
    const todo = {
      todo: _todo,
      created_at: new Date(),
    }
    dispatch(addTodo(todo));
  }

  return (
    <div className="has-text-centered container">
      <h1 className="is-size-1">
        CRA/TypeScript Todo App
      </h1>
      <TodoForm addTodoHelper={addTodoHelper} />
      <TodoList todos={todos} />
    </div>
  )
}

type Todos = {
  todo: string;
  created_at: Date;
};

type TodoFormProps = {
  addTodoHelper: (_todo: string) => void
}

const TodoForm = ( { addTodoHelper } : TodoFormProps ) => {
  const addTodoHandler = () => {
    addTodoHelper(todo);
  }

  const [todo, setTodo] = useState('');

  // The event type is a "ChangeEvent"
  // We pass in "HTMLInputElement" to the input
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value)
  }

  return (
    <div className="card">
        <form>      
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input value={todo} onChange={onChange} className="input is-info is-clickable" type="text" placeholder="Info input" />
            <span onClick={addTodoHandler} className="icon is-small is-right is-clickable">
              <i className="fas fa-plus"></i>
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

type TodoListProps = {
  todos: Array<Todos>
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="card">
      <ul>
        {
          todos.map(item => (
            <li>
              {`${item.todo} ${item.created_at}`}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todo;