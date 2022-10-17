import CountUp from 'react-countup';
import theme from "../../../styles/theme"

export default function Average() {
  return (
    <>
      <div className="averageBox">
        <div className="contentBox">

          <div className="text">
            <h2>Coopcycle <br /> en el mundo</h2>
          </div>

          <div className="line"></div>

          <div className="block">
            <h1><CountUp start={0} end={12} duration={2} />+</h1>
            <p>Países</p>
          </div>

          <div className="line"></div>

          <div className="block">
            <h1><CountUp start={44950} end={45000} duration={2} />+</h1>
            <p>Trabajadores/as</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .averageBox{
            width: 880px;
            height: 172px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 69px;

            .contentBox{
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 2.5rem;

              h1{
                  font-family: 'Passion One', sans-serif;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 100px;
                  line-height: 110px;
                  color: ${theme.colors.lightSecondary};
                  margin-bottom: -15px;
                }

              .text{

                h2{
                  letter-spacing: 0.02em;
                }
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
                height: 100%;
                border-left: 2px solid rgba(0, 0, 0, 0.2);
              }
            }

          }
        `}
      </style>
    </>
  )
}