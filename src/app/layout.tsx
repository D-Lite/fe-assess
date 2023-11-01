import './globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <div className='flex mx-2 lg:mx-72'>
          {children}
          </div>
        </body>
      </html>
    )
  }