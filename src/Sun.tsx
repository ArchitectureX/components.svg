import React, { FC } from 'react'

type Props = {
  className?: string
  label?: string
  onClick?: any
  color?: string
}

const SVG: FC<Props> = ({
  className = undefined,
  label = undefined,
  onClick = undefined,
  color = '#666'
}) => (
  <div data-component="SVG.Sun" className={className} onClick={onClick} title={label}>
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </div>
)

export default SVG
