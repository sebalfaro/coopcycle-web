import Image from "next/image";
import Link from "next/link";

export default function SocialMediaLink({ icon = '', name = '', size, link='#'}) {
  return <>
    <Link href={link}>
      <a>
        <div className="socialMediaIconBox" >
          <Image
            src={icon}
            alt={`${name}-icon`}
            width={size}
            height={size}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </a>
    </Link>

    <style jsx>
      {`
        .socialMediaIconBox{
          position: relative;
          width: ${size} + "px";
          height: ${size} + "px";
        }
      `}
    </style>
  </>
}