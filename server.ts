import { Server } from 'hapi'
import { configServer } from './src/server.config'

async function startup (host, port) {
  const server = new Server({ host, port })

  await configServer(server)
  await server.start()

  // tslint:disable-next-line no-console
  console.log(`Server running on ${server.info.host}:${server.info.port}`)
}

process.on('unhandledRejection', (err) => {
  // tslint:disable-next-line no-console
  console.log(err)

  process.exit(1)
})

startup('localhost', 3000)
