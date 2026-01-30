'use client'

import React from 'react'
import TitleSection from './TitleSection'
import { Clock, Coins, GraduationCap, Cookie } from 'phosphor-react'

export interface BenefitCard {
  icon: 'clock' | 'coins' | 'graduation' | 'cookie'
  title: string
  description: string
}

export interface BenefitsProps {
  caption?: string
  title: string
  description?: string
  cards: BenefitCard[]
  images?: string[]
}

const iconMap = {
  clock: Clock,
  coins: Coins,
  graduation: GraduationCap,
  cookie: Cookie,
}

const Benefits: React.FC<BenefitsProps> = ({
  caption,
  title,
  description,
  cards,
  images,
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
      
      {/* Benefit Cards - 4 columns */}
      <div className="w-full max-w-[1200px] grid grid-cols-4 gap-[32px] md:grid-cols-2 md:gap-[16px]">
        {cards.map((card, index) => {
          const Icon = iconMap[card.icon]
          return (
            <div 
              key={index} 
              className="bg-secondary rounded-[12px] p-[26px] min-h-[184px] flex flex-col gap-[16px]"
            >
              <Icon size={32} weight="regular" className="text-primary" />
              <h3 className="text-[20px] font-bold text-black md:text-[16px]">
                {card.title}
              </h3>
              <p className="text-[14px] font-medium text-text-secondary leading-[1.6] md:text-[12px]">
                {card.description}
              </p>
            </div>
          )
        })}
      </div>
      
      {/* Image Slider */}
      {images && images.length > 0 && (
        <div className="w-full max-w-[1200px] overflow-x-auto py-[12px]">
          <div className="flex gap-[40px] md:gap-[16px]">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[325px] h-[180px] rounded-[10px] overflow-hidden md:w-[250px] md:h-[140px]"
              >
                <img 
                  src={image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Benefits
