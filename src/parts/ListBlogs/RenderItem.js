import React from "react";

import Link from "next/link";

import IconPlay from "public/images/icon-play.svg";

export default function RenderItem({ item }) {
  console.log(item);
  return (
    <div className="w-1/4 px-4 ">
      <div className="item">
        <figure className="item-image">
          <img src="" alt="" />
        </figure>
      </div>
    </div>
  );
}
