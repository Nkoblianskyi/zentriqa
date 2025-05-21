"use client"

import { useEffect, useState } from "react"

export default function AboutGame() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Rescue Hero</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Rescue Hero in the Canadian Rockies</h3>
            <p className="mb-4 text-gray-700">
              Rescue Hero is a social game for entertainment. No purchases, no winnings, no monetary value. Explore the
              Canadian Rockies, save hikers, and enjoy the adventure.
            </p>
            <p className="mb-4 text-gray-700">
              Navigate through challenging mountain terrain, operate rescue equipment, and help those in need. Earn
              points by completing successful rescues and mastering mountain navigation.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Game Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Beautiful Canadian Rockies scenery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Engaging rescue missions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Fun point system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Compete with friends on the leaderboard</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-blue-50 p-2">
              <MountainSceneAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-blue-50 p-2">
              <HelicopterAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-blue-50 p-2">
              <RescueWorkerAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-blue-50 p-2">
              <WildlifeAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MountainSceneAnimation() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#dbeafe" />

      {/* Sun */}
      <circle cx="50" cy="40" r="20" fill="#fcd34d" className="animate-pulse" />

      {/* Clouds */}
      <g className="cloud" style={{ animation: "float 30s infinite linear" }}>
        <ellipse cx="80" cy="30" rx="20" ry="10" fill="white" />
        <ellipse cx="70" cy="25" rx="15" ry="10" fill="white" />
        <ellipse cx="90" cy="25" rx="15" ry="12" fill="white" />
      </g>

      <g className="cloud" style={{ animation: "float 20s infinite linear", animationDelay: "-10s" }}>
        <ellipse cx="200" cy="50" rx="25" ry="12" fill="white" />
        <ellipse cx="190" cy="45" rx="15" ry="10" fill="white" />
        <ellipse cx="210" cy="40" rx="20" ry="15" fill="white" />
      </g>

      {/* Far Mountains */}
      <path d="M0,100 L50,70 L100,90 L150,60 L200,80 L250,50 L300,70 L300,200 L0,200 Z" fill="#93c5fd" />

      {/* Middle Mountains */}
      <path d="M0,120 L50,80 L100,110 L150,70 L200,100 L250,60 L300,90 L300,200 L0,200 Z" fill="#60a5fa" />

      {/* Near Mountains with Snow */}
      <path d="M0,150 L50,100 L100,130 L150,80 L200,120 L250,90 L300,110 L300,200 L0,200 Z" fill="#3b82f6" />

      {/* Snow Caps */}
      <path d="M50,100 L60,95 L70,98 L80,93 L90,98 L100,130 L90,125 L80,128 L70,123 L60,128 L50,100 Z" fill="white" />
      <path
        d="M150,80 L160,75 L170,78 L180,73 L190,78 L200,120 L190,115 L180,118 L170,113 L160,118 L150,80 Z"
        fill="white"
      />
      <path
        d="M250,90 L260,85 L270,88 L280,83 L290,88 L300,110 L290,105 L280,108 L270,103 L260,108 L250,90 Z"
        fill="white"
      />

      {/* Trees */}
      <g className="tree" transform="translate(30, 160) scale(0.5)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(70, 170) scale(0.4)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(230, 160) scale(0.5)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(270, 170) scale(0.4)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateX(-30px); }
          50% { transform: translateX(30px); }
          100% { transform: translateX(-30px); }
        }
        .cloud {
          animation: float 30s infinite ease-in-out;
        }
      `}</style>
    </svg>
  )
}

function HelicopterAnimation() {
  const [rotorAngle, setRotorAngle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotorAngle((prev) => (prev + 30) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#dbeafe" />

      {/* Mountains in background */}
      <path
        d="M0,150 L50,100 L100,130 L150,80 L200,120 L250,90 L300,110 L300,200 L0,200 Z"
        fill="#60a5fa"
        opacity="0.5"
      />

      {/* Helicopter */}
      <g transform="translate(150, 100)">
        {/* Helicopter Body */}
        <rect x="-40" y="-10" width="80" height="25" rx="5" fill="#dc2626" />
        <rect x="-30" y="-20" width="60" height="10" rx="3" fill="#dc2626" />
        <rect x="-25" y="15" width="50" height="10" rx="3" fill="#dc2626" />
        <circle cx="0" cy="-30" r="10" fill="#dc2626" />

        {/* Main Rotor */}
        <g transform={`rotate(${rotorAngle})`}>
          <line x1="-60" y1="-30" x2="60" y2="-30" stroke="#0f172a" strokeWidth="3" />
          <line x1="-60" y1="-30" x2="-50" y2="-40" stroke="#0f172a" strokeWidth="2" />
          <line x1="60" y1="-30" x2="50" y2="-40" stroke="#0f172a" strokeWidth="2" />
        </g>

        {/* Tail */}
        <rect x="-5" y="25" width="10" height="20" fill="#dc2626" />

        {/* Tail Rotor */}
        <g transform={`translate(0, 45) rotate(${rotorAngle * 2})`}>
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#0f172a" strokeWidth="2" />
        </g>

        {/* Windows */}
        <circle cx="-20" cy="0" r="5" fill="#f8fafc" />
        <circle cx="20" cy="0" r="5" fill="#f8fafc" />

        {/* Landing Skids */}
        <line x1="-30" y1="15" x2="-30" y2="25" stroke="#0f172a" strokeWidth="2" />
        <line x1="30" y1="15" x2="30" y2="25" stroke="#0f172a" strokeWidth="2" />
        <line x1="-40" y1="25" x2="-20" y2="25" stroke="#0f172a" strokeWidth="2" />
        <line x1="40" y1="25" x2="20" y2="25" stroke="#0f172a" strokeWidth="2" />
      </g>

      {/* Clouds */}
      <g className="cloud" style={{ animation: "float 20s infinite linear" }}>
        <ellipse cx="50" cy="40" rx="20" ry="10" fill="white" />
        <ellipse cx="40" cy="35" rx="15" ry="10" fill="white" />
        <ellipse cx="60" cy="35" rx="15" ry="12" fill="white" />
      </g>

      <g className="cloud" style={{ animation: "float 25s infinite linear", animationDelay: "-12s" }}>
        <ellipse cx="250" cy="60" rx="25" ry="12" fill="white" />
        <ellipse cx="240" cy="55" rx="15" ry="10" fill="white" />
        <ellipse cx="260" cy="50" rx="20" ry="15" fill="white" />
      </g>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateX(-30px); }
          50% { transform: translateX(30px); }
          100% { transform: translateX(-30px); }
        }
        .cloud {
          animation: float 30s infinite ease-in-out;
        }
      `}</style>
    </svg>
  )
}

