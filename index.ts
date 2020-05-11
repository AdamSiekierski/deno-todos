// @ts-ignore
import { Area, App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { IndexController } from './controllers/IndexController.ts';

// Declare module
@Area({
  controllers: [IndexController],
})
export class HomeArea {}

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

app.listen();
