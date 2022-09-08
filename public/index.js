import { render } from 'preact';

import 'twind/shim'

import { todos, text, addTodo, removeTodo } from './Todo'

function App() {
  const handleSubmit = (e) => {
    addTodo()
    e.preventDefault()
  }

  return <div className='p-4'>
    <h1 className='text-xl font-bold'>TODOS</h1>

    <form onSubmit={handleSubmit}>
      <input className='mt-4 px-2 py-1 border rounded' type='text' onInput={(e) => {
        text.value = e.target.value
      }} value={text} />

      <button className='ml-4 px-2 py-1 bg-gray-100 border rounded'>Add</button>
    </form>

    <ul className='mt-4 pl-4 list-disc'>
      {todos.value.map((todo) => {
        return (
          <li className='p-2'>
            <span>{todo.text}</span>
            <span className='inline-block ml-2 text-gray-500 font-bold cursor-pointer hover:underline' onClick={() => removeTodo(todo)}>✗</span>
          </li>
        )
      })}
    </ul>
  </div>;
}

render(<App />, document.body);
