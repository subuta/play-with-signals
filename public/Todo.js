import { signal } from "@preact/signals";

export const initialize = () => {
  const todos = signal([
    { text: 'things to do' }
  ]);

  const addTodo = () => {
    if (text.value === '') return
    todos.value = [...todos.value, {
      text: text.value
    }]
    text.value = ''
  }

  const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t.text !== todo.text)
  }

  const text = signal("");

  return {
    todos,
    text,
    addTodo,
    removeTodo
  }
}
