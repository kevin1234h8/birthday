"use client";
import BirthdayCard from "@/components/BirthdayCard";
import Modal from "@/components/Modal";
import { removePercentEncoding } from "@/utils/stringUtils";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

type Values = {
  username: string;
};

const HomePage = () => {
  const [values, setValues] = useState<Values>({
    username: "",
  });

  const handleInputChange = (e: any, setValues: any) => {
    const { name, value } = e.target;
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <div className="bg-white">
      <Modal
        values={values}
        setValues={setValues}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default HomePage;
