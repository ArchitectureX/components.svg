import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
  color?: string
}

const SVG: FC<Props> = ({ label = undefined, onClick = undefined, color = '#666' }) => (
  <div data-component="SVG.Email" onClick={onClick} title={label}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 1920 1920"
      fill={color}
    >
      <path
        d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
        fill-rule="evenodd"
      />
    </svg>
  </div>
)

export default SVG
