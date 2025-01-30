import Footer from "../../Shared/Footer/Footer"
import Header from "../../Shared/Header/Header"
import Recruit from "./Section_1/Recruit"
import TopTrandy from "./Section_2/TopTrandy"
import OurProcess from "./Section_3/OurProcess"
import Experience from "./Section_4/Experience"
import OurService from "./Section_5/OurService"
import Subscription from "./Section_6/Subscription"
import VirtualCTO from "./Section_7/VirtualCTO"
import News from "./Section_8/News"
import Sedulecall from "./Section_9/Sedulecall"

function LandingPage() {
  return (
    <>

    {/* Header  */}
     <Header />
    
   
   {/* Section_1  Recruit */}
   <Recruit/>
   
   
   
   {/* Section 2 Top Trandy */}
     <TopTrandy/>
   
   
   {/* Section 3 Our Process */}
   <OurProcess/>
   
   
   {/* Section 4 Experience */}
   
   <Experience/>
   
   
   
   {/* Section 5 Our Service */}
   <OurService/>
   
   
   
   {/* Section 6 Subscription */}
   <Subscription/>
   
   
   {/* Section 7 Virtual CTO */}
   <VirtualCTO/>
   
   
   
   {/* Section 8 News */}
   <News/>
   
   
   {/* Section 9 Sedule call */}
   <Sedulecall/>
   
   
   {/* Footer section */}
   <Footer/>
   
    </>
  )
}

export default LandingPage