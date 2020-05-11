// @ts-ignore
import { readJsonSync, writeJsonSync, existsSync } from 'https://deno.land/std/fs/mod.ts';
// @ts-ignore
import { Injectable } from 'https://deno.land/x/alosaur/src/mod.ts';
const { cwd } = Deno;

export interface Todo {
  title: string;
  content: string;
  created: Date;
  id: number;
}

@Injectable()
export class TodosService {
  getTodos(): Todo[] {
    let todos: Todo[] = [];

    if (existsSync('todos.json')) {
      todos = readJsonSync('todos.json') as Todo[];
    }

    return todos;
  }

  addTodo(title: string, content: string): Todo {
    let todos: Todo[] = [];

    if (existsSync('todos.json')) {
      todos = readJsonSync('todos.json') as Todo[];
    }

    const todo: Todo = {
      title: title,
      content: content,
      created: new Date(),
      id: 10000000 + Math.floor(Math.random() * 90000000),
    };

    todos.push(todo);

    writeJsonSync('todos.json', todos);

    return todo;
  }
}
