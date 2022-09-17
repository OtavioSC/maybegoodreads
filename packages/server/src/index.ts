import Koa from "koa";

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'API Graphql'
})

app.listen(4001);

app.on('error', err => {
    console.error('server error', err)
})