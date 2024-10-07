import React from "react";
// import ContactForm from "@/components/Contact-page/Contact";
// import Branches from "@/components/Contact-page/Branches";
// import Reach from "@/components/Contact-page/Reach";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/Contact-page/Contact"));
const Branches = dynamic(() => import("@/components/Contact-page/Branches"));
const Reach = dynamic(() => import("@/components/Contact-page/Reach"));
export default function contact() {
  return (
    <main>
      <ContactForm />
      <Branches />
      <div className="mb-10">
        <Reach />
      </div>
    </main>
  );
}
