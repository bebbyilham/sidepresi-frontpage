import React from "react";

export default function Partners() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-sumbar.svg"
          alt="logo provinsi sumbar"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-hbs.svg"
          alt="logo rsj hb saanin padang"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img src="/images/logo-ppni.svg" alt="logo ppni" className="mx-auto" />
      </div>
    </div>
  );
}
