import React from "react";

import Link from "next/link";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/3 px-4  h-120">
      <div className="card relative transition-all duration-300">
        {item.imageName}
        <div className="card-meta mt-5">
          <h4 className="text-lg transition-all duration-200 w-1/2">
            {item.name}
          </h4>
        </div>
        <Link href="#">
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
