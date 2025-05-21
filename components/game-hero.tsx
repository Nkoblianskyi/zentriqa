"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function GameHero() {
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <section className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Rescue Hero in the Canadian Rockies</h1>
            <p className="text-xl mb-8 text-blue-100">
              Embark on an adventure through the majestic Canadian Rockies. Save hikers, navigate challenging terrain,
              and become the ultimate Rescue Hero!
            </p>
            <div className="flex flex-col items-center md:items-start">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-6"
                onClick={handleStartGame}
              >
                Start Game
              </Button>
              <p className="mt-3 text-sm font-bold text-yellow-300 bg-blue-900 px-3 py-2 rounded-md inline-block">
                For entertainment purposes only. No real money. No prizes. Ages 19+.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
            <div className="w-full h-full relative">
              <RescueHeroIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Snow effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/snow-pattern.png')", backgroundSize: "100px" }}
        ></div>
      </div>

      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              Important Notice
            </DialogTitle>
            <DialogDescription>Please read and confirm before continuing to the game.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-red-50 p-4 rounded-md text-sm text-red-700">
              <p className="font-bold mb-2">This is a free social game:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>It is not a casino</li>
                <li>No real money can be won or lost</li>
                <li>No prizes are offered</li>
                <li>For entertainment purposes only</li>
                <li>Intended for users 19+</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleConfirm}>
              I Understand, Continue to Game
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function RescueHeroIllustration() {
  return (
    <div className="w-full h-full relative">
      {/* Mountains Background */}
      <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="800" height="600" fill="#1e40af" opacity="0.3" />

        {/* Far Mountains */}
        <path
          d="M0,250 L100,180 L200,220 L300,150 L400,200 L500,120 L600,180 L700,140 L800,190 L800,600 L0,600 Z"
          fill="#1e3a8a"
        />

        {/* Middle Mountains */}
        <path
          d="M0,300 L100,220 L200,280 L300,200 L400,280 L500,180 L600,250 L700,200 L800,280 L800,600 L0,600 Z"
          fill="#1e3a8a"
          opacity="0.7"
        />

        {/* Near Mountains with Snow */}
        <path
          d="M0,350 L100,280 L200,350 L300,250 L400,350 L500,250 L600,320 L700,270 L800,350 L800,600 L0,600 Z"
          fill="#1e3a8a"
          opacity="0.9"
        />

        {/* Snow Caps */}
        <path
          d="M100,280 L120,270 L140,275 L160,265 L180,275 L200,350 L180,340 L160,345 L140,335 L120,345 L100,280 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M300,250 L320,240 L340,245 L360,235 L380,245 L400,350 L380,340 L360,345 L340,335 L320,345 L300,250 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M500,250 L520,240 L540,245 L560,235 L580,245 L600,320 L580,310 L560,315 L540,305 L520,315 L500,250 Z"
          fill="white"
          opacity="0.9"
        />

        {/* Snow on Ground */}
        <path d="M0,500 L800,500 L800,600 L0,600 Z" fill="white" opacity="0.7" />

        {/* Trees */}
        <g className="tree" transform="translate(150, 450) scale(0.7)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(200, 470) scale(0.5)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(600, 460) scale(0.6)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(650, 480) scale(0.4)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        {/* Rescue Hero Character */}
        <g transform="translate(400, 400)">
          {/* Helicopter */}
          <g className="helicopter" transform="translate(-150, -150) scale(0.8)">
            <rect x="-40" y="-10" width="80" height="25" rx="5" fill="#dc2626" />
            <rect x="-30" y="-20" width="60" height="10" rx="3" fill="#dc2626" />
            <rect x="-25" y="15" width="50" height="10" rx="3" fill="#dc2626" />
            <circle cx="0" cy="-30" r="10" fill="#dc2626" />
            <line x1="-60" y1="-30" x2="60" y2="-30" stroke="#0f172a" strokeWidth="3" />
            <line x1="-60" y1="-30" x2="-50" y2="-40" stroke="#0f172a" strokeWidth="2" />
            <line x1="60" y1="-30" x2="50" y2="-40" stroke="#0f172a" strokeWidth="2" />
            <rect x="-5" y="25" width="10" height="20" fill="#dc2626" />
            <line x1="-20" y1="45" x2="20" y2="45" stroke="#0f172a" strokeWidth="3" />
            <circle cx="-20" cy="0" r="5" fill="#f8fafc" />
            <circle cx="20" cy="0" r="5" fill="#f8fafc" />
          </g>

          {/* Rescue Worker */}
          <g className="rescue-worker">
            {/* Body */}
            <rect x="-20" y="0" width="40" height="60" rx="10" fill="#dc2626" />

            {/* Head */}
            <circle cx="0" cy="-15" r="15" fill="#fed7aa" />
            <path d="M-8,-20 C-8,-15 8,-15 8,-20" stroke="#0f172a" strokeWidth="1" fill="none" />
            <circle cx="-5" cy="-20" r="2" fill="#0f172a" />
            <circle cx="5" cy="-20" r="2" fill="#0f172a" />

            {/* Helmet */}
            <path d="M-15,-25 C-15,-40 15,-40 15,-25" stroke="#dc2626" strokeWidth="5" fill="#dc2626" />
            <rect x="-15" y="-30" width="30" height="10" rx="5" fill="#dc2626" />

            {/* Arms */}
            <rect x="-40" y="0" width="20" height="10" rx="5" fill="#dc2626" transform="rotate(-30 -40 0)" />
            <rect x="20" y="0" width="20" height="10" rx="5" fill="#dc2626" transform="rotate(30 20 0)" />

            {/* Hands */}
            <circle cx="-45" cy="-5" r="5" fill="#fed7aa" />
            <circle cx="45" cy="-5" r="5" fill="#fed7aa" />

            {/* Legs */}
            <rect x="-20" y="60" width="15" height="30" rx="5" fill="#1e3a8a" />
            <rect x="5" y="60" width="15" height="30" rx="5" fill="#1e3a8a" />

            {/* Boots */}
            <rect x="-25" y="90" width="20" height="10" rx="3" fill="#0f172a" />
            <rect x="5" y="90" width="20" height="10" rx="3" fill="#0f172a" />

            {/* Rescue Equipment */}
            <rect x="-10" y="20" width="20" height="30" rx="3" fill="#f59e0b" />
            <rect x="-5" y="25" width="10" height="5" rx="1" fill="#0f172a" />
            <rect x="-5" y="35" width="10" height="5" rx="1" fill="#0f172a" />
          </g>

          {/* Rope from Helicopter to Rescuer */}
          <line x1="-120" y1="-130" x2="0" y2="-40" stroke="#f8fafc" strokeWidth="2" strokeDasharray="5,3" />

          {/* Person being rescued */}
          <g className="rescued-person" transform="translate(60, 50) scale(0.8)">
            {/* Body */}
            <rect x="-15" y="0" width="30" height="40" rx="8" fill="#3b82f6" />

            {/* Head */}
            <circle cx="0" cy="-15" r="12" fill="#fed7aa" />
            <path d="M-6,-18 C-6,-14 6,-14 6,-18" stroke="#0f172a" strokeWidth="1" fill="none" />
            <circle cx="-4" cy="-18" r="1.5" fill="#0f172a" />
            <circle cx="4" cy="-18" r="1.5" fill="#0f172a" />

            {/* Arms */}
            <rect x="-30" y="0" width="15" height="8" rx="4" fill="#3b82f6" transform="rotate(-20 -30 0)" />
            <rect x="15" y="0" width="15" height="8" rx="4" fill="#3b82f6" transform="rotate(20 15 0)" />

            {/* Hands */}
            <circle cx="-35" cy="-3" r="4" fill="#fed7aa" />
            <circle cx="35" cy="-3" r="4" fill="#fed7aa" />

            {/* Legs */}
            <rect x="-15" y="40" width="12" height="20" rx="4" fill="#1e3a8a" />
            <rect x="3" y="40" width="12" height="20" rx="4" fill="#1e3a8a" />
          </g>

          {/* Rope from Rescuer to Person */}
          <line x1="0" y1="30" x2="60" y2="30" stroke="#f8fafc" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}
