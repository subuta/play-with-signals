import { signal, effect } from "@preact/signals";

export const todos = signal([
  { text: 'things to do' }
]);

export const addTodo = () => {
  if (text.value === '') return
  todos.value = [...todos.value, {
    text: text.value
  }]
  text.value = ''
}

export const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t.text !== todo.text)
}

export const text = signal("");
