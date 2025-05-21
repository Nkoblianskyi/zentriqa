import { Suspense } from "react"
import AgeVerificationModal from "@/components/age-verification-modal"
import GameHero from "@/components/game-hero"
import AboutGame from "@/components/about-game"
import RescueTools from "@/components/rescue-tools"
import Leaderboard from "@/components/leaderboard"
import ResponsiblePlay from "@/components/responsible-play"
import Reviews from "@/components/reviews"
import ContactForm from "@/components/contact-form"
import StructuredData from "./structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <AgeVerificationModal />

      {/* Hero Section */}
      <GameHero />

      {/* About Game Section */}
      <AboutGame />

      {/* Rescue Tools Section */}
      <RescueTools />

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Fun Ranking</h2>
          <Suspense fallback={<div className="text-center">Loading leaderboard...</div>}>
            <Leaderboard />
          </Suspense>
        </div>
      </section>

      {/* Responsible Play Section */}
      <ResponsiblePlay />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
