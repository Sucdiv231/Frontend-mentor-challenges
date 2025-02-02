import React from "react";

export default function Successful() {
  return (
    <div className="h-full flex items-center justify-center  ">
      <div className="text-center ">
        <h1 className="text-3xl"> Thank You!!!</h1>
        <p>
          You have successfully submitted your email. <br />
        </p>
        <div className="bg-green-100 text-green-500 p-4">
          <p>An Email has been sent to your device.</p>
        </div>
      </div>
    </div>
  );
}
