import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Md. Mizanur Rahman - IT Professional & Digital Twin',
  description: 'Master of Applied IT candidate with 5+ years in IT support, analytics, and program management. Featuring AI-powered chat to learn about my professional background.',
  keywords: ['IT Professional', 'ServiceNow', 'BigQuery', 'AWS', 'MERN Stack', 'Analytics', 'Digital Twin'],
  authors: [{ name: 'Md. Mizanur Rahman' }],
  openGraph: {
    title: 'Md. Mizanur Rahman - IT Professional',
    description: 'Chat with my AI to learn about my professional background and experience',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}