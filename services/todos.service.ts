// @ts-ignore
import { readJsonSync, writeJsonSync, existsSync } from 'https://deno.land/std/fs/mod.ts';
// @ts-ignore
import { Injectable } from 'https://deno.land/x/alosaur/src/mod.ts';
const { cwd } = Deno;

export interface Todo {
  title: string;
  content: string;
  created: number;
  id: number;
}

@Injectable()
export class TodosService {
  constructor(private todosFile: string = 'todos.json') {}

  getTodos(): Todo[] {
    let todos: Todo[] = [];

    if (existsSync(this.todosFile)) {
      todos = readJsonSync(this.todosFile) as Todo[];
    }

    return todos;
  }

  addTodo(title: string, content: string): Todo {
    let todos: Todo[] = [];

    if (existsSync(this.todosFile)) {
      todos = readJsonSync(this.todosFile) as Todo[];
    }

    const todo: Todo = {
      title: title,
      content: content,
      created: Date.now(),
      id: 10000000 + Math.floor(Math.random() * 90000000),
    };

    todos.push(todo);

    writeJsonSync(this.todosFile, todos);

    return todo;
  }
}
