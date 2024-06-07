import './styles/index.scss';

import { HashRouter } from 'react-router-dom';

import { ErrorBoundary } from '../components';
import { Router } from './router';

export const App = () => {
    return (
        <HashRouter basename="/">
            <ErrorBoundary>
                <Router />
            </ErrorBoundary>
        </HashRouter>
    );
};
