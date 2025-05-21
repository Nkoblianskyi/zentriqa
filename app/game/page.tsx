"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Plus,
  Minus,
  Maximize,
  Trophy,
  Star,
  Clock,
  Zap,
  Shield,
  Heart,
  Snowflake,
  Wind,
  CloudRain,
  Sun,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Game symbols and their values
const SYMBOLS = {
  MOUNTAIN: { symbol: "🏔️", value: 10, name: "Mountain" },
  TREE: { symbol: "🌲", value: 5, name: "Forest" },
  HELICOPTER: { symbol: "🚁", value: 25, name: "Helicopter" },
  HIKER: { symbol: "🧗‍♀️", value: 15, name: "Hiker" },
  MOOSE: { symbol: "🦌", value: 8, name: "Wildlife" },
  SNOWFLAKE: { symbol: "❄️", value: 12, name: "Snowstorm" },
  TENT: { symbol: "⛺", value: 7, name: "Camp" },
  COMPASS: { symbol: "🧭", value: 20, name: "Navigation" },
  FIRSTAID: { symbol: "🩹", value: 18, name: "First Aid" },
}

// Weather conditions that affect gameplay
const WEATHER_CONDITIONS = [
  { name: "Clear", icon: Sun, modifier: 1, description: "Perfect rescue conditions" },
  { name: "Snowy", icon: Snowflake, modifier: 0.8, description: "Reduced visibility, harder to spot hikers" },
  { name: "Windy", icon: Wind, modifier: 0.9, description: "Helicopter control is more difficult" },
  { name: "Rainy", icon: CloudRain, modifier: 0.7, description: "Slippery conditions, rescue takes longer" },
]

// Rescue missions with different objectives
const RESCUE_MISSIONS = [
  {
    id: 1,
    name: "Lost Hiker",
    description: "Find and rescue a hiker lost in the mountains",
    objective: "Get 3 Hiker symbols in a single spin",
    reward: 500,
    difficulty: "Easy",
  },
  {
    id: 2,
    name: "Wildlife Emergency",
    description: "Help injured wildlife in a remote area",
    objective: "Get 2 Wildlife and 2 First Aid symbols",
    reward: 750,
    difficulty: "Medium",
  },
  {
    id: 3,
    name: "Mountain Expedition",
    description: "Rescue a stranded expedition team",
    objective: "Get 2 Mountain, 1 Helicopter, and 1 Navigation symbols",
    reward: 1000,
    difficulty: "Hard",
  },
  {
    id: 4,
    name: "Snowstorm Survival",
    description: "Save campers caught in a sudden snowstorm",
    objective: "Get 2 Snowflake, 1 Tent, and 1 First Aid symbols",
    reward: 1200,
    difficulty: "Hard",
  },
  {
    id: 5,
    name: "Forest Fire Evacuation",
    description: "Evacuate hikers from an area with forest fires",
    objective: "Get 3 Forest and 2 Helicopter symbols",
    reward: 1500,
    difficulty: "Expert",
  },
]

// Power-ups that can be used during gameplay
const POWER_UPS = [
  {
    id: "extra_spin",
    name: "Extra Spin",
    description: "Get an additional free spin",
    icon: Zap,
    cost: 200,
    effect: "free_spin",
  },
  {
    id: "symbol_lock",
    name: "Symbol Lock",
    description: "Lock a symbol in place for the next spin",
    icon: Shield,
    cost: 300,
    effect: "lock_symbol",
  },
  {
    id: "double_points",
    name: "Double Points",
    description: "Double the points for your next win",
    icon: Star,
    cost: 500,
    effect: "double_points",
  },
  {
    id: "rescue_boost",
    name: "Rescue Boost",
    description: "Increases chances of helicopter and first aid symbols",
    icon: Heart,
    cost: 400,
    effect: "boost_rescue",
  },
]

