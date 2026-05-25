import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import NosotrosPage from './pages/NosotrosPage'
import ResultadosPage from './pages/ResultadosPage'
import ContactoPage from './pages/ContactoPage'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="resultados" element={<ResultadosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
