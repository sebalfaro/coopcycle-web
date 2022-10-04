import Image from "next/image"
import logo from "../../common/assets/images/LogoCoopcycle.svg"
import Lottie from "lottie-react";
import img1 from '../../common/assets/images/svgImages/Hero completo_V3.json'

export default function Hero() {
  return (
    <>
      <section className="heroBox">
        <div className="logoBox">
          <div className="logo">
            <Image
              src={logo}
              alt={`number-icon`}
              layout="fill"
              objectFit="contain"
              priority
            />
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
          height: 75vh;

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