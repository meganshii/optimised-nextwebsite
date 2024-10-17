import LandingPage from "@/components/PinkCity/LandingPage"
import SecondPage from "@/components/PinkCity/SecondPage"
import Bluepage from "@/components/PinkCity/Bluepage"
import PinkPage from "@/components/PinkCity/PinkPage"
import Photocolag from "@/components/PinkCity/Photocolag"


export default function MainLayout () {

    return (
        <main className="bg-gray-100 lg:overflow-hidden md:overflow-hidden overflow-hidden ">
       <LandingPage/>
        <SecondPage/>
         
       <Bluepage/>
   
      <PinkPage/>
          
      <Photocolag/>
        </main>
    )

}
