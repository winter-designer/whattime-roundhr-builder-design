'use client'

import React from 'react'
import { Button } from '@/components/Button'

export interface TopBannerProps {
  backgroundImage?: string
  title: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
}

const TopBanner: React.FC<TopBannerProps> = ({
  backgroundImage,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center px-[120px] py-[110px] md:px-[20px] md:py-[60px]">
      {/* Background Image */}
      {backgroundImage && (
        <img 
          src={backgroundImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[18px] w-full max-w-[1200px]">
        <h1 className="text-[46px] font-bold text-black leading-[1.4] md:text-[28px]">
          {title}
        </h1>
        
        {description && (
          <p className="text-[18px] font-normal text-text-muted leading-[1.6] md:text-[16px]">
            {description}
          </p>
        )}
        
        {buttonText && (
          <Button 
            variant="primary" 
            size="large"
            onClick={onButtonClick}
            className="w-fit mt-2"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}

export default TopBanner
