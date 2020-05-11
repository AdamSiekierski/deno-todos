// @ts-ignore
import { Controller, Get } from 'https://deno.land/x/alosaur/src/mod.ts';

@Controller('')
export class IndexController {
  @Get('/')
  json() {
    return { message: 'hello deno!' };
  }
}
