import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Better Days Home Health | Skilled & Non-Skilled Home Care | Hampton Roads, VA",
  description:
    "Better Days Home Health provides VDH-licensed skilled nursing and personal care throughout Hampton Roads, Virginia. Medicaid and Sentara accepted. Call (757) 715-7829.",
  openGraph: {
    type: "website",
    siteName: "Better Days Home Health",
    title: "Better Days Home Health | Skilled & Non-Skilled Home Care | Hampton Roads, VA",
    description:
      "VDH-licensed home health agency delivering skilled nursing, therapy, and personal care to families across Hampton Roads — with the warmth and dignity every patient deserves.",
    images: [{ url: "/og-image.jpg" }],
    url: "https://www.abetterdayforyou.com/",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C3354",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalOrganization", "LocalBusiness"],
              name: "Better Days Home Health",
              url: "https://www.abetterdayforyou.com",
              logo: "https://www.abetterdayforyou.com/logo.jpg",
              image: "https://www.abetterdayforyou.com/og-image.jpg",
              description:
                "VDH-licensed home health agency delivering skilled nursing, therapy, and personal care to families across Hampton Roads, Virginia.",
              telephone: "+17577157829",
              email: "admin@abetterdayforyou.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Virginia Beach",
                addressRegion: "VA",
                addressCountry: "US",
              },
              areaServed: [
                "Virginia Beach, VA",
                "Norfolk, VA",
                "Chesapeake, VA",
                "Portsmouth, VA",
                "Hampton, VA",
                "Newport News, VA",
                "Suffolk, VA",
                "Isle of Wight, VA",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              medicalSpecialty: "HomeHealthCare",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>{children}</body>
      <Script id="scroll-reveal" strategy="afterInteractive">{`
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      `}</Script>
    </html>
  );
}
