import React from "react";

export default function Feature({ data }) {
  return (
    <div className="border border-gray-300 bg-white p-6" style={{ width: 298 }}>
      <div className="flex">
        <div className="w-auto"></div>
        {data.icon}
        <div className="ml-5">
          <span className="text-gray-600 block">{data.meta}</span>
          <span className="text-green-800 block">
            {data.value} {""}
          </span>
        </div>
      </div>
    </div>
  );
}
