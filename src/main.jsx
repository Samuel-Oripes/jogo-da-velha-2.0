import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes';
import GlobalStyles from './styles/globalStyles';
import { temas } from './styles/themes/temas';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={temas}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<GlobalStyles />
		</ThemeProvider>
	</StrictMode>,
);
