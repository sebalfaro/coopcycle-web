import Lottie from "lottie-react";
import img1 from '../../common/assets/images/svgImages/Hero completo_V4.json'
import LogoCoopCycle from "../../common/assets/images/logos/LogoCoopCycle";

export default function Hero() {
  return (
    <>
      <section className="heroBox">
        <div className="logoBox">
          <div className="logo">
            <LogoCoopCycle />
          </div>
        </div>
        <div className="titleBox">
          <div className="title">
            <Lottie loop={true} animationData={img1} style={{ height: '100%' }} />
          </div>
        </div>
      </section>
      <style jsx>
        {`
        .heroBox{
          width: 100%;
          height: 85vh;

          .logoBox {
            position: relative;
            padding-top: 2.7%;
            padding-left: 3.6%;

            .logo {
              position: relative;
              height: 76px;
              width: 149px;
            }
          }
          .titleBox {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .title{
              position: relative;
              width: 100%;
              height: 500px;
            }
          }

        }
      `}
      </style>
    </>
  )
}