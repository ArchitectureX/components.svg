import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
  color?: string
  size?: string
  alternativeColor?: string
}

const SVG: FC<Props> = ({
  label = undefined,
  onClick = undefined,
  color = '#666',
  alternativeColor = '',
  size = '24px'
}) => (
  <div data-component="SVG.AC" onClick={onClick} title={label}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={alternativeColor || color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="primary"
        d="M20,17H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1v8A1,1,0,0,1,20,17Zm-3-2H7v2H17Zm-4-4h4"
        fill="none"
        stroke={alternativeColor || color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  </div>
)

export default SVG
