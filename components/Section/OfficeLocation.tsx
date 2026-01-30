'use client'

import React from 'react'
import TitleSection from './TitleSection'
import { MapPin, Copy } from 'phosphor-react'

export interface OfficeLocationProps {
  caption?: string
  title: string
  description?: string
  images?: string[]
  officeName: string
  address: string
  mapImage?: string
}

const OfficeLocation: React.FC<OfficeLocationProps> = ({
  caption,
  title,
  description,
  images,
  officeName,
  address,
  mapImage,
}) => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address)
  }
  
  return (
    <section className="w-full px-[120px] pb-[110px] flex flex-col gap-[70px] items-center md:px-[20px] md:pb-[60px] md:gap-[40px]">
      {/* Divider */}
      <div className="w-full max-w-[1200px] h-[1px] bg-divider" />
      
      <TitleSection 
        caption={caption}
        title={title} 
        description={description}
      />
      
      {/* Office Images - 2 columns */}
      {images && images.length > 0 && (
        <div className="w-full max-w-[1200px] grid grid-cols-2 gap-[32px] md:grid-cols-1 md:gap-[16px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="h-[290px] rounded-[16px] overflow-hidden md:h-[200px]"
            >
              <img 
                src={image} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Address Info */}
      <div className="w-full max-w-[1200px] flex flex-col gap-[24px]">
        <div className="border border-border rounded-[8px] px-[18px] py-[20px] flex flex-col gap-[10px]">
          <div className="flex items-center gap-[4px]">
            <MapPin size={16} weight="fill" className="text-primary" />
            <p className="text-[16px] font-semibold text-black md:text-[14px]">
              {officeName}
            </p>
            <button onClick={handleCopyAddress} className="opacity-80 hover:opacity-100">
              <Copy size={16} weight="regular" className="text-black" />
            </button>
          </div>
          <p className="text-[16px] font-normal text-text-muted leading-[1.5] md:text-[14px]">
            {address}
          </p>
        </div>
        
        {/* Map */}
        {mapImage && (
          <div className="w-full h-[429px] rounded-[8px] overflow-hidden md:h-[300px]">
            <img 
              src={mapImage} 
              alt="지도" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default OfficeLocation
