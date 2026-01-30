'use client'

import React from 'react'
import { Button } from '@/components/Button'

export interface FullBannerProps {
  backgroundImage?: string
  title: string
  buttonText?: string
  onButtonClick?: () => void
  overlay?: boolean
}

const FullBanner: React.FC<FullBannerProps> = ({
  backgroundImage,
  title,
  buttonText,
  onButtonClick,
  overlay = true,
}) => {
  return (
    <section className="relative w-full px-[120px] py-[90px] flex items-center justify-center gap-[34px] md:px-[20px] md:py-[60px] md:flex-col md:gap-[24px]">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/50" />
          )}
        </div>
      )}
      
      {/* Content */}
      <h2 className="relative z-10 text-[32px] font-bold text-white flex-1 md:text-[24px] md:text-center">
        {title}
      </h2>
      
      {buttonText && (
        <Button 
          variant="primary" 
          size="large"
          onClick={onButtonClick}
          className="relative z-10"
        >
          {buttonText}
        </Button>
      )}
    </section>
  )
}

export default FullBanner
