import { useState } from "react";
import Button from "../../../common/components/Button/Button";
import Card from "../../../common/components/Card/Card";
import Card2 from "../../../common/components/Card/Card 2";
import { cardsInfo } from "../../../common/assets/data/cardsInfo"


export default function BeCoopCycle() {

  return (
    <>
      <section id="sumate" className="beCoopBox">
        <h1>¡Quiero ser Coopcycle!</h1>

        <div className="cardsBox">
          {
            cardsInfo.map(e => <Card title={e.title} intro={e.intro} info={e.info} img={e.img} items={e.items} key={e.title + "key"} />)
          }

        </div>

        <h4>¡Si querés ser parte de Coopcycle,<br /> no dudes en comunicarte con nosotras/os!</h4>
        <Button text="¡Sumate!" type='center' />
      </section>
      <style jsx>
        {`
          .beCoopBox{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            h1{
              margin-top: 5rem;
            }

            h4 {
              text-align: center;
              padding-bottom: 22px;
            }
            .cardsBox{
              min-height: 400px;
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