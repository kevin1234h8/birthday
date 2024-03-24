import React from "react";
import MenheraRain from "@/assets/menhera-rain.gif";
import Image from "next/image";

const page = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col">
        <Image src={MenheraRain} alt="MenheraRain" />
        <div className="text-center">Tunggu bentar ya</div>
      </div>
    </div>
  );
};

export default page;