function RescueWorkerAnimation() {
  const [armAngle, setArmAngle] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setArmAngle((prev) => {
        const newAngle = prev + 2 * direction
        if (newAngle > 20 || newAngle < -20) {
          setDirection((d) => -d)
        }
        return newAngle
      })
    }, 50)
    return () => clearInterval(interval)
  }, [direction])

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="300" height="200" fill="#dbeafe" />

      {/* Mountain Slope */}
      <path d="M0,150 L300,100 L300,200 L0,200 Z" fill="#93c5fd" />
      <path d="M0,170 L300,130 L300,200 L0,200 Z" fill="#60a5fa" />
      <path d="M0,190 L300,160 L300,200 L0,200 Z" fill="#3b82f6" />

      {/* Snow */}
      <path d="M0,200 L300,200 L300,180 L0,190 Z" fill="white" opacity="0.7" />

      {/* Rescue Worker */}
      <g transform="translate(150, 130)">
        {/* Body */}
        <rect x="-15" y="0" width="30" height="45" rx="8" fill="#dc2626" />

        {/* Head */}
        <circle cx="0" cy="-15" r="12" fill="#fed7aa" />
        <path d="M-6,-18 C-6,-14 6,-14 6,-18" stroke="#0f172a" strokeWidth="1" fill="none" />
        <circle cx="-4" cy="-18" r="1.5" fill="#0f172a" />
        <circle cx="4" cy="-18" r="1.5" fill="#0f172a" />

        {/* Helmet */}
        <path d="M-12,-25 C-12,-35 12,-35 12,-25" stroke="#dc2626" strokeWidth="4" fill="#dc2626" />
        <rect x="-12" y="-28" width="24" height="8" rx="4" fill="#dc2626" />

        {/* Arms */}
        <g transform={`rotate(${armAngle})`}>
          <rect x="-30" y="0" width="15" height="8" rx="4" fill="#dc2626" transform="rotate(-20 -30 0)" />
          <circle cx="-35" cy="-3" r="4" fill="#fed7aa" />
        </g>

        <g transform={`rotate(${-armAngle})`}>
          <rect x="15" y="0" width="15" height="8" rx="4" fill="#dc2626" transform="rotate(20 15 0)" />
          <circle cx="35" cy="-3" r="4" fill="#fed7aa" />
        </g>

        {/* Legs */}
        <rect x="-15" y="45" width="12" height="20" rx="4" fill="#1e3a8a" />
        <rect x="3" y="45" width="12" height="20" rx="4" fill="#1e3a8a" />

        {/* Boots */}
        <rect x="-18" y="65" width="15" height="8" rx="2" fill="#0f172a" />
        <rect x="3" y="65" width="15" height="8" rx="2" fill="#0f172a" />

        {/* Rescue Equipment */}
        <rect x="-8" y="15" width="16" height="25" rx="2" fill="#f59e0b" />
        <rect x="-5" y="20" width="10" height="3" rx="1" fill="#0f172a" />
        <rect x="-5" y="28" width="10" height="3" rx="1" fill="#0f172a" />
      </g>

      {/* Rope */}
      <path d="M150,80 C180,90 200,100 220,120" stroke="#f8fafc" strokeWidth="2" strokeDasharray="5,3" fill="none" />

      {/* Snow Particles */}
      <circle cx="50" cy="50" r="2" fill="white" className="animate-pulse" />
      <circle cx="100" cy="30" r="1.5" fill="white" className="animate-pulse" />
      <circle cx="200" cy="40" r="2" fill="white" className="animate-pulse" />
      <circle cx="250" cy="70" r="1.5" fill="white" className="animate-pulse" />
    </svg>
  )
}

