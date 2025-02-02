import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Successful from "./Successful";
export default function Content() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validEmail = emailRegex.test(email);
  function handleSubmit() {
    if (validEmail === false) {
      alert("enter your email");
    } else {
      setIsEmail(true);
    }
  }

  return (
    <div className="py-6 px-10 ">
      {!isEmail && (
        <div>
          <header className="flex gap-2 items-center uppercase">
            <div className="circle"></div>
            <span>
              Base <br /> Apparel
            </span>
          </header>
          <main>
            <h1 className=" my-10 text-3xl uppercase">
              <span className="text-yellow-600 ">We're</span> <br /> Coming{" "}
              <br />
              Soon
            </h1>

            <p className="max-w-[60%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              cum, in doloremque eligendi magnam porro vero illum natus
              cupiditate quod.
            </p>

            <form
              onSubmit={() => handleSubmit(email)}
              className="flex items-center mt-6 pb-4"
            >
              <input
                placeholder="Email address"
                className="border border-yellow-600 rounded-xl py-1 px-4 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="flex justify-center items-center bg-yellow-600 py-2 px-4 rounded-full relative -left-4 cursor-pointer hover:bg-yellow-700 transition-all duration-500">
                <FaArrowRight fontSize={20} />
              </button>
            </form>
          </main>
        </div>
      )}
      {isEmail && <Successful />}
    </div>
  );
}
