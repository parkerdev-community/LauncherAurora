import { Route, Routes } from 'react-router-dom';

import Layout from '../runtime/components/Layout';

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </>
    );
};
