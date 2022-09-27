import Image from "next/image";
import { infoCardsAlternative } from "../../../common/assets/data/infoCardsAlternative";
import character2 from '../../../common/assets/images/character2.svg'
import InfoCard from "../../../common/components/InfoCard/InfoCard";
import theme from "../../../styles/theme";

export default function Alternative() {
  return (
    <>
      <section className="alternativeBox">
        <div className="imgBox">
          <Image
            src={character2}
            alt={`number-icon`}
            layout="fill"
            // width={270}
            // height={270}
            objectFit="cover"
            priority
          />
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