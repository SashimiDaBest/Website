// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom'
// import ApplyPage from './pages/ApplyPage'
// import LandingPage from './pages/LandingPage'
// import TeamsPage from './pages/TeamsPage'
// import ExpandedTeamsPage from './pages/TeamsPage/ExpandedTeams'

// import Position from './component/ApplyPage/Position'
import ScrollToTop from './components/ScrollToTop'
// import CulturePage from './component/CulturePage'
// import ProjectsPage from './component/ProjectsPage'

function AppRoutes() {
  const routes = [
    // { path: '/', element: <LandingPage /> },
    // {
    //   path: '/apply',
    //   element: <ApplyPage />,
    //   children: [{ path: ':team', element: <ApplyPage /> }]
    // },
    // { path: '/positions/:id', element: <Position /> },
    // { path: '/positions/:categoryType/:index', element: <Position /> },
    // { path: '/about', element: <Navigate to='/' /> },
    // { path: '/culture', element: <CulturePage /> },
    // { path: '/teams', element: <TeamsPage /> },
    // { path: '/projects', element: <ProjectsPage /> },
    // { path: '/teams-expanded/*', element: <ExpandedTeamsPage /> },
    // { path: '*', element: <LandingPage /> }
  ]

  return useRoutes(routes)
}

export default function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </div>
  )
}