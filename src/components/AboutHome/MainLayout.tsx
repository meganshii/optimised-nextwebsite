
"use client";
import { useRef } from "react";
import Missionvission from "@/components/AboutHome/MissionVission";
import OurCompany from "@/components/AboutHome/OurCompany";
import PinkCity from "@/components/AboutHome/PinkCity";
import FeatureProject from "@/components/AboutHome/FeatureProject";
import Awards from "@/components/AboutHome/Awards";
import Homenew from "@/components/AboutHome/Homenew";
import { ExpandableCardDemo } from "@/components/AboutHome/NewOurstrenght";
import NewSustainability from "@/components/AboutHome/NewSustainability";
import NavLinksDemo from "./NavLink";




export default function MainLayout ()
{

    const missionRef = useRef<HTMLDivElement>(null);
    const ourcompanyRef = useRef<HTMLDivElement>(null);
    const ourstrenghtRef = useRef<HTMLDivElement>(null);
    const pinkcityRef = useRef<HTMLDivElement>(null);
    const sustainableRef = useRef<HTMLDivElement>(null);
    const featureprojectRef = useRef<HTMLDivElement>(null);
    const awardRef = useRef<HTMLDivElement>(null);
   

    const navItems = [
        { text: "Mission & Vision", ref: missionRef },
        { text: "Our Company", ref: ourcompanyRef },
        { text: "Our Strenght", ref: ourstrenghtRef },
        { text: "The Pink City", ref: pinkcityRef },
        { text: "Sustainability", ref: sustainableRef },
        { text: "Featured Projects", ref: featureprojectRef },
        { text: "Awards", ref:awardRef},
      ];


    return(
        <main className="bg-[#f5f5f5] overflow-hidden">
        {/* <Home /> */}
        <Homenew/>
        <div className="">
        {/* <NavLinksDemo navItems={navItems}  /> */}
        </div>
        <div id='mission and vission' className="" ref={missionRef}>
        <Missionvission/>
        </div>
 
        <div  id='Our Company' className="lg:mt-28 md:mt-28 mt-28" ref={ourcompanyRef}>
        <OurCompany/>
        </div>

        <div id='Our Strenght' ref={ourstrenghtRef} className="mt-28">
        <ExpandableCardDemo/>
        </div>

        <div id='The Pink City' ref={pinkcityRef} className="mb-10 mt-28 z-10">
        <PinkCity/>
        </div>
        <div className="mt-28" id='Sustainability' ref={sustainableRef}>
      <NewSustainability/>
        </div>

        <div className="mt-28" id='Featured Projects' ref={featureprojectRef}>
        <FeatureProject/>
        </div>
        <div className="mt-32" id='OurAwards' ref={awardRef}>
       <Awards/>
        </div>
    
      </main>
    );
 
}