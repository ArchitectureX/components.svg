import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
}

const SVG: FC<Props> = ({ label = undefined, onClick = undefined }) => (
  <div data-component="SVG.Email" onClick={onClick} title={label}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
        fill="black"
      />
    </svg>
  </div>
)

export default SVG
