import { Card, CardContent } from "@/components/ui/card"
import React from "react"
// import { SlBadge } from "react-icons/sl"
import Image from "next/image"
// import { FiAward } from "react-icons/fi"



const awards = [
  { 
    title: "ISO 9001 Certified", 
    image: "/assets/about/award/icon6.svg", 
    description: "International standard for quality management systems" 
  },
  { 
    title: "Taxpayers Award", 
    image: "/assets/about/award/icon2.svg", 
    description: "Recognition for outstanding tax compliance" 
  },
  { 
    title: "Child Labour Free", 
    image: "/assets/about/award/icon4.svg", 
    description: "Commitment to ethical labor practices" 
  },
  { 
    title: "Star Export House", 
    image: "/assets/about/award/icon1.svg" ,
    description: "Government recognition for export excellence" 
  },
  { 
    title: "CE Certified", 
    image: "/assets/about/award/icon3.svg",
    description: "Compliance with EU health." 
  },
  { 
    title: "RoHS Certified", 
    image: "/assets/about/award/icon5.svg", 
    description: "Restriction of Hazardous Substances compliance" 
  },
]

const Awards:React.FC=()=> {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white lg:pt-10 pt-5">
      <div className=" ">
        <h1 className="lg:text-3xl text-2xl font-medium text-left font-poppins pl-10 text-[#33246e] mb-4 ">Awards</h1>
        <p className="text-left text-gray-600 mb-12 max-w-5xl pl-10 font-poppins text-sm font-regular">
          Recognition affirms our purpose, and shows us we are on the right track. 
          Look through the awards we have accumulated and the certifications that mark the 
          checkpoints ensuring our progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-10">
          {awards.map((award, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg hover:border-indigo-300  border lg:h-[17rem] rounded-xl ">
              <CardContent className=" flex flex-col items-center text-center">
                <div className=" ">
                 <Image
                 src={award.image}
                 alt="certificate"
                 width={150}
                 height={150}
                 className=""
                 />
                </div>
                <h3 className="font-medium text-base font-poppins mb-2">{award.title}</h3>
                <p className="text-sm font-poppins font-regular text-gray-500 mb-4 text-wrap h-10 p-2">{award.description}</p>
                <div className="flex bg-indigo-50 rounded-full w-[6rem] border justify-center p-1 hover:bg-indigo-100 mb-4 lg:mb-10">
                {/* <FiAward  className=" text-indigo-600"/> */}
                <p className="text-xs font-poppins font-regular ">Certified</p>
                </div>
                 
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awards;