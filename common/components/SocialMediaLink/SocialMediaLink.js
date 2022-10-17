import Link from "next/link";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";

export default function SocialMediaLink({ iconType, filled }) {
  return <>
    {
      iconType === 'facebook'
        ? (
          <Link href='https://es-la.facebook.com/' prefetch={false}>
            <a target='_blank' rel='noopener noreferrer'>
              <Facebook filled={filled} />
            </a>
          </Link>
        )
        :
        iconType === 'twitter'
        ? (
          <Link href='https://twitter.com/' prefetch={false}>
            <a target='_blank' rel='noopener noreferrer'>
              <Twitter filled={filled} />
            </a>
          </Link>
        )
        :
        iconType = 'instagram'
        ? (
          <Link href='https://www.instagram.com/' prefetch={false}>
            <a target='_blank' rel='noopener noreferrer'>
              <Instagram filled={filled} />
            </a>
          </Link>
        )
        : null
    }

    <style jsx>
      {`
        /* 
        .socialMediaIconBox{
          position: relative;

        }
        */
      `}
    </style>
  </>
}