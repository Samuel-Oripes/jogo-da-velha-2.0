import { Route, Routes } from 'react-router-dom';
import { Jogo, Menu } from '../containers/index';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Menu />} />
			<Route path="/jogo" element={<Jogo />} />
		</Routes>
	);
}
