import { z } from 'zod'
import { t } from './builder.ts'

export const appRouter = t.router({
  hello: t.procedure
    // .input(
    //   z.object({
    //     text: z.string(),
    //   }),
    // )
    .query(({ input }) => {
      return {
        greeting: `hello`,
      };
    }),
})

export type AppRouter = typeof appRouter
