import { atom } from 'recoil';

export const userAtom = atom({
    key: 'user',
    default: {
        show: false,
        user: JSON.parse(localStorage.getItem('userData') || 'null')
    }
});