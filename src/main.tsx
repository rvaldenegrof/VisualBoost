import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './styles/global.css';

function basename(): string | undefined {
	const b = import.meta.env.BASE_URL;
	if (b === '/') return undefined;
	return b.replace(/\/$/, '');
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<BrowserRouter basename={basename()}>
				<App />
			</BrowserRouter>
		</HelmetProvider>
	</StrictMode>,
);
