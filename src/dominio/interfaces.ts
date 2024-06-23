

export interface ticket {
    id: string,
    number: number,
    createAt: Date,
    handleAtDesk?: string,
    handleAt?: Date,
    done: boolean,
}