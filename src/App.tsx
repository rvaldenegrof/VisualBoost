import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ContactoPage } from './pages/ContactoPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { PlanesPage } from './pages/PlanesPage';
import { PrivacidadPage } from './pages/PrivacidadPage';
import { QuienesSomosPage } from './pages/QuienesSomosPage';
import { ServiciosPage } from './pages/ServiciosPage';
import { TrabajosPage } from './pages/TrabajosPage';

function SiteLayout() {
	return (
		<>
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface-elevated focus:px-4 focus:py-2 focus:shadow-soft focus:ring-2 focus:ring-accent"
			>
				Saltar al contenido
			</a>
			<Header />
			<main id="main" className="flex-1" tabIndex={-1}>
				<Outlet />
			</main>
			<Footer />
			<WhatsAppFloat />
		</>
	);
}

export default function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<Routes>
				<Route element={<SiteLayout />}>
					<Route index element={<HomePage />} />
					<Route path="quienes-somos" element={<QuienesSomosPage />} />
					<Route path="servicios" element={<ServiciosPage />} />
					<Route path="trabajos" element={<TrabajosPage />} />
					<Route path="planes" element={<PlanesPage />} />
					<Route path="faq" element={<FaqPage />} />
					<Route path="contacto" element={<ContactoPage />} />
					<Route path="privacidad" element={<PrivacidadPage />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	);
}
