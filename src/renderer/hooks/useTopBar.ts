import { useSetRecoilState } from 'recoil';

import { topBarBackBtn, topBarTitle } from '../store/topBarAtom';
import { userAtom } from '../store/userAtom';

export function useTopBar() {
    const setTopbarBackBtnState = useSetRecoilState(topBarBackBtn);
    const setTopBarTitleState = useSetRecoilState(topBarTitle);
    const setTopBarrUserState = useSetRecoilState(userAtom);

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
        setTopBarrUserState((state) => ({ ...state, show: true }));
    }

    function hideTopBarUser() {
        setTopBarrUserState((state) => ({ ...state, show: false }));
    }
    return {
        showTopBarBackBtn,
        hideTopBarBackBtn,
        showTopBarTitle,
        hideTopBarTitle,
        showTopBarUser,
        hideTopBarUser,
    };
}
