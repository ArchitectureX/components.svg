import React, { FC } from 'react'

type Props = {
  label?: string
  onClick?: any
  color?: string
}

const SVG: FC<Props> = ({ label = undefined, onClick = undefined, color = '#666' }) => (
  <div data-component="SVG.Wifi" onClick={onClick} title={label}>
    <svg
      width="24px"
      height="24px"
      viewBox="0 -1.5 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-423.000000, -3604.000000)" fill={color}>
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M372.109921,3452.95655 L372.804851,3453.69409 C373.189176,3454.10197 373.811369,3454.10197 374.194711,3453.69409 L374.889641,3452.95655 C374.121974,3452.14182 372.877588,3452.14182 372.109921,3452.95655 M369.330202,3450.00642 L370.720061,3451.48148 C372.252446,3449.85411 374.747116,3449.85411 376.280483,3451.48148 L377.670343,3450.00642 C375.367344,3447.56118 371.633201,3447.56118 369.330202,3450.00642 M379.711884,3447.83867 L379.060203,3448.5303 C375.989537,3445.27139 371.011008,3445.27139 367.939359,3448.5303 L367.287678,3447.83867 C366.870917,3447.39636 366.913183,3446.66404 367.374176,3446.27285 C370.948101,3443.24238 376.052444,3443.24238 379.626369,3446.27285 C380.087362,3446.66404 380.128645,3447.39636 379.711884,3447.83867"
              id="wifi-[#1029]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
)

export default SVG
