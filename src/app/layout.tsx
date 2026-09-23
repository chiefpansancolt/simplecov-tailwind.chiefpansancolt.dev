import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

const siteUrl = 'https://simplecov-tailwind.chiefpansancolt.dev'
const siteDescription =
  'Getting started with using Simplecov Tailwindcss in a Ruby project.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Simplecov Tailwindcss Docs',
    default: 'Simplecov Tailwindcss - Ruby gem documentation',
  },
  description: siteDescription,
  keywords: [
    'Simplecov',
    'Ruby',
    'Ruby on Rails',
    'Tailwindcss',
    'Simplecov Tailwindcss',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Simplecov Tailwindcss',
    title: 'Simplecov Tailwindcss - Ruby gem documentation',
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simplecov Tailwindcss - Ruby gem documentation',
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'Simplecov Tailwindcss',
  description: siteDescription,
  codeRepository: 'https://github.com/chiefpansancolt/simplecov-tailwindcss',
  programmingLanguage: 'Ruby',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
