// @ts-ignore
import { readJsonSync, writeJsonSync } from 'https://deno.land/std/fs/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { TodosService, Todo } from '../services/todos.service.ts';

const Service = new TodosService('tests/todos.json');

const placeholderTodo = { title: 'deno', content: 'land' };

Deno.test('properly creates new todo', () => {
  const todo = Service.addTodo(placeholderTodo.title, placeholderTodo.content);

  const todos = readJsonSync('tests/todos.json');

  assertEquals((todos as Todo[]).slice(-1)[0], todo);
});

Deno.test('properly reads all the todos', () => {
  const mockTodos = [{ ...placeholderTodo, date: Date.now(), id: 69 }];

  writeJsonSync('tests/todos.json', mockTodos);

  assertEquals(Service.getTodos(), mockTodos);
});
