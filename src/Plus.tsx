import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
  stroke?: string
}

const SVG: FC<Props> = ({ label = undefined, onClick = undefined, stroke = '#666' }) => (
  <div data-component="SVG.Plus" onClick={onClick} title={label}>
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18M12 6V18"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
)

export default SVG
