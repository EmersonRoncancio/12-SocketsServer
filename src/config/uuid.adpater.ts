import { v4 as uuidv4 } from 'uuid';

export const UuidAdapter = {
    getUuid: (): string => uuidv4()
}