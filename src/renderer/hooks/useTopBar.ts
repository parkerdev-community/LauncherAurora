import { useSetRecoilState } from 'recoil'

import { topBarBackBtn, topBarUser, topBarTitle } from '../store/topBarAtom'

export function useTopBar() {
    const setTopbarBackBtnState = useSetRecoilState(topBarBackBtn);
    const setTopBarTitleState = useSetRecoilState(topBarTitle);
    const setTopBarUserState = useSetRecoilState(topBarUser);

    function showTopBarBackBtn() {
        setTopbarBackBtnState({ show: true });
    }

    function hideTopBarBackBtn() {
        setTopbarBackBtnState({ show: false });
    }

    function showTopBarTitle() {
        setTopBarTitleState((state) => ({ ...state, show: true }));
    }

    function hideTopBarTitle() {
        setTopBarTitleState((state) => ({ ...state, show: false }));
    }

    function showTopBarUser() {
        setTopBarUserState((state) => ({ ...state, show: true }));
    }

    function hideTopBarUser() {
        setTopBarUserState((state) => ({ ...state, show: false }));
    }

    function setTopBarUserText(username: string) {
        setTopBarUserText((state) => ({ ...state, username }));
    }

    return {
        showTopBarBackBtn,
        hideTopBarBackBtn,
        showTopBarTitle,
        hideTopBarTitle,
        showTopBarUser,
        hideTopBarUser,
        setTopBarUserText
    };
}
