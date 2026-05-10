import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor Payment Compliance Tracker',
  description: 'Track 1099 contractor payments and tax compliance. Monitor thresholds, ensure proper classification, and generate compliance reports automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3511ef8-a13d-4cbb-8b1a-20e97ba2c7e9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
