import HomeClient from "./HomeClient"

export const metadata = {
  title: "Artech-Agency | Dental Marketing & Automation | Scale Your Clinic",
  description: "Cut your dental clinic's ad spend and reclaim hours of time. We build high-converting websites and automated booking systems for UK dentists. Get a free audit.",
  keywords: [
    "dental marketing agency manchester",
    "dental website design UK",
    "dental practice automation",
    "lower dental patient acquisition cost",
    "automated booking system for dentists",
    "dental lead generation agency",
    "Artech Engine dental"
  ],
  openGraph: {
    title: "Artech-Agency | The Operating System for Dental Growth",
    description: "Stop overpaying for leads. We automate your clinic's booking and marketing so you can focus on patients.",
    url: "https://artech-agency.co",
    siteName: "Artech-Agency",
    images: [
      {
        url: "/images/landing_metadata_img.png",
        width: 1200,
        height: 630,
        alt: "Artech Agency - Dental Marketing and Automation Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Page() {
  return <HomeClient />
}