// Achievements that can be unlocked
const ACHIEVEMENTS = [
  {
    id: "first_rescue",
    name: "First Rescue",
    description: "Complete your first rescue mission",
    icon: Trophy,
    unlocked: false,
    reward: 100,
  },
  {
    id: "big_win",
    name: "Big Win",
    description: "Win over 500 points in a single spin",
    icon: Star,
    unlocked: false,
    reward: 200,
  },
  {
    id: "weather_master",
    name: "Weather Master",
    description: "Complete a rescue in all weather conditions",
    icon: Sun,
    unlocked: false,
    reward: 300,
  },
  {
    id: "mission_expert",
    name: "Mission Expert",
    description: "Complete 5 different rescue missions",
    icon: Trophy,
    unlocked: false,
    reward: 500,
  },
]

export default function GamePage() {
  // Game state
  const [score, setScore] = useState(1000)
  const [bet, setBet] = useState(10)
  const [isSpinning, setIsSpinning] = useState(false)
  const [level, setLevel] = useState(1)
  const [experience, setExperience] = useState(0)
  const [experienceToNextLevel, setExperienceToNextLevel] = useState(1000)
  const [activePowerUp, setActivePowerUp] = useState(null)
  const [ownedPowerUps, setOwnedPowerUps] = useState({})
  const [currentWeather, setCurrentWeather] = useState(WEATHER_CONDITIONS[0])
  const [activeMission, setActiveMission] = useState(null)
  const [completedMissions, setCompletedMissions] = useState([])
  const [unlockedAchievements, setUnlockedAchievements] = useState([])
  const [showAchievementNotification, setShowAchievementNotification] = useState(false)
  const [newAchievement, setNewAchievement] = useState(null)
  const [symbolsToLock, setSymbolsToLock] = useState([])
  const [gameStats, setGameStats] = useState({
    totalSpins: 0,
    totalWins: 0,
    biggestWin: 0,
    missionsCompleted: 0,
  })

  // Reels configuration
  const [reels, setReels] = useState([
    Object.values(SYMBOLS).map((s) => s.symbol),
    Object.values(SYMBOLS).map((s) => s.symbol),
    Object.values(SYMBOLS).map((s) => s.symbol),
    Object.values(SYMBOLS).map((s) => s.symbol),
    Object.values(SYMBOLS).map((s) => s.symbol),
  ])

  // Current visible symbols on reels
  const [currentReels, setCurrentReels] = useState([
    [SYMBOLS.MOUNTAIN.symbol, SYMBOLS.TREE.symbol, SYMBOLS.HELICOPTER.symbol],
    [SYMBOLS.HIKER.symbol, SYMBOLS.MOOSE.symbol, SYMBOLS.SNOWFLAKE.symbol],
    [SYMBOLS.TENT.symbol, SYMBOLS.COMPASS.symbol, SYMBOLS.FIRSTAID.symbol],
    [SYMBOLS.MOUNTAIN.symbol, SYMBOLS.HELICOPTER.symbol, SYMBOLS.MOOSE.symbol],
    [SYMBOLS.TREE.symbol, SYMBOLS.HIKER.symbol, SYMBOLS.COMPASS.symbol],
  ])

  // Game history
  const [gameHistory, setGameHistory] = useState([])
  const historyRef = useRef(null)

  // Initialize game
  useEffect(() => {
    // Change weather every 5 minutes
    const weatherInterval = setInterval(() => {
      const randomWeather = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)]
      setCurrentWeather(randomWeather)
    }, 300000)

    return () => clearInterval(weatherInterval)
  }, [])

  // Scroll to bottom of history when updated
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [gameHistory])

  // Bet controls
  const increaseBet = () => {
    if (bet < 100) setBet(bet + 10)
  }

  const decreaseBet = () => {
    if (bet > 10) setBet(bet - 10)
  }

  const maxBet = () => {
    setBet(100)
  }

  // Acquire a power-up
  const acquirePowerUp = (powerUp) => {
    if (score >= powerUp.cost) {
      setScore(score - powerUp.cost)
      setOwnedPowerUps({
        ...ownedPowerUps,
        [powerUp.id]: (ownedPowerUps[powerUp.id] || 0) + 1,
      })

      addToHistory(`Acquired ${powerUp.name} power-up for ${powerUp.cost} points`)
    }
  }

  // Activate a power-up
  const activatePowerUp = (powerUp) => {
    if (ownedPowerUps[powerUp.id] > 0) {
      setActivePowerUp(powerUp)
      setOwnedPowerUps({
        ...ownedPowerUps,
        [powerUp.id]: ownedPowerUps[powerUp.id] - 1,
      })

      addToHistory(`Activated ${powerUp.name} power-up`)

      // If it's a symbol lock power-up, enable symbol selection
      if (powerUp.effect === "lock_symbol") {
        // Implementation will be in the UI
      }
    }
  }

  // Toggle symbol lock when symbol lock power-up is active
  const toggleSymbolLock = (reelIndex, symbolIndex) => {
    if (activePowerUp && activePowerUp.effect === "lock_symbol") {
      const symbolKey = `${reelIndex}-${symbolIndex}`

      if (symbolsToLock.includes(symbolKey)) {
        setSymbolsToLock(symbolsToLock.filter((s) => s !== symbolKey))
      } else if (symbolsToLock.length < 3) {
        // Limit to 3 locked symbols
        setSymbolsToLock([...symbolsToLock, symbolKey])
      }
    }
  }

  // Select a mission
  const selectMission = (mission) => {
    setActiveMission(mission)
    addToHistory(`Started mission: ${mission.name}`)
  }

  // Add entry to game history
  const addToHistory = (message) => {
    const timestamp = new Date().toLocaleTimeString()
    setGameHistory([...gameHistory, { message, timestamp }])
  }

  // Check if mission is completed
  const checkMissionCompletion = (flatReels) => {
    if (!activeMission) return false

    // Count symbols
    const symbolCounts = {}
    flatReels.forEach((symbol) => {
      symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1
    })

    // Check mission objectives (simplified for this example)
    let completed = false

    switch (activeMission.id) {
      case 1: // Lost Hiker
        completed = (symbolCounts[SYMBOLS.HIKER.symbol] || 0) >= 3
        break
      case 2: // Wildlife Emergency
        completed = (symbolCounts[SYMBOLS.MOOSE.symbol] || 0) >= 2 && (symbolCounts[SYMBOLS.FIRSTAID.symbol] || 0) >= 2
        break
      case 3: // Mountain Expedition
        completed =
          (symbolCounts[SYMBOLS.MOUNTAIN.symbol] || 0) >= 2 &&
          (symbolCounts[SYMBOLS.HELICOPTER.symbol] || 0) >= 1 &&
          (symbolCounts[SYMBOLS.COMPASS.symbol] || 0) >= 1
        break
      case 4: // Snowstorm Survival
        completed =
          (symbolCounts[SYMBOLS.SNOWFLAKE.symbol] || 0) >= 2 &&
          (symbolCounts[SYMBOLS.TENT.symbol] || 0) >= 1 &&
          (symbolCounts[SYMBOLS.FIRSTAID.symbol] || 0) >= 1
        break
      case 5: // Forest Fire Evacuation
        completed = (symbolCounts[SYMBOLS.TREE.symbol] || 0) >= 3 && (symbolCounts[SYMBOLS.HELICOPTER.symbol] || 0) >= 2
        break
    }

    if (completed) {
      // Award mission reward
      const reward = activeMission.reward
      setScore((score) => score + reward)

      // Add to completed missions
      if (!completedMissions.includes(activeMission.id)) {
        setCompletedMissions([...completedMissions, activeMission.id])
      }

      // Update stats
      setGameStats({
        ...gameStats,
        missionsCompleted: gameStats.missionsCompleted + 1,
      })

      // Add experience
      addExperience(reward / 2)

      // Add to history
      addToHistory(`Mission completed: ${activeMission.name}! Earned ${reward} points.`)

      // Check for achievements
      checkAchievements("mission_completed")

      // Reset active mission
      setActiveMission(null)

      return true
    }

    return false
  }

  // Add experience points and level up if needed
  const addExperience = (amount) => {
    const newExperience = experience + amount

    if (newExperience >= experienceToNextLevel) {
      // Level up
      const newLevel = level + 1
      setLevel(newLevel)
      setExperience(newExperience - experienceToNextLevel)
      setExperienceToNextLevel(Math.floor(experienceToNextLevel * 1.5))

      // Reward for level up
      const levelUpReward = newLevel * 100
      setScore((score) => score + levelUpReward)

      addToHistory(`Level up! You are now level ${newLevel}. Earned ${levelUpReward} points.`)
    } else {
      setExperience(newExperience)
    }
  }

  // Check for achievements
  const checkAchievements = (trigger, data = {}) => {
    const newUnlocked = []

    ACHIEVEMENTS.forEach((achievement) => {
      if (unlockedAchievements.includes(achievement.id)) return

      let unlocked = false

      switch (achievement.id) {
        case "first_rescue":
          unlocked = trigger === "mission_completed" && gameStats.missionsCompleted === 1
          break
        case "big_win":
          unlocked = trigger === "win" && data.amount >= 500
          break
        case "weather_master":
          // This would need more complex tracking of weather conditions during missions
          break
        case "mission_expert":
          unlocked = completedMissions.length >= 5
          break
      }

      if (unlocked) {
        newUnlocked.push(achievement.id)

        // Award achievement reward
        setScore((score) => score + achievement.reward)

        // Show notification
        setNewAchievement(achievement)
        setShowAchievementNotification(true)
        setTimeout(() => setShowAchievementNotification(false), 5000)

        addToHistory(`Achievement unlocked: ${achievement.name}! Earned ${achievement.reward} points.`)
      }
    })

    if (newUnlocked.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newUnlocked])
    }
  }

  // Main game spin function
  const spin = () => {
    if (isSpinning) return

    // Check if player has enough points
    if (score < bet) {
      addToHistory("Not enough points to play!")
      return
    }

    setIsSpinning(true)
    setScore(score - bet)

    // Update stats
    setGameStats({
      ...gameStats,
      totalSpins: gameStats.totalSpins + 1,
    })

    // Add to history
    addToHistory(`Spin started with ${bet} points bet`)

    // Determine if we should apply a power-up effect
    const applyDoublePoints = activePowerUp && activePowerUp.effect === "double_points"
    const applyRescueBoost = activePowerUp && activePowerUp.effect === "boost_rescue"

    // Reset active power-up unless it's symbol lock
    if (activePowerUp && activePowerUp.effect !== "lock_symbol") {
      setActivePowerUp(null)
    }

    // Simulate spinning animation
    const spinInterval = setInterval(() => {
      setCurrentReels((prevReels) => {
        return prevReels.map((reel, reelIndex) => {
          // If this reel has locked symbols, keep them
          if (symbolsToLock.some((key) => key.startsWith(`${reelIndex}-`))) {
            return reel.map((symbol, symbolIndex) => {
              if (symbolsToLock.includes(`${reelIndex}-${symbolIndex}`)) {
                return symbol
              }
              return reels[reelIndex][Math.floor(Math.random() * reels[reelIndex].length)]
            })
          }

          // Otherwise randomize all symbols
          return reel.map(() => reels[reelIndex][Math.floor(Math.random() * reels[reelIndex].length)])
        })
      })
    }, 100)

    // Stop spinning after 2 seconds
    setTimeout(() => {
      clearInterval(spinInterval)

      // Generate final result
      const finalReels = currentReels.map((reel, reelIndex) => {
        // Keep locked symbols
        return reel.map((symbol, symbolIndex) => {
          if (symbolsToLock.includes(`${reelIndex}-${symbolIndex}`)) {
            return symbol
          }

          // Apply rescue boost if active
          if (applyRescueBoost) {
            // Increase chance of helicopter and first aid symbols
            const boostChance = Math.random()
            if (boostChance < 0.3) {
              return Math.random() < 0.5 ? SYMBOLS.HELICOPTER.symbol : SYMBOLS.FIRSTAID.symbol
            }
          }

          return reels[reelIndex][Math.floor(Math.random() * reels[reelIndex].length)]
        })
      })

      setCurrentReels(finalReels)

      // Reset symbol locks after use
      if (activePowerUp && activePowerUp.effect === "lock_symbol") {
        setActivePowerUp(null)
        setSymbolsToLock([])
      }

      // Check for winning combinations
      let winAmount = 0
      const flatReels = finalReels.flat()

      // Check for matching symbols in rows
      for (let row = 0; row < 3; row++) {
        const rowSymbols = finalReels.map((reel) => reel[row])

        // Count consecutive matching symbols from left
        const currentSymbol = rowSymbols[0]
        let count = 1

        for (let i = 1; i < rowSymbols.length; i++) {
          if (rowSymbols[i] === currentSymbol) {
            count++
          } else {
            break
          }
        }

        // Award points based on matches (3+ matches)
        if (count >= 3) {
          const symbolValue = Object.values(SYMBOLS).find((s) => s.symbol === currentSymbol)?.value || 0
          const rowWin = (symbolValue * count * bet) / 10
          winAmount += rowWin

          addToHistory(`Row ${row + 1}: ${count} matching ${currentSymbol} symbols! +${rowWin} points`)
        }
      }

      // Check for special symbol combinations (e.g., rescue missions)
      const missionCompleted = checkMissionCompletion(flatReels)

      // Apply weather modifier
      winAmount = Math.floor(winAmount * currentWeather.modifier)

      // Apply double points if active
      if (applyDoublePoints) {
        winAmount *= 2
        addToHistory("Double Points power-up applied!")
      }

      // Update score with winnings
      if (winAmount > 0 || missionCompleted) {
        setScore((prevScore) => prevScore + winAmount)

        // Update stats
        setGameStats({
          ...gameStats,
          totalWins: gameStats.totalWins + 1,
          biggestWin: Math.max(gameStats.biggestWin, winAmount),
        })

        // Add experience
        addExperience(winAmount / 10)

        // Check for big win achievement
        if (winAmount >= 500) {
          checkAchievements("win", { amount: winAmount })
        }

        addToHistory(`Won ${winAmount} points!`)
      } else {
        addToHistory("No winning combinations this time.")
      }

      // Check if we should give a free spin from power-up
      if (activePowerUp && activePowerUp.effect === "free_spin") {
        addToHistory("Extra Spin power-up activated! Free spin coming up.")
        setTimeout(() => {
          setActivePowerUp(null)
          spin()
        }, 1000)
      } else {
        setIsSpinning(false)
      }
    }, 2000)
  }

  return (
    <div className="py-8 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-blue-700 text-white px-3 py-1 rounded-lg mr-2">
              <span className="text-xs font-bold">LEVEL {level}</span>
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(experience / experienceToNextLevel) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600">
              {experience}/{experienceToNextLevel} XP
            </span>
          </div>
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">19+</div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Game Area - 3 columns wide */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold">Rescue Hero in the Canadian Rockies</h1>
                  <div className="flex items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center bg-blue-100 px-3 py-1 rounded-lg mr-3">
                            <currentWeather.icon className="h-4 w-4 text-blue-700 mr-1" />
                            <span className="text-sm font-medium">{currentWeather.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{currentWeather.description}</p>
                          <p className="text-sm text-gray-500">Point modifier: {currentWeather.modifier}x</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    {activeMission && (
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                        Mission: {activeMission.name}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 mb-2">
                    For entertainment purposes only. No real money. No prizes. Ages 19+.
                  </p>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="bg-blue-700 text-white px-4 py-2 rounded-lg">
                    <p className="text-sm">Points</p>
                    <p className="text-2xl font-bold">{score}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={decreaseBet} disabled={bet <= 10 || isSpinning}>
                      <Minus className="h-4 w-4" />
                    </Button>

                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <p className="text-sm">Points per play</p>
                      <p className="text-xl font-bold">{bet}</p>
                    </div>

                    <Button variant="outline" size="icon" onClick={increaseBet} disabled={bet >= 100 || isSpinning}>
                      <Plus className="h-4 w-4" />
                    </Button>

                    <Button variant="outline" onClick={maxBet} disabled={bet >= 100 || isSpinning}>
                      <Maximize className="h-4 w-4 mr-2" />
                      Max
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 rounded-xl mb-6">
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {currentReels.map((reel, reelIndex) => (
                      <div key={reelIndex} className="bg-white rounded-lg overflow-hidden">
                        <div className="grid grid-rows-3 h-60">
                          {reel.map((symbol, symbolIndex) => {
                            const isLocked = symbolsToLock.includes(`${reelIndex}-${symbolIndex}`)
                            return (
                              <div
                                key={`${reelIndex}-${symbolIndex}`}
                                className={`flex items-center justify-center text-4xl border-b border-gray-200 h-20 relative
                                  ${activePowerUp?.effect === "lock_symbol" ? "cursor-pointer hover:bg-blue-50" : ""}
                                  ${isLocked ? "bg-blue-100 border-2 border-blue-500" : ""}`}
                                onClick={() => toggleSymbolLock(reelIndex, symbolIndex)}
                              >
                                {symbol}
                                {isLocked && (
                                  <div className="absolute top-1 right-1">
                                    <Shield className="h-4 w-4 text-blue-500" />
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-xl py-6"
                    onClick={spin}
                    disabled={isSpinning || score < bet}
                  >
                    {isSpinning ? "Rescuing..." : "Start Rescue"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-amber-500" />
                      Active Power-ups
                    </h3>
                    {activePowerUp ? (
                      <div className="flex items-center bg-blue-100 p-2 rounded-lg">
                        <activePowerUp.icon className="h-5 w-5 text-blue-700 mr-2" />
                        <div>
                          <p className="font-medium">{activePowerUp.name}</p>
                          <p className="text-xs text-gray-600">{activePowerUp.description}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No active power-ups</p>
                    )}

                    <h4 className="font-medium mt-3 mb-2">Your Power-ups:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {POWER_UPS.map((powerUp) => (
                        <Button
                          key={powerUp.id}
                          variant="outline"
                          size="sm"
                          className={`text-xs justify-start ${ownedPowerUps[powerUp.id] ? "bg-blue-50" : "opacity-50"}`}
                          disabled={!ownedPowerUps[powerUp.id] || isSpinning}
                          onClick={() => activatePowerUp(powerUp)}
                        >
                          <powerUp.icon className="h-3 w-3 mr-1" />
                          {powerUp.name}
                          {ownedPowerUps[powerUp.id] ? ` (${ownedPowerUps[powerUp.id]})` : ""}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-700" />
                      Game History
                    </h3>
                    <div className="h-32 overflow-y-auto text-sm space-y-1 bg-white p-2 rounded-lg" ref={historyRef}>
                      {gameHistory.length === 0 ? (
                        <p className="text-gray-500 italic">No game history yet</p>
                      ) : (
                        gameHistory.map((entry, index) => (
                          <div key={index} className="text-xs">
                            <span className="text-gray-500">{entry.timestamp}</span>: {entry.message}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Game Rules:</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Match 3 or more symbols in a row to earn points</li>
                    <li>• Complete rescue missions for bonus rewards</li>
                    <li>• Weather conditions affect point values</li>
                    <li>• Use power-ups to increase your chances</li>
                    <li>• This is a free social game for entertainment only</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Panel - 1 column wide */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="missions" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="missions">Missions</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>

              <TabsContent value="missions" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Rescue Missions</h3>
                    <p className="text-sm text-gray-600 mb-4">Complete missions to earn bonus points and experience!</p>

                    <div className="space-y-3">
                      {RESCUE_MISSIONS.map((mission) => {
                        const isCompleted = completedMissions.includes(mission.id)
                        const isActive = activeMission?.id === mission.id

                        return (
                          <div
                            key={mission.id}
                            className={`border rounded-lg p-3 ${
                              isCompleted
                                ? "bg-green-50 border-green-200"
                                : isActive
                                  ? "bg-blue-50 border-blue-300"
                                  : "border-gray-200"
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold">{mission.name}</h4>
                              <Badge
                                variant="outline"
                                className={
                                  mission.difficulty === "Easy"
                                    ? "bg-green-100 text-green-800 border-green-300"
                                    : mission.difficulty === "Medium"
                                      ? "bg-blue-100 text-blue-800 border-blue-300"
                                      : mission.difficulty === "Hard"
                                        ? "bg-amber-100 text-amber-800 border-amber-300"
                                        : "bg-red-100 text-red-800 border-red-300"
                                }
                              >
                                {mission.difficulty}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{mission.description}</p>
                            <div className="mt-2 text-xs bg-gray-100 p-2 rounded">
                              <strong>Objective:</strong> {mission.objective}
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-sm">
                                <strong>Reward:</strong> {mission.reward} points
                              </div>
                              {isCompleted ? (
                                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                                  Completed
                                </Badge>
                              ) : isActive ? (
                                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                                  Active
                                </Badge>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  disabled={isSpinning || activeMission !== null}
                                  onClick={() => selectMission(mission)}
                                >
                                  Start
                                </Button>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="equipment" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Rescue Equipment</h3>
                    <p className="text-sm text-gray-600 mb-4">Exchange points for equipment to help with rescues!</p>

                    <div className="space-y-3">
                      {POWER_UPS.map((powerUp) => (
                        <div key={powerUp.id} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                              <powerUp.icon className="h-5 w-5 text-blue-700" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold">{powerUp.name}</h4>
                              <p className="text-sm text-gray-600">{powerUp.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium mb-1">{powerUp.cost} points</div>
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={score < powerUp.cost || isSpinning}
                                onClick={() => acquirePowerUp(powerUp)}
                              >
                                Exchange
                              </Button>
                            </div>
                          </div>
                          {ownedPowerUps[powerUp.id] > 0 && (
                            <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                              You have: {ownedPowerUps[powerUp.id]}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="stats" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Game Statistics</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-1">Player Stats</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Level</div>
                            <div className="font-bold">{level}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Experience</div>
                            <div className="font-bold">
                              {experience}/{experienceToNextLevel}
                            </div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Total Spins</div>
                            <div className="font-bold">{gameStats.totalSpins}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Total Wins</div>
                            <div className="font-bold">{gameStats.totalWins}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Biggest Win</div>
                            <div className="font-bold">{gameStats.biggestWin}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Missions Completed</div>
                            <div className="font-bold">{gameStats.missionsCompleted}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-1">Achievements</h4>
                        <div className="space-y-2">
                          {ACHIEVEMENTS.map((achievement) => {
                            const isUnlocked = unlockedAchievements.includes(achievement.id)

                            return (
                              <div
                                key={achievement.id}
                                className={`border rounded p-2 flex items-center ${
                                  isUnlocked ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200 opacity-75"
                                }`}
                              >
                                <div className={`p-1 rounded-full mr-2 ${isUnlocked ? "bg-green-100" : "bg-gray-200"}`}>
                                  <achievement.icon
                                    className={`h-4 w-4 ${isUnlocked ? "text-green-700" : "text-gray-500"}`}
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{achievement.name}</div>
                                  <div className="text-xs text-gray-600">{achievement.description}</div>
                                </div>
                                <div className="text-xs font-medium">
                                  {isUnlocked ? "Unlocked" : `+${achievement.reward}`}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-1">Symbol Values</h4>
                        <div className="grid grid-cols-3 gap-1">
                          {Object.values(SYMBOLS).map((symbol) => (
                            <div key={symbol.name} className="text-center p-1">
                              <div className="text-2xl">{symbol.symbol}</div>
                              <div className="text-xs">{symbol.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Achievement notification */}
      {showAchievementNotification && newAchievement && (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-300 rounded-lg p-4 shadow-lg max-w-xs animate-in slide-in-from-right">
          <div className="flex items-start">
            <div className="bg-green-200 p-2 rounded-full mr-3">
              <Trophy className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h4 className="font-bold text-green-800">Achievement Unlocked!</h4>
              <p className="font-medium">{newAchievement.name}</p>
              <p className="text-sm text-gray-700">{newAchievement.description}</p>
              <p className="text-sm font-medium mt-1">+{newAchievement.reward} points</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
