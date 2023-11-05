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
      <body className=''>
        <ReduxProvider>
          <Header />
          <div className='flex mx-0 lg:mx-24 2xl:mx-72 overflow-x-auto'>
            {children}
          </div>
          <Footer />
        </ReduxProvider>

      </body>
    </html>
  )
}

