import theme from "../../../styles/theme"

export default function Average() {
  return (
    <>
      <div className="averageBox">
        <div className="first">
          <h1 className="number1">12+</h1>
          <p>Países</p>
        </div>

        <div className="line"></div>

        <div className="block">
          <h1>500+</h1>
          <p>Entregas realizadas</p>
        </div>

        <div className="line"></div>

        <div className="block">
          <h1>45.500+</h1>
          <p>Trabajadores/as</p>
        </div>
      </div>
      <style jsx>
        {`
          .averageBox{
            display: flex;
            flex-direction: row;
            align-items: baseline;
            gap: 20px;
            h1{
                font-family: 'Passion One', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 100px;
                line-height: 110px;
                color: ${theme.colors.white};
                -webkit-text-stroke: 1px ${theme.colors.secondary};
                margin-bottom: -15px;
              }

            .first{
              display: flex;
              flex-direction: column;
              align-items: center;
              color: ${theme.colors.third};

              .number1{
                color: ${theme.colors.third};
                -webkit-text-stroke: 0;
              }
            }
            .block{
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .line{
              width: 2px;
              height: 47px;
              border-left: 2px solid ${theme.colors.gray};
            }
          }
        `}
      </style>
    </>
  )
}