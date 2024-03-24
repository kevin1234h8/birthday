"use client";

import BirthdayCard from "@/components/BirthdayCard";
import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import Aos from "aos";
const page = () => {
  const [birthdayMusic, setBirthdayMusic] = useState<any>();

  useEffect(() => {
    var birthdayMusic: any = new Howl({
      src: [
        "https://res.cloudinary.com/deszjgxlm/video/upload/v1709999864/HAPPY_BIRTHDAY_INSTRUMENTAL_e6z1f9.mp4",
      ],
      preload: true,
      autoplay: true,
    });

    setBirthdayMusic(birthdayMusic);
  }, []);

  useEffect(() => {
    if (birthdayMusic) {
      birthdayMusic?.play();
    }
  }, []);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div data-aos="fade-left" className="birthday-container relative">
      <BirthdayCard />
      <div className="absolute right-0"></div>
    </div>
  );
};

export default page;
