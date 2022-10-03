import CountUp from 'react-countup';
import theme from "../../../styles/theme"

export default function Average() {
  return (
    <>
      <div className="averageBox">
        <div className="contentBox">
          <div className="block">
            <h1><CountUp start={400} end={500} duration={3} />+</h1>
            <p>Entregas Realizadas</p>
          </div>

          <div className="line"></div>

          <div className="block">
            <h1><CountUp start={44900} end={45000} duration={3} />+</h1>
            <p>Trabajadores/as</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .averageBox{
            width: 600px;
            height: 173px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 69px;

            .contentBox{
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
                  color: ${theme.colors.lightSecondary};
                  margin-bottom: -15px;
                }

              .block{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              
                .countBox{
                  display: flex;
                  justify-content: flex-end;
                  flex-direction: row;
                  gap: 15px;

                  .singBox{
                  }
                }
              }
              .line{
                width: 2px;
                height: 47px;
                border-left: 2px solid ${theme.colors.gray};
              }
            }

          }
        `}
      </style>
    </>
  )
}