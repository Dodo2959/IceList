import React from 'react'

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 px-8">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold font-display mb-4">
            <span className="gradient-text">Bienvenue</span>
            <br />
            dans la <span className="gradient-text">ICE TEAM</span>
          </h1>
          <p className="text-xl text-ice-200/70 mb-8 max-w-2xl">
            Découvrez notre collection de niveaux complétés et rejoignez nos défis Geometry Dash.
            Une ambiance glaciale pour des accomplissements épiques.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-ice-400 to-ice-500 text-white rounded-lg font-semibold hover-glow transition">
              Explorer ICE List
            </button>
            <button className="px-8 py-3 glass hover-glow transition">
              Voir Leaderboard
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-8">
        <div className="grid grid-cols-3 gap-6 max-w-4xl">
          <div className="glass p-6 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <p className="text-ice-200/70">Niveaux Complétés</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <p className="text-ice-200/70">Membres Actifs</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <p className="text-ice-200/70">Points d'équipe</p>
          </div>
        </div>
      </div>

      {/* Featured Levels */}
      <div className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-8">
          <span className="gradient-text">Niveaux en Vedette</span>
        </h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass p-6 rounded-xl hover-glow transition cursor-pointer">
              <div className="h-32 bg-gradient-to-br from-ice-500/20 to-ice-400/10 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-ice-300">Niveau #{i}</h3>
              <p className="text-ice-200/70 text-sm">Difficulté: {i * 10}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
