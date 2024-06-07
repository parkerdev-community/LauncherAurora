import { Outlet } from 'react-router-dom';
TilteBar;
export const MainLayout = () => {
    return (
        <>
            <TilteBar />
            TilteBar{' '}
            <main>
                <Outlet />
            </main>
        </>
    );
};
