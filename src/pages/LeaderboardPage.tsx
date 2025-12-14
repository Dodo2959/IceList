import React, { useState } from 'react'

interface Player {
  rank: number
  name: string
  points: number
  completed: number
  avgDifficulty: number
  badge?: string
}

export const LeaderboardPage: React.FC = () => {
  const [players] = useState<Player[]>([
    {
      rank: 1,
      name: "FrostyMaster",
      points: 520,
      completed: 15,
      avgDifficulty: 40,
      badge: "👑"
    },
    {
      rank: 2,
      name: "IceSkater",
      points: 480,
      completed: 14,
      avgDifficulty: 38,
      badge: "⭐"
    },
    {
      rank: 3,
      name: "SnowDream",
      points: 420,
      completed: 12,
      avgDifficulty: 35,
    },
    {
      rank: 4,
      name: "FrozenWind",
      points: 350,
      completed: 10,
      avgDifficulty: 32,
    },
    {
      rank: 5,
      name: "Glacial",
      points: 280,
      completed: 8,
      avgDifficulty: 28,
    },
  ])

  return (
    <div className="min-h-screen py-8 px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-display mb-2">
          <span className="gradient-text">Leaderboard</span>
        </h1>
        <p className="text-ice-200/70">Classement de l'équipe ICE</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-6 mb-12 max-w-4xl">
        {players.slice(0, 3).map((player, idx) => (
          <div 
            key={player.rank}
            className={`glass p-6 rounded-xl text-center ${
              idx === 0 ? 'ring-2 ring-yellow-400' : ''
            }`}
          >
            <div className="text-5xl mb-3">{[2, 1, 3][idx] === 1 ? '🥇' : [2, 1, 3][idx] === 2 ? '🥈' : '🥉'}</div>
            <h3 className="text-xl font-bold text-ice-300 mb-2">{player.name}</h3>
            <div className="text-3xl font-bold gradient-text mb-4">{player.points}</div>
            <div className="space-y-1 text-sm text-ice-200/70">
              <p>Complétés: <span className="text-ice-300 font-bold">{player.completed}</span></p>
              <p>Difficulté moy: <span className="text-ice-300 font-bold">{player.avgDifficulty}%</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Leaderboard Table */}
      <div className="glass rounded-xl overflow-hidden max-w-6xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-glacial-border bg-ice-500/5">
                <th className="px-6 py-4 text-left text-ice-300 font-semibold">Rang</th>
                <th className="px-6 py-4 text-left text-ice-300 font-semibold">Joueur</th>
                <th className="px-6 py-4 text-center text-ice-300 font-semibold">Points</th>
                <th className="px-6 py-4 text-center text-ice-300 font-semibold">Complétés</th>
                <th className="px-6 py-4 text-center text-ice-300 font-semibold">Diff. Moy</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr 
                  key={player.rank}
                  className="border-b border-glacial-border hover:bg-ice-500/5 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{player.rank === 1 ? '👑' : player.rank === 2 ? '⭐' : '❄️'}</span>
                      <span className="text-lg font-bold text-ice-400">#{player.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-ice-200">{player.name}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-ice-300">{player.points}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-ice-300">{player.completed}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-ice-300">{player.avgDifficulty}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
