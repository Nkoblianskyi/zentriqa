import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rescue Hero</h3>
            <p className="text-blue-200 mb-4">
              A social game for entertainment purposes only. No real money. No prizes.
            </p>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
              <span className="text-red-400 font-bold">19+</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="text-blue-200 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-blue-200 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic text-blue-200">
              <p>Zentriqa Inc.</p>
              <p>11 Yonge St, Toronto, ON, M5C 1W4</p>
              <p className="mt-2">
                <a href="mailto:info@zentriqa.com" className="hover:text-white transition-colors">
                  info@zentriqa.com
                </a>
              </p>
              <p>
                <a href="tel:+14165557890" className="hover:text-white transition-colors">
                  +1 416 555 7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 mb-6">
          <h4 className="text-center text-lg font-semibold mb-4">Responsible Gaming Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all"
            >
              <div className="relative w-32 h-12 mb-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x4mkXbxGhlgvipaXK4V1MYEkHcisEy.png"
                  alt="GambleAware Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-blue-200">Free advice and support</span>
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all"
            >
              <div className="relative w-32 h-12 mb-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DjJ5oJn8abRYrSc5QxejkioQuYcRcv.png"
                  alt="GamCare Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-blue-200">Support and counseling</span>
            </Link>

            <Link
              href="https://www.gordonmoody.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all"
            >
              <div className="relative w-32 h-12 mb-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kaBvObDvnA4QpDq5zVMc2f6rcRtOy5.png"
                  alt="Gordon Moody Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-blue-200">Therapy for gambling addiction</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 mb-6">
          <h4 className="text-center text-lg font-semibold mb-3">Disclaimer</h4>
          <div className="bg-blue-950 p-4 rounded-lg text-blue-200 text-sm">
            <p className="mb-2">
              This game is strictly intended for players aged 18 and over. While it involves no real money, access by
              minors is not permitted.
            </p>
            <p className="mb-2">
              For adult players, this is a safe and entertaining experience that carries no financial risk. Please keep
              in mind: success in this game does not reflect real-life outcomes.
            </p>
            <p>
              Enjoy responsibly — and if you ever feel your play is becoming concerning, we recommend contacting Gaming
              Addicts Anonymous for guidance.
            </p>
          </div>
        </div>

        <div className="text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Zentriqa Inc. All rights reserved.</p>
          <p className="mt-2">This is a social game for entertainment purposes only. No real money gambling.</p>
        </div>
      </div>
    </footer>
  )
}
