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
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={alternativeColor || color}
        d="M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
      />
    </svg>
  </div>
)

export default SVG
