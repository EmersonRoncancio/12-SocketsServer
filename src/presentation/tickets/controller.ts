import { Request, Response } from "express";


export class ControllerTickets {

    constructor(

    ) { }


    public GetTickets = async (req: Request, res: Response) => {

        res.json({mensaje: 'GetTickets'})
    }

    public GetTicketsLast = async (req: Request, res: Response) => {

        res.json({mensaje: 'GetTicketsLast'})
    }

    public PendingTickets = async (req: Request, res: Response) => {

        res.json({mensaje: 'PendingTickets'})
    }

    public CreateTickets = async (req: Request, res: Response) => {

        res.json({mensaje: 'CreateTickets'})
    }

    public DrawTickets = async (req: Request, res: Response) => {

        res.json({mensaje: 'DrawTickets'})
    }

    public TicketFinished = async (req: Request, res: Response) => {

        res.json({mensaje: 'TicketFinished'})
    }

    public WorkingOn = async (req: Request, res: Response) => {

        res.json({mensaje: 'WorkingOn'})
    }
}