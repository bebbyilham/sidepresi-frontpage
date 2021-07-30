import React, { useState } from "react";

import Pic from "public/images/pic.svg";

export default function Hero() {
  const [state, setstate] = useState(() => "");

  //   function submit() {
  //     window.open(
  //       `${process.env.NEXT_PUBLIC_NURSEPAGE_URL}/register?email=${state}`
  //     );
  //   }
  return (
    <div className="flex justify-between items-center">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-5xl text-white mb-5 font-semibold">
          <span className="text-white mb-5"></span>Selamat Datang Di{" "}
          <br className="hidden md:block" />
          <span className="text-green-800 mb-5">SiDepresi</span>
        </h1>
        <p className="text-white font-light text-lg mb-8">
          Sistem Data Perawat Terintegrasi
        </p>
        {/* <form onSubmit={submit} className="flex">
          <input
            type="text"
            onChange={(event) => setstate(event.target.value)}
            className="bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full md:w-1/2"
            value={state}
            placeholder="Your email addres"
          />
          <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap">
            Daftar Now
          </button>
        </form> */}
      </div>
      <div className="hidden w-1/2 md:flex justify-end pt-24 ">
        <div className="relative" style={{ width: 600, height: 440 }}>
          <div className="absolute w-full h-full -mb-8 -ml-2">
            <div className="absolute w-full h-full -mb-8 -ml-2">
              <img src="/images/pic.svg" alt="Nurse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
