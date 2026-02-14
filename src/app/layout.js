import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


//metadata

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
// dynamic imports of the components
const Landing_footer = dynamic(() =>
  import("../components/Landing_footer/Landing_footer")
);
const Navbar = dynamic(() => 
  import("../components/Landing_navbar/Landing_navbar")
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Landing_footer/>
      </body>
    </html>
  );
}
