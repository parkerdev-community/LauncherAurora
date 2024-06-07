import { atom } from 'recoil';

export const topBarBackBtn = atom({
    key: 'topbar.backBtn',
    default: {
        show: false,
    },
});

export const topBarTitle = atom({
    key: 'topbar.title',
    default: {
        show: true,
        text: 'AuroraLauncher v0.0.4',
    },
});

export const topBarUser = atom({
    key: 'topbar.user',
    default: {
        show: false,
        username: 'Test',
    },
});
