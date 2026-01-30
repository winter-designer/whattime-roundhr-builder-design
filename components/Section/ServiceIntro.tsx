'use client'

import React from 'react'
import TitleSection from './TitleSection'
import { Button } from '@/components/Button'
import { ChartLine, ShieldCheck, RocketLaunch } from 'phosphor-react'

export interface ServiceItem {
  image: string
  title: string
  description: string
}

export interface FeatureItem {
  icon: 'chart' | 'shield' | 'rocket'
  title: string
}

export interface ServiceIntroProps {
  caption?: string
  title: string
  description?: string
  services: ServiceItem[]
  features?: FeatureItem[]
  buttonText?: string
  onButtonClick?: () => void
}

const iconMap = {
  chart: ChartLine,
  shield: ShieldCheck,
  rocket: RocketLaunch,
}

const ServiceIntro: React.FC<ServiceIntroProps> = ({
  caption,
  title,
  description,
  services,
  features,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="w-full px-[120px] py-[110px] flex flex-col gap-[70px] items-center md:px-[20px] md:py-[60px] md:gap-[40px]">
      <TitleSection 
        caption={caption}
        title={title} 
        description={description}
        align="center"
      />
      
      {/* Services Grid - 2 columns */}
      <div className="w-full max-w-[1200px] grid grid-cols-2 gap-[32px] md:grid-cols-1 md:gap-[24px]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-[18px]">
            <div className="h-[290px] rounded-[16px] overflow-hidden md:h-[200px]">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[24px] font-bold text-black pt-[14px] pb-[2px] md:text-[20px]">
              {service.title}
            </h3>
            <p className="text-[14px] font-medium text-text-secondary leading-[1.6]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Features Grid - 3 columns */}
      {features && features.length > 0 && (
        <div className="w-full max-w-[1200px] grid grid-cols-3 gap-[32px] md:grid-cols-1 md:gap-[16px]">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <div 
                key={index} 
                className="bg-primary rounded-[16px] px-[30px] py-[60px] flex flex-col items-center justify-center gap-[18px] relative md:py-[40px]"
              >
                <Icon size={140} weight="regular" className="text-white opacity-30 absolute md:size-[80px]" />
                <p className="text-[22px] font-bold text-white text-center leading-[1.5] relative z-10 md:text-[18px]">
                  {feature.title}
                </p>
              </div>
            )
          })}
        </div>
      )}
      
      {buttonText && (
        <Button 
          variant="secondary" 
          size="large"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </section>
  )
}

export default ServiceIntro
