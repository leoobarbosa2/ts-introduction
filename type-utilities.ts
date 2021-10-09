type Todo = {
  title: string;
  description: string;
  completed: boolean;  
}

const todo: Readonly<Todo> = {
    title: 'Assistir B99',
    description: 'Em inglês!',
    completed: false
}

console.log(todo)
// console.log(todo)
// todo.completed = true;

function updateTodo(todo: Todo, fieldToUpdate: Partial<Todo>) {
    return {
        ...todo,
        ...fieldToUpdate
    }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2)


// Pick

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: 'Assistir Modern Family',
    completed: false
}

// Omit

type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: 'Assistir Modern Family',
    completed: false
}
