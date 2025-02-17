import { customAlphabet } from 'nanoid/non-secure'

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const generateId = (size: number = 21) => {
    return customAlphabet(alphabet, size);
}

// Nano ID
export const nanoId = generateId();

// If you want to use UUID(v4)
export { v4 as uuid } from 'uuid';
