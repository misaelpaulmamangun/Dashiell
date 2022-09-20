document.addEventListener('alpine:init', () => {
  Alpine.data('todo', () => ({
    todos: [
      {
        title: 'Learn Alpine',
        completed: false,
      },
      {
        title: 'Build a todo app',
        completed: false,
      },
    ],
    newTodo: '',
    addTodo() {
      if (!this.newTodo) return

      this.todos.push({
        title: this.newTodo,
        completed: false,
      })
      this.newTodo = ''
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
    },
    removeTodo(index) {
      this.todos = this.todos.filter((_, i) => i !== index)
    },
  }))
})
