import { NextApiHandler } from 'next'
import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '../../server/router.ts'

const handler: NextApiHandler = createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})

export default handler
