import Image from "next/image";
import Link from "next/link";
import theme from "../../../styles/theme";

export default function BarLink({ title = '', link = '#', number, clickHandler }) {
  return <>
    <div className="linksBox">
      <div className="numberBox">
        <Image
          src={number}
          alt={`number-icon`}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="textBox" onClick={clickHandler}>
        <Link href={link} prefetch={false}>
          <a><h1>{title}</h1></a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        .linksBox{
          width: fit-content;
          display: flex; 
          flex-direction: row;
          align-items: center;
          transition: 0.7s;
          gap: 15px;

          .textBox {
            font-family: 'Passion One', sans-serif;
            line-height: 44px;
            font-weight: 900;
            font-size: 1.5rem;
            transition: 0.5s;
            &:hover {
              color: ${theme.colors.third};
            }
          }
          .numberBox{
            position: relative;
            width: 15px;
            height: 15px;
          }
        }

      `}
    </style>
  </>
}