import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation: React.FC = () => {
  return (
    <div className="glass fixed left-0 top-0 h-screen w-64 border-r border-glacial-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-glacial-border">
        <h1 className="gradient-text text-3xl font-bold font-display">ICE</h1>
        <p className="text-ice-300/70 text-sm mt-1">Geometry Dash</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-6 space-y-4">
        <Link to="/" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover-glow text-ice-300 hover:bg-ice-500/10 transition">
          <span className="text-xl">🏠</span>
          <span>Accueil</span>
        </Link>
        <Link to="/icelist" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover-glow text-ice-300 hover:bg-ice-500/10 transition">
          <span className="text-xl">❄️</span>
          <span>ICE List</span>
        </Link>
        <Link to="/leaderboard" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover-glow text-ice-300 hover:bg-ice-500/10 transition">
          <span className="text-xl">🏆</span>
          <span>Leaderboard</span>
        </Link>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-glacial-border text-center text-ice-400/50 text-sm">
        <p>© 2025 ICE Team</p>
      </div>
    </div>
  )
}
