"use client"

import { useState, useEffect } from "react"
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

export default function AgeVerificationModal() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already verified age
    const isVerified = localStorage.getItem("ageVerified")
    if (!isVerified) {
      setOpen(true)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("ageVerified", "true")
    setOpen(false)
  }

  const handleDeny = () => {
    router.push("/denied")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
            Age Verification Required
          </DialogTitle>
          <DialogDescription>
            This is a free social game. It is not a casino. No money can be won or lost.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <p className="text-center font-semibold">Are you 18 years of age or older?</p>
          <div className="bg-red-50 p-3 rounded-md text-sm text-red-700">
            This content is intended for adults 18 years of age or older.
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
          <Button type="button" variant="destructive" onClick={handleDeny}>
            No, I am under 18
          </Button>
          <Button type="button" onClick={handleVerify}>
            Yes, I am 18 or older
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
