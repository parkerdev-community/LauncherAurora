import { atom } from 'recoil';

export const TilteBarBackBtn = atom({
    key: 'titlebar.backBtn',
    default: {
        show: false,
    },
});

export const TilteBarTitle = atom({
    key: 'titlebar.title',
    default: {
        show: true,
        text: 'AuroraLauncher v0.0.4',
    },
});

export const TilteBarUser = atom({
    key: 'titlebar.user',
    default: {
        show: false,
        username: 'Test',
    },
});
