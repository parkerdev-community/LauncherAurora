import { useSetRecoilState } from 'recoil';

import {
    TilteBarBackBtn,
    TilteBarTitle,
    TilteBarUser,
} from '../store/topBarAtom';

export function useTilteBar() {
    const setTilteBarBackBtnState = useSetRecoilState(TilteBarBackBtn);
    const setTilteBarTitleState = useSetRecoilState(TilteBarTitle);
    const setTilteBarUserState = useSetRecoilState(TilteBarUser);

    function showTilteBarBackBtn() {
        setTilteBarBackBtnState({ show: true });
    }

    function hideTilteBarBackBtn() {
        setTilteBarBackBtnState({ show: false });
    }

    function showTilteBarTitle() {
        setTilteBarTitleState((state) => ({ ...state, show: true }));
    }

    function hideTilteBarTitle() {
        setTilteBarTitleState((state) => ({ ...state, show: false }));
    }

    function showTilteBarUser() {
        setTilteBarUserState((state) => ({ ...state, show: true }));
    }

    function hideTilteBarUser() {
        setTilteBarUserState((state) => ({ ...state, show: false }));
    }

    function setTilteBarUserText(username: string) {
        setTilteBarUserText((state) => ({ ...state, username }));
    }

    return {
        showTilteBarBackBtn,
        hideTilteBarBackBtn,
        showTilteBarTitle,
        hideTilteBarTitle,
        showTilteBarUser,
        hideTilteBarUser,
        setTilteBarUserText,
    };
}