function WildlifeAnimation() {
  const [position, setPosition] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev + 1 * direction
        if (newPosition > 30 || newPosition < -30) {
          setDirection((d) => -d)
        }
        return newPosition
      })
    }, 100)
    return () => clearInterval(interval)
  }, [direction])

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background - Forest */}
      <rect x="0" y="0" width="300" height="200" fill="#dbeafe" />

      {/* Ground */}
      <rect x="0" y="150" width="300" height="50" fill="#15803d" />
      <rect x="0" y="150" width="300" height="10" fill="#16a34a" />

      {/* Trees in background */}
      <g transform="translate(30, 150) scale(0.6)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g transform="translate(80, 150) scale(0.7)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g transform="translate(220, 150) scale(0.6)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g transform="translate(270, 150) scale(0.7)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#059669" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#059669" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#059669" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      {/* Moose */}
      <g transform={`translate(${150 + position}, 130)`}>
        {/* Body */}
        <ellipse cx="0" cy="0" rx="40" ry="20" fill="#78350f" />

        {/* Neck */}
        <path d="M-20,-5 C-25,-20 -15,-40 0,-40" stroke="#78350f" strokeWidth="12" fill="none" />

        {/* Head */}
        <ellipse cx="0" cy="-45" rx="12" ry="8" fill="#78350f" />

        {/* Snout */}
        <path d="M0,-45 L15,-42 L15,-48" stroke="#78350f" strokeWidth="8" fill="#78350f" />

        {/* Eyes */}
        <circle cx="-4" cy="-48" r="1.5" fill="#0f172a" />

        {/* Antlers */}
        <path
          d="M-5,-50 L-15,-70 L-25,-65 M-15,-70 L-5,-65 M-5,-50 L5,-75 L15,-70 M5,-75 L0,-65"
          stroke="#78350f"
          strokeWidth="3"
          fill="none"
        />

        {/* Legs */}
        <rect x="-30" y="15" width="8" height="30" rx="2" fill="#78350f" />
        <rect x="-10" y="15" width="8" height="30" rx="2" fill="#78350f" />
        <rect x="5" y="15" width="8" height="30" rx="2" fill="#78350f" />
        <rect x="25" y="15" width="8" height="30" rx="2" fill="#78350f" />

        {/* Tail */}
        <path d="M40,0 C45,5 45,10 40,15" stroke="#78350f" strokeWidth="4" fill="none" />
      </g>

      {/* Birds */}
      <path d="M80,40 L90,35 L100,40 M90,35 L90,45" stroke="#0f172a" strokeWidth="1.5" fill="none" />
      <path d="M200,50 L210,45 L220,50 M210,45 L210,55" stroke="#0f172a" strokeWidth="1.5" fill="none" />
    </svg>
  )
}
