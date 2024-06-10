import React, { FC } from 'react'

type Props = {
  alternativeColor?: string
  color?: string
  height?: string
  label?: string
  onClick?: any
  size?: string
  width?: string
}

const SVG: FC<Props> = ({
  alternativeColor = '',
  color = '#666',
  height = '24px',
  label = undefined,
  onClick = undefined,
  size = '',
  width = '24px'
}) => (
  <div
    data-component="SVG.Smoke"
    onClick={onClick}
    title={label}
    style={onClick ? { cursor: 'pointer' } : {}}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={alternativeColor || color}
      viewBox="0 0 512 512"
      width={size || width}
      height={size || height}
    >
      <path
        fill={`var(--ci-primary-color, ${alternativeColor || color})`}
        d="M16,240V360H360V240H16Zm312,88H48V272H328Z"
        className="ci-primary"
      />
      <rect
        width="32"
        height="120"
        x="384"
        y="240"
        fill={`var(--ci-primary-color, ${alternativeColor || color})`}
        className="ci-primary"
      />
      <rect
        width="32"
        height="120"
        x="440"
        y="240"
        fill={`var(--ci-primary-color, ${alternativeColor || color})`}
        className="ci-primary"
      />
      <path
        fill={`var(--ci-primary-color, ${alternativeColor || color})`}
        d="M385.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46Z"
        className="ci-primary"
      />
      <path
        fill={`var(--ci-primary-color, ${alternativeColor || color})`}
        d="M457.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46Z"
        className="ci-primary"
      />
    </svg>
  </div>
)

export default SVG
