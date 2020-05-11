// @ts-ignore
import { Controller, Get, Post, Body } from 'https://deno.land/x/alosaur/src/mod.ts';
import { TodosService } from '../services/todos.service.ts';

@Controller('')
export class IndexController {
  constructor(private todosService: TodosService) {}

  @Get('/')
  index() {
    return { message: 'hello deno!' };
  }

  @Get('/todos')
  allTodos() {
    return this.todosService.getTodos();
  }

  @Post('/todos/add')
  addTodo(@Body() body: any): any {
    const todo = this.todosService.addTodo(body.title, body.content);

    return { message: 'Todo added successfully', todo };
  }
}
