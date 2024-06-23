import { UuidAdapter } from "../../config/uuid.adpater";
import { ticket } from "../../dominio/interfaces";


export class ServiceTickets {

    public readonly tickets: ticket[] = [
        { id: UuidAdapter.getUuid(), number: 1, createAt: new Date(), done: false },
        { id: UuidAdapter.getUuid(), number: 2, createAt: new Date(), done: false },
        { id: UuidAdapter.getUuid(), number: 3, createAt: new Date(), done: false },
        { id: UuidAdapter.getUuid(), number: 4, createAt: new Date(), done: false },
        { id: UuidAdapter.getUuid(), number: 5, createAt: new Date(), done: false },
    ];

    private workingOnTickets: ticket[] = []

    public get lastWorkingOnTickets(): ticket[]{
        return this.workingOnTickets.splice(0,4)
    }

    public get Pendingtickets(): ticket[] {
        return this.tickets.filter(ticket => !ticket.handleAt)
    }

    public get lasTicketsNumber(): number {
        return this.tickets.length > 0 ? this.tickets.at(-1)!?.number : 0
    }

    public createTicket() {

        this.tickets.push({
            id: UuidAdapter.getUuid(),
            number: this.lasTicketsNumber + 1,
            createAt: new Date(),
            handleAt: undefined,
            handleAtDesk: undefined,
            done: false
        })

        return this.tickets.at(-1)
    }

    public drawTicket(desk: string){

        const ticket = this.tickets.find( t => !t.handleAtDesk)

        if(!ticket ) return {status: 'Error', mensaje: 'No ahi tickets pendientes'}

        ticket.handleAtDesk = desk
        ticket.handleAt = new Date()

        this.workingOnTickets.unshift({...ticket})

        return {status: 'ok', ticket}
    }

    public onFinishedTicket(id: string){

        const ticket = this.tickets.find( t => t.id === id)
        if(!ticket) return {status: 'Error', mensaje: 'Ticket no encontradi'}

        this.tickets.map((t)=>{
            if(t.id === id) t.done = true

            return t
        })

        const data = this.workingOnTickets.filter( t => t.id !== id)
        console.log(data)
        this.workingOnTickets = [...data]
        

        return {status: 'ok'}
    }
}