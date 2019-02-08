import * as express from 'express'
import * as next from 'next'
import { NRoutes } from './routes'

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = NRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express()
    server.get('*', handle)
    server.listen(port, (err: any) => {
      if (err) throw err
      console.log(`🚀 Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
