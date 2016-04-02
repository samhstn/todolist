const Hapi = require('hapi');
const Inert = require('inter');
const port = 8000;

const server = new Hapi.Server();

server.register(Inert, () => {
  server.route([{
      method: 'GET',
      path: '/bundle.js',
      handler: (request, reply) => {
        const path = Path.join(__dirname, '../production/bundle.js');
        reply.file(path);
      }
    },
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        const path = Path.join(__dirname, '../production/index.html');
        reply.file(path);
      }
    }])
});

server.connect({
  port: port
})

server.start(() => {
  console.log(`server running on port: ${server.info.uri}`);
})
