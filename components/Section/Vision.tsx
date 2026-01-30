'use client'

import React from 'react'
import TitleSection from './TitleSection'

export interface VisionCard {
  icon?: string
  title: string
  description: string
}

export interface CoreValue {
  title: string
  items: string[]
  summary: string
}

export interface VisionProps {
  caption?: string
  title: string
  description?: string
  cards: VisionCard[]
  coreValues?: CoreValue[]
}

const Vision: React.FC<VisionProps> = ({
  caption,
  title,
  description,
  cards,
  coreValues,
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
      
      {/* Vision Cards - 3 columns */}
      <div className="w-full max-w-[1200px] grid grid-cols-3 gap-[32px] md:grid-cols-1 md:gap-[16px]">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="border border-border rounded-[14px] p-[24px] min-h-[230px] flex flex-col gap-[18px]"
          >
            {card.icon && (
              <div className="w-[52px] h-[52px] overflow-hidden">
                <img src={card.icon} alt="" className="w-full h-full object-contain" />
              </div>
            )}
            <h3 className="text-[20px] font-bold text-black leading-[1.4]">
              {card.title}
            </h3>
            <p className="text-[14px] font-medium text-text-secondary leading-[1.6]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Core Values */}
      {coreValues && coreValues.length > 0 && (
        <div className="w-full max-w-[1200px] grid grid-cols-3 gap-[32px] md:grid-cols-1 md:gap-[24px]">
          <div className="flex items-center">
            <p className="text-[18px] font-bold text-primary">Core Value</p>
          </div>
          
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col gap-[18px]">
              <div className="bg-primary rounded-[8px] px-[10px] py-[18px] text-center">
                <p className="text-[18px] font-bold text-white leading-[1.4]">
                  {value.title}
                </p>
              </div>
              
              {value.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-secondary rounded-[8px] px-[10px] py-[18px] text-center"
                >
                  <p className="text-[18px] font-medium text-black leading-[1.4]">
                    {item}
                  </p>
                </div>
              ))}
              
              <div className="bg-white rounded-[8px] px-[10px] py-[18px] text-center">
                <p className="text-[18px] text-text-secondary leading-[1.4]">
                  {value.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Vision
