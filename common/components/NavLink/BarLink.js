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
          width={15}
          height={15}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div onClick={clickHandler}>
        <Link href={link}>
          <a><h2>{title}</h2></a>
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
          gap: 15px;

          a {
            font-family: 'Passion One', sans-serif;
            font-weight: bolder;
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