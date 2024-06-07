import './app/styles/index.scss';

import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { App } from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
);
