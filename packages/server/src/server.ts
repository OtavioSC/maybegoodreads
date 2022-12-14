import {
    getGraphQLParameters, 
    processRequest, 
    renderGraphiQL, 
    shouldRenderGraphiQL, 
    sendResult
} from "graphql-helix";

import { schema } from "./graphql/schema";

import Koa from "koa";
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

const app = new Koa();

app.use(bodyParser())
app.use(cors())

export default app.use(async (ctx) => {

    const request = {
        body: ctx.request.body,
        headers: ctx.request.headers,
        method: ctx.request.method,
        query: ctx.request.query,
      };

    if (shouldRenderGraphiQL(request)) {
        ctx.body = renderGraphiQL({});
      } else {
        const { operationName, query, variables } = getGraphQLParameters(request);

        const result = await processRequest({
          operationName,
          query,
          variables,
          request,
          schema,
        });
    
        sendResult(result, ctx.res);
    }
})