import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
  fill?: string
}

const SVG: FC<Props> = ({ label = undefined, onClick = undefined, fill = '#666' }) => (
  <div data-component="SVG.Cabin" onClick={onClick} title={label}>
    <svg
      fill={fill}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19,3a1,1,0,0,0-2,0V6L12,2,2,10H4V22h6V18a2,2,0,0,1,4,0v4h6V10h2L19,7.6ZM8,18H6V16H8Zm0-4H6V12H8Zm6,0H10V12h4Zm4,4H16V16h2Zm0-4H16V12h2Z" />
    </svg>
  </div>
)

export default SVG