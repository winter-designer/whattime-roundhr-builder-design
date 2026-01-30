'use client'

import React from 'react'
import { Icon } from 'phosphor-react'

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'secondary'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: Icon
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary bg-transparent hover:bg-gray-100 focus:ring-primary',
    secondary: 'bg-secondary text-gray-700 hover:bg-gray-200 focus:ring-gray-400',
  }
  
  const sizeStyles = {
    small: 'px-4 py-2 text-sm h-8',
    medium: 'px-6 py-3 text-base h-10',
    large: 'px-8 py-4 text-lg h-12',
  }
  
  const iconSpacing = Icon ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : ''
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${iconSpacing} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} />}
    </button>
  )
}

export default Button
