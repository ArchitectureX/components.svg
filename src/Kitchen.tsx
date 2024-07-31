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
    data-component="SVG.Kitchen"
    onClick={onClick}
    title={label}
    className={className}
    style={onClick ? { cursor: 'pointer' } : {}}
  >
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 9.5H35C35.552 9.5 36 9.948 36 10.5V34.5C36 35.052 35.552 35.5 35 35.5H11C10.448 35.5 10 35.052 10 34.5V10.5C10 9.948 10.448 9.5 11 9.5Z"
        stroke={alternativeColor || color}
        strokeWidth="2"
      />
      <path d="M36 17.5H10" stroke={alternativeColor || color} strokeWidth="2" />
      <path
        d="M32 12.5C32.552 12.5 33 12.948 33 13.5C33 14.052 32.552 14.5 32 14.5C31.448 14.5 31 14.052 31 13.5C31 12.948 31.448 12.5 32 12.5Z"
        fill={alternativeColor || color}
      />
      <path
        d="M26 12.5C26.552 12.5 27 12.948 27 13.5C27 14.052 26.552 14.5 26 14.5C25.448 14.5 25 14.052 25 13.5C25 12.948 25.448 12.5 26 12.5Z"
        fill={alternativeColor || color}
      />
      <path
        d="M20 12.5C20.552 12.5 21 12.948 21 13.5C21 14.052 20.552 14.5 20 14.5C19.448 14.5 19 14.052 19 13.5C19 12.948 19.448 12.5 20 12.5Z"
        fill={alternativeColor || color}
      />
      <path
        d="M14 12.5C14.552 12.5 15 12.948 15 13.5C15 14.052 14.552 14.5 14 14.5C13.448 14.5 13 14.052 13 13.5C13 12.948 13.448 12.5 14 12.5Z"
        fill={alternativeColor || color}
      />
      <path d="M14 21.5H32V31.5H14V21.5Z" stroke={alternativeColor || color} strokeWidth="2" />
      <path d="M36 17.5H10" stroke={alternativeColor || color} strokeWidth="2" />{' '}
    </svg>
  </div>
)

export default SVG
