import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Giridhar M | Portfolio',
  description: 'Software Engineer Portfolio',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
