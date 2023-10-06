import './globals.css'
import type { Metadata } from 'next'
import Modal from '@/components/Modal'


export const metadata: Metadata = {
  title: 'Trello 2',
  description: 'Generated by Valentin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">
        {children}
        <Modal/>
        </body>
    </html>
  )
}
