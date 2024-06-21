import { Router } from 'express';
import { RoutesTickets } from './tickets/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/tickets', RoutesTickets.router );



    return router;
  }


}

