import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
  fill?: string
}

const SVG: FC<Props> = ({ label = undefined, onClick = undefined, fill = '#666' }) => (
  <div data-component="SVG.Lock" onClick={onClick} title={label}>
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
      <path
        d="M17 8H16V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V8H7C5.9 8 5 8.9 5 10V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V10C19 8.9 18.1 8 17 8ZM10 6C10 4.9 10.9 4 12 4C13.1 4 14 4.9 14 6V8H10V6ZM17 20H7V10H17V20ZM12 15C12.55 15 13 14.55 13 14C13 13.45 12.55 13 12 13C11.45 13 11 13.45 11 14C11 14.55 11.45 15 12 15Z"
        fill={fill}
      />
    </svg>
  </div>
)

export default SVG
