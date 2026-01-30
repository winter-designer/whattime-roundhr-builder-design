'use client'

import React from 'react'
import TitleSection from './TitleSection'

export interface WorkStyleCard {
  number: string
  title: string
  subtitle: string
  description: string
}

export interface WorkStyleCTA {
  title: string
  description: string
}

export interface WorkStyleProps {
  caption?: string
  title: string
  description?: string
  cards: WorkStyleCard[]
  cta?: WorkStyleCTA
}

const WorkStyle: React.FC<WorkStyleProps> = ({
  caption,
  title,
  description,
  cards,
  cta,
}) => {
  return (
    <section className="w-full px-[120px] pb-[110px] flex flex-col gap-[70px] items-center md:px-[20px] md:pb-[60px] md:gap-[40px]">
      {/* Divider */}
      <div className="w-full max-w-[1200px] h-[1px] bg-divider" />
      
      <TitleSection 
        caption={caption}
        title={title} 
        description={description}
      />
      
      {/* Work Style Cards - 4 columns */}
      <div className="w-full max-w-[1200px] grid grid-cols-4 gap-[32px] md:grid-cols-1 md:gap-[16px]">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-secondary-light rounded-[14px] p-[24px] min-h-[340px] flex flex-col gap-[18px] md:min-h-0"
          >
            <p className="text-[24px] font-bold text-primary">
              {card.number}
            </p>
            <h3 className="text-[20px] font-bold text-black">
              {card.title}
            </h3>
            <p className="text-[14px] font-medium text-black leading-[1.4]">
              {card.subtitle}
            </p>
            <div className="w-full h-[1px] bg-primary opacity-20" />
            <p className="text-[14px] font-medium text-text-secondary leading-[1.6]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* CTA Banner */}
      {cta && (
        <div className="w-full max-w-[1200px] bg-black/90 rounded-[15px] p-[42px] flex flex-col gap-[18px] md:p-[24px]">
          <h3 className="text-[28px] font-bold text-white md:text-[20px]">
            {cta.title}
          </h3>
          <p className="text-[16px] font-semibold text-white md:text-[14px]">
            {cta.description}
          </p>
        </div>
      )}
    </section>
  )
}

export default WorkStyle
