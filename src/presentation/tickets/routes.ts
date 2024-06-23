import { Router } from "express";
import { ControllerTickets } from "./controller";
import { ServiceTickets } from "../services/tickets.service";


export class RoutesTickets {

    static get router(): Router {

        const router = Router()

        const service = new ServiceTickets()
        const controller = new ControllerTickets(service)

        router
            .get('/', controller.GetTickets)
            .get('/last', controller.GetTicketsLast)
            .get('/pending', controller.PendingTickets)
            .post('/', controller.CreateTickets)
            .get('/draw/:desk', controller.DrawTickets)
            .put('/done/:ticketId', controller.TicketFinished)
            .get('/woking-on', controller.WorkingOn)

        return router
    }

}