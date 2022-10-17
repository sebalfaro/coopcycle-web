import { infoCardsAlternative } from "../../../common/assets/data/infoCardsAlternative";
import Lottie from "lottie-react";
import character2 from '../../../common/assets/images/svgImages/Animacion_Derechos_V2.json'
import InfoCard from "../../../common/components/InfoCard/InfoCard";

export default function AlternativeGrid() {
  return (
    <>
      <section id="derechos" className="alternativeBox">
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
              
              .box {
                margin-top: 5rem;

                .imgBox{
                  position: relative;
                  grid-column: 2/ span 4;
                  height: 522px;
                }
                
                .contentBox{
                  grid-column: 6/ span 5;
                  display: flex; 
                  flex-direction: column;
                  gap: 50px;
                  width: 470px;

                  .infoBox{
                    display: flex; 
                    flex-direction: column;
                    width: 100%;
                  }
                }

              }
          }
        `}
      </style>
    </>
  )
}