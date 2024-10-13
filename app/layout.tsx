// The base layout of our application

import type { Metadata } from "next";
// import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex"
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// className={`${geistSans.variable} ${geistMono.variable} antialiased`}

export const metadata: Metadata = {
  title: "PictureIt",
  description: "Your AI-based image generator",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Using Clerk Authentication, follow latest documentation
        // All Clerk hooks and components must be children of the ClerkProvider component.
        // Can control which content signed in and signed out users can see with Clerk's prebuilt components.
        <ClerkProvider appearance={{ variables: { colorPrimary: "#124E66"}}}>
            <html lang="en">
                {/* about cn -> type cn and then click the first option, this will create a new libs/utils file */}
                <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
