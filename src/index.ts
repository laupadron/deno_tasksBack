// import express from 'npm:express';
// import tasksRoutes from './routes/tasks.routes.ts';
// import './db.ts';

// const app = express();

// app.use(express.json());

// app.use(tasksRoutes)

// app.listen(3000, () =>{
//     console.log('server is running')
// })
import { Application,Router } from "@oak/oak/application";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello CFW!";
});

const posts = new Router()
  .get("/", (ctx) => {
    ctx.response.body = `Forum: ${ctx.params.forumId}`;
  })
  .get("/:postId", (ctx) => {
    ctx.response.body =
      `Forum: ${ctx.params.forumId}, Post: ${ctx.params.postId}`;
  });

export default { fetch: app.fetch };