export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Rescue Hero in the Canadian Rockies",
    description:
      "An educational social game about mountain rescue operations in the Canadian Rockies. For entertainment purposes only with no real money gambling.",
    genre: ["Educational Game", "Simulation Game", "Adventure Game"],
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      availability: "https://schema.org/InStock",
    },
    contentRating: "18+",
    audience: {
      "@type": "Audience",
      audienceType: "Adults",
    },
    publisher: {
      "@type": "Organization",
      name: "Zentriqa Inc.",
      url: "https://zentriqa.com",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
