import React from "react";

export default function Feature({ data }) {
  return (
    <div
      className="border border-gray-300 rounded-lg bg-white p-4 w-full md:w-1/3"
      style={{ width: 298 }}
    >
      <div className="flex">
        <div className="w-auto">{data.icon}</div>
        <div className="ml-5">
          <span className="text-xs text-gray-600 block">{data.meta}</span>
          <span className="text-xs text-green-800 block">
            {data.value} {""}
          </span>
        </div>
      </div>
    </div>
  );
}
