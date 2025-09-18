import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/shared/TopBar";
import Footer from "@/components/shared/Footer";
import { ClerkProvider, 
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton, } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phoenixus",
  description: "AI-Powered Digital Wellbeing Platform and Internet addiction recovery tool ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider
     publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
     
     >
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <TopBar/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
