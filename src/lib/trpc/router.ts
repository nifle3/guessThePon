import { t } from "$lib/trpc/t"; 

export const router = t.router({
    greeting: t.procedure.query(async () => {
        return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
      })
})

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
