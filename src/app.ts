import { createServer } from 'http';
import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import { WssService } from './presentation/services/wss.service';
import { RoutesTickets } from './presentation/tickets/routes';


(async () => {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT,
  });

  const httpServer = createServer(server.app)
  
  WssService.iniWss({
    server: httpServer,
  })

  server.setRoutes( AppRoutes.routes )

  httpServer.listen(envs.PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${envs.PORT}`)
  })
}