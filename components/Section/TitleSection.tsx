'use client'

import React from 'react'

export interface TitleSectionProps {
  caption?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

const TitleSection: React.FC<TitleSectionProps> = ({
  caption,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  
  return (
    <div className={`flex flex-col gap-[18px] w-full ${alignClass} ${className}`}>
      {caption && (
        <p className="text-[18px] font-bold text-primary leading-none md:text-[16px]">
          {caption}
        </p>
      )}
      <h2 className="text-[32px] font-bold text-black leading-[1.5] md:text-[24px]">
        {title}
      </h2>
      {description && (
        <p className="text-[16px] font-normal text-text-secondary leading-[1.7] md:text-[14px]">
          {description}
        </p>
      )}
    </div>
  )
}

export default TitleSection
