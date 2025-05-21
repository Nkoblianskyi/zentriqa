"use client"

import { AlertTriangle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-red-50 border-b border-red-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start md:items-center mb-2 md:mb-0">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-1 md:mt-0 flex-shrink-0" />
            <div>
              <p className="text-sm text-red-700">
                <strong>Important Notice:</strong> This is a free social game for entertainment purposes only. No real
                money. No prizes. Ages 18+.
              </p>
              <p className="text-sm text-red-700 mt-1">
                If the fun stops, take a step back. You can also visit support resources like{" "}
                <Link
                  href="https://www.gordonmoody.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-800 font-medium"
                >
                  Gordon Moody
                </Link>
                ,{" "}
                <Link
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-800 font-medium"
                >
                  GamCare
                </Link>
                , or{" "}
                <Link
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-800 font-medium"
                >
                  BeGambleAware
                </Link>{" "}
                for help and advice.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-red-500 hover:text-red-700 text-sm self-end md:self-center"
            aria-label="Close disclaimer"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
