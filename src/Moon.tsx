import React, { FC } from 'react'

type Props = {
  className?: string
  label?: string
  onClick?: any
  stroke?: string
}

const SVG: FC<Props> = ({
  className = undefined,
  label = undefined,
  onClick = undefined,
  stroke = 'black'
}) => (
  <div data-component="SVG.Moon" className={className} onClick={onClick} title={label}>
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" x2="3" y1="12" y2="12"></line>
      <line x1="21" x2="23" y1="12" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  </div>
)

export default SVG
