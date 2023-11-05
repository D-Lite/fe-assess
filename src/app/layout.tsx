'use client'
import Footer from '@/components/Footer'
import './globals.css'
import ReduxProvider from './store/ReduxProvider'
import Header from '@/components/Header'
import { Suspense } from 'react'
import ClientOnly from '@/components/ClientOnly'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Suspense fallback={<div className='flex items-center justify-center w-full min-h-[60vh]'>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect className="spinner_9y7u" x="1" y="1" rx="1" width="10" height="10" />
                <rect className="spinner_9y7u spinner_DF2s" x="1" y="1" rx="1" width="10" height="10" />
                <rect className="spinner_9y7u spinner_q27e" x="1" y="1" rx="1" width="10" height="10" />
            </svg></div>}>
          <Header />

          <div className='flex w-full px-0 lg:px-24 2xl:px-72 overflow-x-hidden'>
            {children}
          </div>
          <Footer />

            </Suspense>
        </ReduxProvider>
      </body>
    </html>
  )
}

