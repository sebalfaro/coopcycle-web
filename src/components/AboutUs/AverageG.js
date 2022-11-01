import { useEffect, useState } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import theme from "../../../styles/theme"

export default function AverageG() {

  // const [position, setPosition] = useState(false);
  // const scroll = window.scrollY;
  // console.log(scroll);

  // useEffect(() => {
  //   if(scroll === 1000){
  //     setPosition(true)
  //   }
  // }, [scroll])


  // useCountUp({
  //   ref: "countries",
  //   start: 0,
  //   end: 12,
  //   useEasing: true,
  //   enableScrollSpy: true,
  // });

  // useCountUp({
  //   ref: "workers",
  //   start: 45950,
  //   end: 45000,
  //   enableScrollSpy: true,
  //   useEasing: true,
  // });

  return (
    <>
      <div className="gridBox">
        <div className="averageBox">
          <div className="contentBox">

            <div className="text">
              <h2>Coopcycle <br /> en el mundo</h2>
            </div>

            <div className="line"></div>

            <div className="content1">
              <div className="block1">
                <h1 id='countries'><CountUp start={0} end={12} duration={2} enableScrollSpy /></h1> <h1>+</h1>
              </div>
              <p>Países</p>
            </div>

            <div className="line"></div>

            <div className="content2">
              <div className="block2">
                <h1 id='workers'><CountUp start={44950} end={45000} duration={2} enableScrollSpy />+</h1>
              </div>
              <p>Trabajadores/as</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gridBox{
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            column-gap: 2rem;
            width: 100%;
            height: 172px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 69px;  

            @media (max-width: ${theme.breakPoints.screenMd}) {
              grid-template-columns: repeat(6, 1fr);
              gap: 0;
            }


            .averageBox{
              grid-column: 1 / span 8;
              width: 100%;
              height: 100%;
              
              @media (max-width: ${theme.breakPoints.screenMd}) {
                grid-column: 1 / span 6;
              }

              .contentBox{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 2.5rem;
                width: 100%;
                height: 100%;

                h1{
                    font-family: 'Passion One', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 6.25rem;
                    line-height: 110px;
                    color: ${theme.colors.lightSecondary};
                    margin-bottom: -15px;
                  }

                .text{
                  h2{
                    letter-spacing: 0.02em;
                  }
                }
                .block1{
                  width: 100px;
                  display: flex;
                  flex-direction: row;
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
                .block2{
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  width: 270px;
                
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
                  height: 60%;
                  border-left: 2px solid rgba(0, 0, 0, 0.2);
                }

                @media (max-width: ${theme.breakPoints.screenMd}) {
                    gap: 0.5rem;
                    
                    h1 {
                      font-size: 3.25rem;
                    } 
                    .text {
                      h2 {
                        font-size: 1.25rem;
                      }
                    }
                    .block1{
                      width: 70px;
                    }
                    .block2{
                      width: 150px;
                    }
                }
              }
            }
          }
        `}
      </style>
    </>
  )
}