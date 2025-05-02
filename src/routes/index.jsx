import { Route, Routes } from 'react-router-dom';
import { Menu } from '../containers/Menu';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Menu />} />
		</Routes>
	);
}
