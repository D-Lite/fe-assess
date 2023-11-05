'use client'
import Footer from '@/components/Footer'
import './globals.css'
import ReduxProvider from './store/ReduxProvider'
import Header from '@/components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <div className='flex w-full px-0 lg:px-24 2xl:px-72 overflow-x-hidden'>
            {children}
          </div>
          <Footer />
        </ReduxProvider>

      </body>
    </html>
  )
}

