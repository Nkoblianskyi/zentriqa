import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy } from "lucide-react"

// Mock data for the leaderboard
const leaderboardData = [
  { rank: 1, player: "LuckyMaster", score: "89,899", date: "May 10, 2025" },
  { rank: 2, player: "MountainRescuer", score: "76,543", date: "May 9, 2025" },
  { rank: 3, player: "SnowHero", score: "65,210", date: "May 8, 2025" },
  { rank: 4, player: "RockyClimber", score: "54,321", date: "May 7, 2025" },
  { rank: 5, player: "WildExplorer", score: "43,210", date: "May 6, 2025" },
  { rank: 6, player: "IceQueen", score: "32,109", date: "May 5, 2025" },
  { rank: 7, player: "MapleSyrup", score: "21,098", date: "May 4, 2025" },
  { rank: 8, player: "BeaverBuilder", score: "10,987", date: "May 3, 2025" },
  { rank: 9, player: "MooseTracker", score: "9,876", date: "May 2, 2025" },
  { rank: 10, player: "NewPlayer", score: "1,999", date: "May 2, 2025" },
]

export default function Leaderboard() {
  return (
    <div className="rounded-lg border bg-white shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px] text-center">Rank</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((entry) => (
            <TableRow key={entry.rank}>
              <TableCell className="text-center font-medium">
                {entry.rank <= 3 ? (
                  <div className="flex justify-center">
                    <Trophy
                      className={`h-5 w-5 ${
                        entry.rank === 1 ? "text-yellow-500" : entry.rank === 2 ? "text-gray-400" : "text-amber-700"
                      }`}
                    />
                  </div>
                ) : (
                  entry.rank
                )}
              </TableCell>
              <TableCell>{entry.player}</TableCell>
              <TableCell className="text-right">{entry.score}</TableCell>
              <TableCell className="text-right">{entry.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-blue-50 p-3 text-center text-sm text-blue-700">
        Fun Ranking - For entertainment purposes only
      </div>
    </div>
  )
}
