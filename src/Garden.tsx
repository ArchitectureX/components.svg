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
  className = undefined,
  ...svgProps
}) => (
  <div
    data-component="SVG.Garden"
    onClick={onClick}
    title={label}
    className={className}
    style={onClick ? { cursor: 'pointer' } : {}}
    {...svgProps}
  >
    <svg
      width={size || width}
      height={size || height}
      viewBox="-3 0 16 16"
      fill={alternativeColor || color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.5,9h-4V5.93A2.28,2.28,0,0,0,6,5.72L7.12,6.83A.5.5,0,0,0,7.47,7a.51.51,0,0,0,.36-.15.51.51,0,0,0,0-.71L6.72,5a2.28,2.28,0,0,0,.21-.51H8.5a.5.5,0,0,0,0-1H6.93A2.28,2.28,0,0,0,6.72,3L7.83,1.88a.51.51,0,0,0,0-.71.51.51,0,0,0-.71,0L6,2.28a2.28,2.28,0,0,0-.51-.21V.5a.5.5,0,0,0-1,0V2.07A2.28,2.28,0,0,0,4,2.28L2.88,1.17a.51.51,0,0,0-.71,0,.51.51,0,0,0,0,.71L3.28,3a2.28,2.28,0,0,0-.21.51H1.5a.5.5,0,0,0,0,1H3.07A2.28,2.28,0,0,0,3.28,5L2.17,6.12a.51.51,0,0,0,0,.71A.51.51,0,0,0,2.53,7a.5.5,0,0,0,.35-.15L4,5.72a2.28,2.28,0,0,0,.51.21V9H.5a.5.5,0,0,0,0,1h.58L2,15.58A.5.5,0,0,0,2.5,16h5A.5.5,0,0,0,8,15.58L8.92,10H9.5a.5.5,0,0,0,0-1ZM4,4A1,1,0,1,1,5,5,1,1,0,0,1,4,4ZM7.08,15H2.92l-.83-5H7.91Z" />
        </g>
      </g>
    </svg>
  </div>
)

export default SVG
