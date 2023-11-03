'use client'
import './globals.css'
import ReduxProvider from './store/ReduxProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className='flex mx-2 lg:mx-72'>
            {children}
          </div>
        </ReduxProvider>

      </body>
    </html>
  )
}

