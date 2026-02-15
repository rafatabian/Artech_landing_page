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
  title: {
    default: "Artech-Agency | Lower your ad spend and automate bookings with us | Marketing, Websites, SEO",
  },
  description: "We help your clinic save time and money by lowering your CAC and automate bookings and repetitive tasks or follow ups.",
  metadataBase: new URL("https://artech-agency.co"),
  openGraph: {
    siteName: "Artech Agency",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
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
