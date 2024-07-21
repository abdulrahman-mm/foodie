import React, { useState } from "react";

function Join_The_Waitlist() {
  const [buttonClicked, setButtonClicked] = useState(false);

 
  return (
    <div className="flex flex-col items-center pt-10 bg-rose-200 pb-20">
      <h1 className="font-extrabold text-3xl text-orange-500">
        Join the Waitlist
      </h1>

      {buttonClicked === false && (
        <div className=" mt-5 flex gap-5 flex-wrap items-center justify-center">
          <input className="px-3 rounded-xl py-5" placeholder="name" />
          <input className="px-3 rounded-xl py-5" placeholder="Phone Number" />
          <input className="px-3 rounded-xl py-5" placeholder="City" />
        </div>
      )}

      {buttonClicked === false && (
        <button
          type="submit"
          style={{
            "box-shadow": "#fecaca 4px 4px 0 0,rgb(235, 116, 6) 6px 6px 0 1px",
          }}
          className="text-black px-10 py-2 rounded-3xl mt-8 bg-orange-500 font-bold"
          onClick={()=>setButtonClicked(true)}
        >
          Join the Waitlist
        </button>
      )}

      {buttonClicked === true && (
        <div>
          <h1 className="font-extrabold text-3xl text-orange-500 mt-28">Thank you!</h1>
        </div>
      )}
    </div>
  );
}

export default Join_The_Waitlist;
