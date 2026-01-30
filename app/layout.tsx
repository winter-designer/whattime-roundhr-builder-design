import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Builder Landing',
  description: '반응형 랜딩페이지 빌더',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="w-full max-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
