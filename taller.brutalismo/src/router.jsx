import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Codigo from './pages/Codigo'
import Obras from './pages/Obras'
import Fases from './pages/Fases'
import Datos from './pages/Datos'
import Brief from './pages/Brief'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'codigo', element: <Codigo /> },
      { path: 'obras', element: <Obras /> },
      { path: 'fases', element: <Fases /> },
      { path: 'datos', element: <Datos /> },
      { path: 'brief', element: <Brief /> },
    ],
  },
])
