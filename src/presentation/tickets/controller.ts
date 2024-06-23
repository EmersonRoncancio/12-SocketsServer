import { Request, Response } from "express";
import { ServiceTickets } from "../services/tickets.service";


export class ControllerTickets {

    constructor(
        private readonly ServiceTickets: ServiceTickets
    ) { }


    public GetTickets = async (req: Request, res: Response) => {

        res.json(this.ServiceTickets.tickets)

    }

    public GetTicketsLast = async (req: Request, res: Response) => {

        res.json(this.ServiceTickets.lasTicketsNumber)
    }

    public PendingTickets = async (req: Request, res: Response) => {

        res.json(this.ServiceTickets.Pendingtickets)
    }

    public CreateTickets = async (req: Request, res: Response) => {

        res.status(201).json(this.ServiceTickets.createTicket())
    }

    public DrawTickets = async (req: Request, res: Response) => {

        const { desk } = req.params

        res.json(this.ServiceTickets.drawTicket(desk))
    }

    public TicketFinished = async (req: Request, res: Response) => {

        const { ticketId } = req.params

        res.json(this.ServiceTickets.onFinishedTicket(ticketId))
    }

    public WorkingOn = async (req: Request, res: Response) => {

        res.json(this.ServiceTickets.lastWorkingOnTickets)
    }
}