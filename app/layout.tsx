import type { Metadata } from 'next'
import { Inter, Poppins, Nunito } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
const nunito = Nunito({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-nunito'
})

export const metadata: Metadata = {
  title: 'Cursor Brief - Waitlist',
  description: 'Join our waitlist for customers and cleaners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
