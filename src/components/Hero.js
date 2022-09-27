import Image from "next/image"
import logo from "../../common/assets/images/LogoCoopcycle.svg"
import title from "../../common/assets/images/heroTitle.svg"
import theme from "../../styles/theme"

export default function Hero() {
  return (
    <>
      <section className="heroBox">
        <div className="logoBox">
          <div className="logo">
            <Image
              src={logo}
              alt={`number-icon`}
              width={15}
              height={15}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className="titleBox">
          <div className="title">
            <Image
              src={title}
              alt={`number-icon`}
              width={15}
              height={15}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="imageBox">
            {/* <Image
              src={title}
              alt={`number-icon`}
              width={15}
              height={15}
              layout="fill"
              objectFit="contain"
              priority
            /> */}
          </div>
        </div>
      </section>
      <style jsx>
        {`
        .heroBox{
          width: 100%;
          height: 75vh;

          .logoBox {
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
              width: 425.74px;
              height: 90px;
            }
            .imageBox{
              position: relative;
              width: 450px;
              height: 450px;
              background-color: blue;
              z-index: -1; 
            }
          }

        }
      `}
      </style>
    </>
  )
}