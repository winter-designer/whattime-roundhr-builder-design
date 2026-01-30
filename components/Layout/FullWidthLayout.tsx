import React from 'react'

export interface FullWidthLayoutProps {
  children: React.ReactNode
  className?: string
}

const FullWidthLayout: React.FC<FullWidthLayoutProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`w-full max-w-full overflow-x-hidden ${className}`}>
      {children}
    </div>
  )
}

export default FullWidthLayout
