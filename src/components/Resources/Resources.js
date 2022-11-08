import Button from "../../../common/components/Button/Button";
import theme from "../../../styles/theme";

export default function Resources (){
  return(
    <>
      <section className="resourcesBox">
        <div className="box">
          <div className="contentBox">
            <div className="mainContentBox">
              <h1>Recursos <br /> disponibles</h1>
              <p>Descargá materiales gratuitos <br /> para ser parte del mundo <br /> CoopCycle.</p>
              <Button text="Descargar" type='center' path="https://www.google.com/intl/es/drive/"/>
            </div>

          </div>
        </div>
      </section>
      <style jsx>
        {`
          .contentBox{
            background-color: ${theme.colors.secondary};
            grid-column: 3/ span 8;
            width: 100%;
            border-radius: 30px;
            margin-top: 4rem;

            .mainContentBox{
              width: 100%;
              color: ${theme.colors.white};
              padding: 2.5rem 0;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 4rem;
            }

            @media all and (max-width: ${theme.breakPoints.screenXs}) {
              grid-column: 2/ span 4;

              .mainContentBox{
                flex-direction: column;
                align-items: center;
                gap: 2rem;
              }
            }
          }
        `}
      </style>
    </>
  )
}