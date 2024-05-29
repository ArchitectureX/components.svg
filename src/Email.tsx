import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
  stroke?: string
}

const SVG: FC<Props> = ({ label = undefined, onClick = undefined, stroke = '#666' }) => (
  <div data-component="SVG.Email" onClick={onClick} title={label}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="0.75" y="0.5" width="19" height="13" stroke={stroke} />
      <path d="M4.25 4L10.25 9L16.25 4" stroke={stroke} strokeLinecap="square" />
      <path d="M7.25 7L4.25 10" stroke={stroke} strokeLinecap="square" />
      <path d="M16.25 10L13.25 7" stroke={stroke} strokeLinecap="square" />
    </svg>
  </div>
)

export default SVG
