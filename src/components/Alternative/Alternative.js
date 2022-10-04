import { infoCardsAlternative } from "../../../common/assets/data/infoCardsAlternative";
import Lottie from "lottie-react";
import character2 from '../../../common/assets/images/svgImages/Animacion_Nosotres_V2.json'
import InfoCard from "../../../common/components/InfoCard/InfoCard";
import theme from "../../../styles/theme";

export default function Alternative() {
  return (
    <>
      <section className="alternativeBox">
        <div className="imgBox">
          <Lottie loop={true} animationData={character2} style={{height: '100%'}}/>
        </div>
        <div className="contentBox">
          <div className="titleBox">
            <h1>Somos una alternativa <br /> a las plataformas privadas</h1>
          </div>
          <div className="infoBox">
            {
              infoCardsAlternative.map((e, index) =>{
                return(
                  <InfoCard number={index + 1} title={e.title} content={e.content} key={e.title + "key"} />
                )
              })
            }
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .alternativeBox{
            display: flex; 
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 65vh;
            gap: 30px;
            
            .imgBox{
              position: relative;
              width: 470px;
              height: 522px;
            }
            
            .contentBox{
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