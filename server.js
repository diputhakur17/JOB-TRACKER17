import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('src/jobs.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(8000, () => {
    console.log('JSON Server is running on port 8000 🚀')
})
