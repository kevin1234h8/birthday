"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import Aos from "aos";

const BirthdayCard = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const [username, setUsername] = useState(
    useSelector((state: any) => state.authReducer.value)
  );

  return (
    <div data-aos="fade-left" className="birthdayCard">
      <div className="cardFront shadow-xl">
        <div className="happy">HAPPY BIRTHDAY {username}!</div>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY</h3>
        <p>Yo,</p>
        <p>
          dh lama ni ga ketemu wkwkwk.Semoga sukses trus, kalau kuliah semoga
          lulus tahun ni
        </p>
        <p className="name">Kevin</p>
      </div>
    </div>
  );
};

export default BirthdayCard;
