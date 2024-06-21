import { Router } from "express";
import { ControllerTickets } from "./controller";


export class RoutesTickets {

    static get router(): Router {

        const router = Router()

        const controller = new ControllerTickets()

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