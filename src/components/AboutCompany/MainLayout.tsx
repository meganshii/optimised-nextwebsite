import Founders from "@/components/AboutCompany/OurFounder";
import TeamPage from "@/components/AboutCompany/TeamPage";
import Grid from "@/components/AboutCompany/Grid";
import SustainableD from "@/components/AboutCompany/SustainableD";
import OurStoryD from "@/components/AboutCompany/OurstoryD";
import AboutOurcompany from "@/components/AboutCompany/AboutOurcompany";
import { Timeline } from "../ui/timeline";


export default function MainLayout() {
  return (
    <main className="bg-black  ">
      <AboutOurcompany />
      <SustainableD />
      <OurStoryD />
      <Founders />
     <Timeline/>
        <Grid />    
      <TeamPage />
    
    </main>
  );
}
