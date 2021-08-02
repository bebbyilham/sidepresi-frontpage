import React from "react";

import Link from "next/link";

import IconPlay from "public/images/icon-play.svg";
import IconTap from "public/images/icon-tap.svg";
import capitalizedText from "src/helpers/capitalizedText";
import { data } from "autoprefixer";

export default function RenderItem({ item }) {
  return (
    <div className="w-full md:w-1/4 px-4 mb-8">
      <div className="item relative">
        <figure className="item-image">
          <IconTap></IconTap>
          <img
            src={item.thumbnail ?? ""}
            alt={item?.name ?? "some information"}
          />
        </figure>
        <div className="item-meta mt-2">
          <h4 className="text-lg text-gray-900">
            {capitalizedText(item?.name ?? "Blog name")}
          </h4>
          <h5 className="text-lg text-gray-900">
            {capitalizedText(item?.category ?? "Blog name")}
          </h5>
        </div>
        <Link href="/blogs/[id]" as={`/blogs/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
