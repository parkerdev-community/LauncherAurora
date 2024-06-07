import { atom } from 'recoil';

export const topBarBackBtn = atom({
    key: 'titlebar.backBtn',
    default: {
        show: false,
    },
});

export const topBarTitle = atom({
    key: 'titlebar.title',
    default: {
        show: true,
        text: 'AuroraLauncher v0.0.4',
    },
});