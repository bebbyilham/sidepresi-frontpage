import React from "react";

import Link from "next/link";

import IconPlay from "public/images/icon-play.svg";
import { data } from "autoprefixer";

export default function RenderItem({ item }) {
  console.log(item);
  return (
    <div className="w-1/4 px-4 ">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay>
          <img
            src={item.thumbnail ?? ""}
            alt={item?.name ?? "some information"}
          />
        </figure>
        <div className="item-meta mt-2">
          <h4 className="text-lg text-gray-900">{item?.name ?? "Blog name"}</h4>
          <h5 className="text-lg text-gray-900">
            {item?.category ?? "Blog name"}
          </h5>
        </div>
        <Link href="/blogs/[slug]" as={`/blogs/${item.id}`}>
          <a href="" className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
