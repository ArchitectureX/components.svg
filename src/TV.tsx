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
  <div data-component="SVG.TV" onClick={onClick} title={label}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 21L12 17L17 21M7.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17Z"
        stroke={alternativeColor || color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
)

export default SVG
