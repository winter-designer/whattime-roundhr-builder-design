'use client'

import React from 'react'

export interface FooterProps {
  companyName: string
  contactInfo: string
  watermark?: {
    text: string
    logo?: string
  }
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  contactInfo,
  watermark,
}) => {
  return (
    <footer className="w-full bg-white border-t border-divider px-[120px] py-[50px] flex flex-col gap-[18px] md:px-[20px] md:py-[30px]">
      <p className="text-[14px] font-semibold text-text-tertiary">
        {companyName}
      </p>
      <p className="text-[14px] font-normal text-text-tertiary leading-[1.7]">
        {contactInfo}
      </p>
      {watermark && (
        <div className="flex items-center gap-[6px] opacity-40">
          <p className="text-[12px] font-normal text-black">
            {watermark.text}
          </p>
          {watermark.logo && (
            <img 
              src={watermark.logo} 
              alt="" 
              className="h-[15px] w-auto"
            />
          )}
        </div>
      )}
    </footer>
  )
}

export default Footer
