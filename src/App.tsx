import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { RightSidebar } from './components/RightSidebar'
import { SnowfallBackground } from './components/SnowfallBackground'
import { HomePage } from './pages/HomePage'
import { IceListPage } from './pages/IceListPage'
import { LeaderboardPage } from './pages/LeaderboardPage'

function App() {
  const sidebarStats = [
    { label: 'Niveaux Complétés', value: 15, icon: '❄️' },
    { label: 'Points Totaux', value: 520, icon: '⭐' },
    { label: 'Membres Actifs', value: 5, icon: '👥' },
  ]

  return (
    <div className="flex">
      <SnowfallBackground />
      
      {/* Left Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="ml-64 mr-64 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/icelist" element={<IceListPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </main>

      {/* Right Sidebar */}
      <RightSidebar stats={sidebarStats} />
    </div>
  )
}

export default App
