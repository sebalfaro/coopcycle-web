import Head from 'next/head'
import WhoWeAre from '../src/components/WhoWeAre/WhoWeAre'
import BeCoopCycle from '../src/components/BeCoopCycle/BeCoopCycle'
import Footer from '../src/components/Footer'
import Hero from '../src/components/Hero'
import SideBar from '../src/components/SideBar'
import ContactUs from '../src/components/ContactUs/ContactUs'
import AboutUsGrid from '../src/components/AboutUs/AboutUsGrid'
import AlternativeGrid from '../src/components/Alternative/AlternativeGrid'
import Resources from '../src/components/Resources/Resources'

export default function Home() {
  return (
    <>
      <div className='homeBox'>
        <Head>
          <title>CoopCycle Web</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main >
          <SideBar />
          <Hero />
          <AboutUsGrid />
          <BeCoopCycle />
          <AlternativeGrid />
          <Resources />
          <WhoWeAre />
          <ContactUs />
        </main>
        <Footer />
      </div>
      <style jsx>
        {`
          .homeBox{
            min-height: 200vh;
          }
        `}
      </style>
    </>
  )
}
