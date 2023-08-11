import { atom } from 'recoil';

export const counterState = atom({
    key: 'MAIN/COIUNTER',
    default: 0,
})