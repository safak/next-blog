import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/component/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "David's Blog ",
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider >
          <ThemeProvider >
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
            </div>
        </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
