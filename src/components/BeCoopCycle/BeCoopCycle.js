import { useState } from "react";
import Button from "../../../common/components/Button/Button";
import Card from "../../../common/components/Card/Card";
import { cardsInfo } from "../../../common/assets/data/cardsInfo"

export default function BeCoopCycle() {

  return (
    <>
      <section className="beCoopBox">
        <h1>¡Quiero ser Coopcycle!</h1>

        <div className="cardsBox">
          {
            cardsInfo.map(e => <Card title={e.title} intro={e.intro} info={e.info} img={e.img} items={e.items} key={e.title + "key"} />)
          }

        </div>

        <p> <b>¡Si querés ser parte de Coopcycle,<br /> no dudes en comunicarte con nosotras/os!</b> </p>
        <Button text="¡Sumate!" type='center' />
      </section>
      <style jsx>
        {`
          .beCoopBox{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            min-height: 100vh;

            h1{
              font-weight: 900;
              font-size: 2.7rem;
              line-height: 44px;
              padding-top: 2rem;
            }
            p{
              text-align: center;
              padding-bottom: 22px;
            }
            .cardsBox{
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              gap: 40px;
              margin-top: 30px;
              margin-bottom: 50px;
            }
          }
        `}
      </style>
    </>
  )
}