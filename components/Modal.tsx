"use client";
import Image from "next/image";
import MenheraRain from "@/assets/menhera-rain.gif";
import React, { useEffect, useState } from "react";
import MenheraSleeping from "@/assets/menhera-sleeping.gif";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "@/lib/features/authSlice";
type Values = {
  username: string;
};

type ModalProps = {
  values: Values;
  setValues: any;
  handleInputChange: any;
};

const Modal = ({ values, setValues, handleInputChange }: ModalProps) => {
  const username = useSelector((state: any) => state.authReducer.value);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { push } = useRouter();
  const [status, setStatus] = useState<string>("");
  const handleAuthentication = () => {
    cookies.set("username", username.trim());
    setStatus("pending");
    setTimeout(() => {
      setStatus("auth");
    }, 2500);
  };
  const pending = status === "pending";
  const auth = status === "auth";
  useEffect(() => {
    if (pending) {
      push("/pending");
    }
    if (auth) {
      push("/birthday");
    }
  }, [auth]);
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {pending ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="flex flex-col">
            <Image src={MenheraRain} alt="MenheraRain" />
            <div className="text-center">Tunggu bentar ya</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-4">
          <Image
            src={MenheraSleeping}
            alt="MenheraSleeping"
            width={175}
            height={175}
            className="rounded-full "
            priority
          />
          <div className="">
            <div className="text-center">Masukin Namamu ya! </div>
            <input
              onChange={(e) => dispatch(getAuth(e.target.value))}
              type="text"
              name="username"
              className="border border-black px-2 py-1 rounded-md"
            />
          </div>
          {username.length > 2 && username.length < 20 ? (
            <div
              onClick={handleAuthentication}
              className="inline-flex cursor-pointer items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
            >
              <div>Ok sip next</div>
            </div>
          ) : (
            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              Masukin dulu
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Modal;
