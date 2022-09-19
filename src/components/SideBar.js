import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import tw from '../../public/images/tw-red.svg'
import fb from '../../public/images/fb-red.svg'
import ig from '../../public/images/ig-red.svg'
import line from '../../public/images/red-line.svg'
import theme from "../../styles/theme"

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const display = open ? 'open' : 'close'

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      <aside className={"sideBarBox" + ' ' + (open ? 'barOpen' : 'barClose')}>

        {
          !open
            ? (
              <div className={'menuIconBox'} onClick={clickHandler}>

                <div className={'iconMenu' + ' ' + (open ? 'close' : 'open')} onClick={clickHandler}>
                  <div className="margin">
                    <svg width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="1" y1="0.505859" x2="0.999999" y2="17.2905" stroke="#EC1F3E" stroke-width="2" />
                    </svg>

                  </div>
                  <div className="closeMenuIcon" onClick={clickHandler}>
                    <svg
                      width="24"
                      height="17"
                      viewBox="0 0 24 17"
                      fill="EC1F3E"
                    >
                      <line y1="1.5" x2="24" y2="1.5" stroke="#EC1F3E" stroke-width="3" />
                      <line y1="8.5" x2="24" y2="8.5" stroke="#EC1F3E" stroke-width="3" />
                      <line y1="15.5" x2="24" y2="15.5" stroke="#EC1F3E" stroke-width="3" />
                    </svg>
                  </div>
                </div>


              </div>
            )
            : (
              <>
                <div className="column1">
                  <div className={'iconOpen' + ' ' + (open ? 'open' : 'close')} onClick={clickHandler}>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12.7755C0.0197115 12.5338 0.0409383 12.2922 0.0606498 12.0505C0.277259 9.42065 1.28468 6.91693 2.95142 4.86613C4.61817 2.81532 6.86682 1.31269 9.40389 0.554341C10.3628 0.263532 11.3536 0.0895669 12.3545 0.0362512C12.6184 0.022657 12.8822 0.0120837 13.1612 0V2.62217C13.0384 2.62217 12.9156 2.62217 12.7927 2.62217C10.3536 2.71101 8.02072 3.63912 6.19116 5.24852C4.3616 6.85793 3.14842 9.04917 2.75809 11.4493C2.36263 13.9148 2.85977 16.4401 4.16074 18.5742C5.46171 20.7082 7.48181 22.3122 9.86029 23.0995C11.1654 23.5384 12.546 23.71 13.9193 23.604C16.4906 23.4352 18.9075 22.3215 20.7016 20.4789C21.4067 19.7705 21.8873 18.911 22.2906 18.0063C22.9275 16.5728 23.3263 15.0684 23.6401 13.5398C23.6618 13.4632 23.6771 13.3849 23.6856 13.3057C23.6856 13.141 23.7796 13.1199 23.9191 13.1214C24.7334 13.1305 25.5461 13.1305 26.3603 13.1335V13.5504C26.3497 13.6335 26.333 13.7165 26.33 13.7996C26.2945 14.6149 26.1766 15.4246 25.9782 16.2163C25.2644 19.2054 23.5077 21.8446 21.0215 23.6629C19.1944 25.0322 17.0328 25.8896 14.7609 26.1461C14.5046 26.1779 14.2468 26.2066 13.9906 26.2368H12.3682C12.3183 26.2234 12.2677 26.2128 12.2166 26.2051C11.2615 26.1409 10.3168 25.9686 9.40086 25.6915C6.86364 24.931 4.61536 23.4264 2.94924 21.3741C1.28313 19.3218 0.276503 16.817 0.0606498 14.1863C0.039422 13.9446 0.0197115 13.7029 0 13.4613V12.7755Z" fill="#EC1F3E" />
                      <path d="M5.89523 13.0942H3.96199C3.96199 12.9431 3.95441 12.7921 3.96199 12.641C4.02999 11.1903 4.45208 9.77803 5.19168 8.52652C6.6003 6.16868 8.65332 4.6854 11.3538 4.11445C12.1294 3.9659 12.9191 3.90309 13.7086 3.92715C13.9072 3.92715 14.1073 3.9196 14.3075 3.92715C14.4591 3.92715 14.5091 3.89996 14.5016 3.73985C14.4849 3.43776 14.4925 3.13567 14.491 2.83357C14.491 2.7943 14.491 2.75654 14.5016 2.69763C17.0277 3.05259 19.1686 4.12955 20.8957 5.99196C22.3886 7.58975 23.3383 9.61552 23.6098 11.7816C23.3232 11.7816 23.0609 11.7816 22.7971 11.7816C22.6636 11.7816 22.4741 11.7423 22.4119 11.8118C22.3498 11.8813 22.3755 12.0716 22.3725 12.209C22.3604 12.7558 22.3725 13.3041 22.3361 13.8494C22.2433 15.2837 21.7919 16.6722 21.023 17.8884C20.2014 19.226 19.0495 20.3316 17.6773 21.1C16.305 21.8684 14.7581 22.2739 13.1839 22.2778C13.1839 22.2204 13.1718 22.169 13.1718 22.1177C13.1718 21.5754 13.1718 21.0332 13.1718 20.4909C13.1718 20.358 13.2143 20.3263 13.3431 20.3217C14.7622 20.2873 16.1399 19.8389 17.3057 19.0322C18.4715 18.2254 19.3741 17.0957 19.9018 15.783C20.4294 14.4703 20.559 13.0322 20.2743 11.6469C19.9897 10.2616 19.3033 8.98988 18.3003 7.98929C17.2973 6.9887 16.0217 6.30318 14.6315 6.01763C13.2412 5.73208 11.7975 5.85906 10.4789 6.38283C9.16044 6.90659 8.02512 7.80414 7.21361 8.96432C6.40209 10.1245 5.95004 11.4963 5.91343 12.9099C5.90433 12.9718 5.89978 13.0262 5.89523 13.0942Z" fill="#EC1F3E" />
                      <path d="M17.6934 10.4719C17.9562 10.8742 18.1442 11.3204 18.2483 11.7891C17.4659 12.0579 17.0975 12.4914 17.1096 13.1243C17.1217 13.7572 17.4887 14.1907 18.2574 14.4354C18.1374 14.8994 17.9516 15.3439 17.7055 15.7555C16.9474 15.3915 16.3757 15.4534 15.93 15.9156C15.715 16.1445 15.5873 16.4412 15.569 16.7541C15.5507 17.067 15.643 17.3763 15.8299 17.6285C15.4169 17.8789 14.968 18.0648 14.4986 18.1798C14.3182 17.4654 13.8845 17.0319 13.134 17.0455C12.4228 17.0591 12.0149 17.4986 11.8375 18.1783C11.3705 18.0614 10.923 17.8772 10.5093 17.6315C10.8747 16.9186 10.8338 16.3567 10.391 15.9051C9.94828 15.4534 9.39787 15.396 8.62761 15.754C8.37712 15.343 8.19101 14.8963 8.07568 14.4294C8.27449 14.3978 8.46397 14.3234 8.63082 14.2112C8.79768 14.099 8.93786 13.9517 9.04155 13.7799C9.18578 13.5427 9.25057 13.2661 9.22653 12.9899C9.17649 12.4008 8.77165 11.9748 8.08327 11.7815C8.20285 11.3129 8.38922 10.8637 8.6367 10.4478C8.79365 10.5639 8.97409 10.6446 9.1655 10.6842C9.35691 10.7239 9.55469 10.7215 9.7451 10.6774C10.0139 10.6173 10.2572 10.4753 10.4411 10.271C10.6402 10.0409 10.7554 9.75044 10.7678 9.44685C10.7802 9.14325 10.6891 8.84442 10.5093 8.59896C10.9236 8.34501 11.3747 8.15601 11.8466 8.03857C11.8775 8.23536 11.9509 8.4231 12.062 8.58874C12.173 8.75437 12.3189 8.89394 12.4895 8.99772C12.7163 9.13738 12.9819 9.2014 13.2477 9.18049C13.8951 9.12913 14.3197 8.74245 14.4925 8.0416C14.963 8.16285 15.4141 8.34892 15.8329 8.59443C15.7174 8.75132 15.6371 8.93108 15.5973 9.12157C15.5576 9.31205 15.5593 9.50882 15.6024 9.69857C15.6634 9.96232 15.8048 10.2008 16.0073 10.3813C16.4622 10.7952 17.0126 10.8239 17.6934 10.4719ZM13.1612 15.0924C13.5549 15.096 13.9407 14.9832 14.2699 14.7682C14.5992 14.5533 14.857 14.2458 15.0107 13.8848C15.1645 13.5238 15.2073 13.1255 15.1337 12.7403C15.0601 12.3551 14.8734 12.0003 14.5973 11.7208C14.3212 11.4413 13.968 11.2497 13.5826 11.1702C13.1971 11.0907 12.7966 11.127 12.4318 11.2743C12.067 11.4217 11.7543 11.6735 11.5333 11.998C11.3123 12.3225 11.1928 12.705 11.1901 13.0971C11.1869 13.6218 11.3925 14.1264 11.7619 14.5004C12.1314 14.8744 12.6346 15.0873 13.1612 15.0924Z" fill="#EC1F3E" />
                    </svg>
                  </div>

                  <div className="column1Links">
                    <div className="linksBox">
                      <Link href="#">
                        <a><h2>¿Qué es Coopcycle?</h2></a>
                      </Link>
                    </div>
                    <div className="linksBox">
                      <Link href="#">
                        <a><h2>Derechos</h2></a>
                      </Link>
                    </div>
                    <div className="linksBox">
                      <Link href="#">
                        <a><h2>¡Sumate!</h2></a>
                      </Link>
                    </div>
                    <div className="linksBox">
                      <Link href="#">
                        <a><h2>¿Quienes somos?</h2></a>
                      </Link>
                    </div>
                    <div className="linksBox">
                      <Link href="#">
                        <a><h2>Contacto</h2></a>
                      </Link>
                    </div>
                  </div>

                </div>

                <div className="column2">

                </div>
              </>
            )
        }








        <div className="socialMediaLinksBox">

          <div className={"socialMediaIconsBoxOpen" + ' ' + (open ? 'close' : 'open')}>
            <Link href="#">
              <a>
                <div className="socialMediaIcon" >
                  <Image
                    src={fb}
                    alt="facebook-icon"
                    width={14}
                    height={14}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="socialMediaIcon" >
                  <Image
                    src={tw}
                    alt="twitter-icon"
                    width={14}
                    height={14}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="socialMediaIcon" >
                  <Image
                    src={ig}
                    alt="instagram-icon"
                    width={14}
                    height={14}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </a>
            </Link>
          </div>

        </div>

      </aside>
      <style jsx>
        {`
          .sideBarBox{
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            bottom:0;
            overflow-y: hidden;
            transition: 0.5s;
          }
          .barClose{
            background-color: transparent;
            border-left: 1px solid ${theme.colors.gray};
            width: 75px;
          }
          .barOpen{
            background-color: ${theme.colors.secondary};
            width: 500px;
          }

          .menuIconBox{
            width: 100%;
            height: auto;
          }
          .iconMenu{
            position: relative; 
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 45px;
            height: auto;

            .margin{
              position: absolute;
              left: 0;
              z-index: 10;
            }

            .open {

            }
          }
          .iconOpen{
            width: 100%;
            height: auto;
            padding: 40px 0 40px 30px; 
          }
          .close{
            display: none;
          }
          
          .column1{
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 300px;
            color: ${theme.colors.white};

            .column1Links{
              padding: 80px 0 40px 30px; 
              display: flex;
              flex-direction: column;
              font-size: 1rem;
              gap: 38px;
              
              a {
                font-family: 'Passion One', sans-serif;
                font-weight: bolder;
                transition: 0.2s;
                &:hover {
                  color: ${theme.colors.lightSecondary};
                }
              }
            }
            
          }
          .column2{
            
          }


          .socialMediaLinksBox{
            width: 100%;
            height: auto;
            transition: 0.5s;

            .socialMediaIconsBoxOpen{
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 200px;
              gap: 14px;

              .socialMediaIcon{
                position: relative;
                width: 22px;
                height: 22px;
                fill: red;
              }

            }
            .close{
              display: none;
            }
          }

        `}
      </style>
    </>
  )
}