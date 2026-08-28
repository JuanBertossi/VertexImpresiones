import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from '@/features/views/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
