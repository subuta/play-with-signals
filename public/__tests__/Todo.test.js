import { initialize } from '../Todo'

describe('addTodo', () => {
  it('should add todo and reset text value on add', () => {
    const { todos, text, addTodo } = initialize()

    expect(todos.value).toEqual( [{"text": "things to do"}])
    expect(text.value).toEqual( '')

    text.value = 'buy egg'
    expect(todos.value).toEqual( [{"text": "things to do"}])
    expect(text.value).toEqual( 'buy egg')

    addTodo()

    expect(todos.value).toEqual( [{"text": "things to do"}, { text: 'buy egg' }])
    expect(text.value).toEqual( '')
  })
})

describe('removeTodo', () => {
  it('should remove todo', () => {
    const { todos, removeTodo } = initialize()

    expect(todos.value).toEqual( [{"text": "things to do"}])

    removeTodo({"text": "things to do"})

    expect(todos.value).toEqual( [])
  })
})
