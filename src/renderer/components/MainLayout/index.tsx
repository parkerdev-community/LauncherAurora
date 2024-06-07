import { Outlet } from 'react-router-dom'
import { TopBar } from '../TopBar'

export const MainLayout = () => {
	return (
		<>
				<TopBar />
				<main>
						<Outlet />
				</main>
		</>
);
}