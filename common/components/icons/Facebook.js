import * as React from "react"
import theme from "../../../styles/theme"

const Facebook = ({ color, width, height, filled }) => {
  return (
    <>

      {
        filled
          ? (
            <svg
              height={`${height ? height : 15}`}
              width={`${width ? width : 15}`}
              fill="none"
            >
              <path
                className='fill'
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.91 2.14v11.174a1.596 1.596 0 0 1-1.596 1.596h-2.993a.4.4 0 0 1-.399-.399V9.723h1.868a.399.399 0 0 0 .39-.32l.288-1.436a.2.2 0 0 0-.191-.24H9.921V5.133a.2.2 0 0 1 .2-.2h1.995a.399.399 0 0 0 .399-.398V3.338a.399.399 0 0 0-.4-.4h-1.995a2.394 2.394 0 0 0-2.394 2.395v2.394h-.982a.4.4 0 0 0-.399.4v1.197a.4.4 0 0 0 .4.399h.981v4.788a.399.399 0 0 1-.399.4H2.14a1.596 1.596 0 0 1-1.596-1.597V2.14A1.596 1.596 0 0 1 2.14.544h11.174A1.596 1.596 0 0 1 14.91 2.14Z"
                fill="#fff"
              />
            </svg>
          )
          : (
            <svg
              height={`${height ? height : 22}`}
              width={`${width ? width : 11}`}
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.138 22V11.982h3.277l.47-3.908H7.137V5.63c0-1.1.352-1.954 1.873-1.954H11V.133C10.533.133 9.362.01 8.075.01A4.345 4.345 0 0 0 6.16.312a4.506 4.506 0 0 0-1.618 1.11A4.751 4.751 0 0 0 3.52 3.136a4.908 4.908 0 0 0-.242 2.005v2.933H0v3.908h3.277V22h3.861Z"
                fill="#4ABAD9"
              />
            </svg>

          )
      }

      <style jsx>
        {`
          svg {
            path {
              transition: all 0.3s ease-in-out;
            }
            .fill {
              fill: ${color ? color : theme.colors.white};
            }
          }
        `}
      </style>
    </>
  )
}

export default Facebook
