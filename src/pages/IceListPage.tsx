import React, { useState } from 'react'

interface Level {
  id: number
  name: string
  difficulty: number
  creator: string
  completedBy: string
  date: string
  points: number
}

export const IceListPage: React.FC = () => {
  const [levels] = useState<Level[]>([
    {
      id: 1,
      name: "Stereo Madness",
      difficulty: 10,
      creator: "RobTop",
      completedBy: "Member 1",
      date: "2024-12-01",
      points: 5
    },
    {
      id: 2,
      name: "Back on Track",
      difficulty: 20,
      creator: "RobTop",
      completedBy: "Member 2",
      date: "2024-12-02",
      points: 10
    },
    {
      id: 3,
      name: "Polargeist",
      difficulty: 41,
      creator: "RobTop",
      completedBy: "Member 3",
      date: "2024-12-03",
      points: 25
    },
  ])

  const [sortBy, setSortBy] = useState<'difficulty' | 'date'>('difficulty')

  const sortedLevels = [...levels].sort((a, b) => {
    if (sortBy === 'difficulty') return b.difficulty - a.difficulty
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="min-h-screen py-8 px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-display mb-2">
          <span className="gradient-text">ICE List</span>
        </h1>
        <p className="text-ice-200/70">Tous les niveaux complétés par l'équipe</p>
      </div>

      {/* Filters */}
      <div className="glass p-4 rounded-xl mb-6 flex justify-between items-center max-w-6xl">
        <div className="text-ice-300">
          Total: <span className="font-bold text-ice-400">{levels.length} niveaux</span>
        </div>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'difficulty' | 'date')}
          className="bg-glacial-card border border-glacial-border rounded-lg px-4 py-2 text-ice-300 cursor-pointer"
        >
          <option value="difficulty">Trier par difficulté</option>
          <option value="date">Trier par date</option>
        </select>
      </div>

      {/* Levels List */}
      <div className="space-y-4 max-w-6xl">
        {sortedLevels.map((level) => (
          <div 
            key={level.id} 
            className="glass p-6 rounded-xl hover-glow transition cursor-pointer hover:bg-glacial-card/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-ice-300">{level.name}</h3>
                  <span className="px-3 py-1 bg-ice-500/20 text-ice-300 rounded-full text-sm font-semibold">
                    {level.difficulty}%
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold">
                    +{level.points} pts
                  </span>
                </div>
                <div className="flex gap-6 text-ice-200/70 text-sm">
                  <span>Par: <span className="text-ice-300">{level.creator}</span></span>
                  <span>Complété par: <span className="text-ice-300">{level.completedBy}</span></span>
                  <span>Date: <span className="text-ice-300">{level.date}</span></span>
                </div>
              </div>
              <div className="text-3xl">❄️</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
