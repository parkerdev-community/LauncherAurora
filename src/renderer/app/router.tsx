import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '../components';
import { LoginPage, ServerPanelPage, ServersPage } from '../pages';

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="/servers-list" element={<ServersPage />} />
                    <Route path="/server-panel" element={<ServerPanelPage />} />
                </Route>
            </Routes>
        </>
    );
};
