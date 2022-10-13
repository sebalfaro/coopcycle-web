import { infoCardsAlternative } from "../../../common/assets/data/infoCardsAlternative";
import Lottie from "lottie-react";
import character2 from '../../../common/assets/images/svgImages/Animacion_Derechos_V2.json'
import InfoCard from "../../../common/components/InfoCard/InfoCard";

export default function AlternativeGrid() {
  return (
    <>
      <section className="alternativeBox">
        <div className="box">
          <div className="imgBox">
            <Lottie loop={true} animationData={character2} style={{ height: '100%' }} />
          </div>
          <div className="contentBox">
            <div className="titleBox">
              <h1>Somos una alternativa <br /> a las plataformas privadas</h1>
            </div>
            <div className="infoBox">
              {
                infoCardsAlternative.map((e, index) => {
                  return (
                    <InfoCard number={index + 1} title={e.title} content={e.content} key={e.title + "key"} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .alternativeBox{
            width: 100%;
            min-height: 65vh;
              
              .imgBox{
                position: relative;
                grid-column: 2/6;
                height: 522px;
              }
              
              .contentBox{
                grid-column: 6/10;
                display: flex; 
                flex-direction: column;
                gap: 50px;
                width: 470px;

                .titleBox{
                  h1{
                    font-style: normal;
                    font-weight: 900;
                    font-size: 40px;
                    line-height: 44px;
                  }
                }

                .infoBox{
                  display: flex; 
                  flex-direction: column;
                  width: 100%;
                }
              }

            
          }
        `}
      </style>
    </>
  )
}