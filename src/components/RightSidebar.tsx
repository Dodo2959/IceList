import React from 'react'

interface SidebarStat {
  label: string
  value: string | number
  icon: string
}

interface RightSidebarProps {
  stats: SidebarStat[]
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ stats }) => {
  return (
    <div className="glass fixed right-0 top-0 h-screen w-64 border-l border-glacial-border overflow-y-auto p-6">
      <h2 className="text-xl font-bold text-ice-300 mb-6">Statistiques</h2>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="glass-sm p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-ice-200/70 text-sm">{stat.label}</p>
                  <p className="text-ice-300 font-bold text-lg">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Section */}
      <div className="mt-8 pt-6 border-t border-glacial-border">
        <h3 className="text-sm font-semibold text-ice-300 mb-3">Prochains Défis</h3>
        <div className="glass-sm p-3 rounded-lg text-sm text-ice-200/70">
          <p>Aucun défi programmé</p>
        </div>
      </div>
    </div>
  )
}
