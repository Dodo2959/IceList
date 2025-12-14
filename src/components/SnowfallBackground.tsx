import React, { useEffect } from 'react'

export const SnowfallBackground: React.FC = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div')
      const randomX = Math.random() * 100
      const randomDuration = 10 + Math.random() * 20
      const randomDelay = Math.random() * 2
      const randomSize = 4 + Math.random() * 6
      
      snowflake.style.position = 'fixed'
      snowflake.style.left = randomX + '%'
      snowflake.style.top = '-10px'
      snowflake.style.width = randomSize + 'px'
      snowflake.style.height = randomSize + 'px'
      snowflake.style.pointerEvents = 'none'
      snowflake.style.opacity = String(0.3 + Math.random() * 0.7)
      snowflake.style.zIndex = '0'
      snowflake.style.animation = `snowfall ${randomDuration}s linear ${randomDelay}s infinite`
      snowflake.style.background = 'radial-gradient(circle, rgba(14, 165, 233, 0.8) 0%, rgba(14, 165, 233, 0.3) 70%, transparent 100%)'
      snowflake.style.borderRadius = '50%'
      snowflake.style.filter = 'blur(0.5px)'
      
      document.body.appendChild(snowflake)
      
      setTimeout(() => {
        snowflake.remove()
      }, (randomDuration + randomDelay) * 1000)
    }

    const interval = setInterval(createSnowflake, 200)
    
    return () => clearInterval(interval)
  }, [])

  return null
}
