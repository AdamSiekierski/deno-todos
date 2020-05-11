// @ts-ignore
import { Area, App } from "https://deno.land/x/alosaur/src/mod.ts";
import { IndexController } from "./controllers/index.controller.ts";

@Area({
  controllers: [IndexController],
})
export class HomeArea {}

const app = new App({
  areas: [HomeArea],
});

app.listen();
