import { Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/darkMode/Provider";
import { Navbar } from "@/components";
import App from "./App";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleTagManagerNoScript from "@/components/GoogleTagManagerNoScript";

const lato = Lato({ subsets: ["latin"], weight: ['300', '400', '700', '900'] });

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://kaiwanpharma.com'),
    title: {
      default: "Kaiwan Pharma | Premium Health & Beauty Products",
      template: "%s | Kaiwan Pharma"
    },
    description: "Enhance your beauty routine with Kaiwan Pharma’s trusted health and beauty products. Discover effective solutions for skin whitening, lightening, and brightening, plus powerful hair fall treatments and nourishing hair serums. Combat acne with our anti-acne products, protect your skin with SPF sunblocks, and treat fungal infections with our specialized care. Shop now and enjoy exclusive discounts, plus free shipping on orders over RS 2000.",
    keywords: ["Kaiwan Pharma", "Amaizax", "Nuehair", "Sonnpro", "Keyac", "KEY-AC", "Kimost", "Kitar", "Amaizax Skin Lightening Cream", "Amaizax Skin Brightening Facewash", "Nuhair Serum", "Nuhair Hair Serum"],
    openGraph: {
      title: "Kaiwan Pharma",
      description: "Discover Kaiwan Pharma's premium range of health and beauty products. Shop skin whitening creams, hair serums, and more.",
      url: 'https://kaiwanpharma.com',
      type: 'website',
      images: [
        {
          url: 'https://kaiwanpharma.com/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Kaiwan Pharma - Enhance Your Beauty Routine'
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Kaiwan Pharma",
      description: "Explore Kaiwan Pharma’s range of trusted health and beauty products designed to enhance your beauty routine.",
      image: 'https://kaiwanpharma.com/opengraph-image.jpg',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body className={lato.className}>
        <GoogleTagManagerNoScript />
        <div className="relative">
          <Providers>
            <App>
              <Navbar />
              {children}
              <WhatsAppButton />
              <Footer />
            </App>
          </Providers>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
