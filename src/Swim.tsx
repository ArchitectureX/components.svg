import React, { FC } from 'react'

type Props = {
  alternativeColor?: string
  color?: string
  height?: string
  label?: string
  onClick?: any
  size?: string
  width?: string
  className?: string
}

const SVG: FC<Props> = ({
  alternativeColor = '',
  color = '#666',
  height = '24px',
  label = undefined,
  onClick = undefined,
  size = '',
  width = '24px',
  className = undefined
}) => (
  <div
    data-component="SVG.Swim"
    onClick={onClick}
    title={label}
    className={className}
    style={onClick ? { cursor: 'pointer' } : {}}
  >
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill={alternativeColor || color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke={alternativeColor || color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11,13 C11.5,13.5 13.1299859,12.8876287 14.2620192,12.5 C15.7222222,12 17.5,12.5 17,12 C15.3609614,10.3609614 15,10 15,10 C15,10 10.5,12.5 11,13 Z M2,20 C4,20 5,19 7,19 C9,19 10,20 12,20 C14,20 15,19 17,19 C19,19 20,20 22,20 M2,16 C4,16 5,15 7,15 C9,15 10,16 12,16 C14,16 15,15 17,15 C19,15 20,16 22,16 M17.5,4 L12.2222222,7 L15.5,10.5 L12,12 M19.2222222,10 C19.774507,10 20.2222222,9.55228475 20.2222222,9 C20.2222222,8.44771525 19.774507,8 19.2222222,8 C18.6699375,8 18.2222222,8.44771525 18.2222222,9 C18.2222222,9.55228475 18.6699375,10 19.2222222,10 Z"
      />
    </svg>
  </div>
)

export default SVG
