import React from "react";

import Link from "next/link";

import RenderItem from "./RenderItem";

export default function ListBlogs({ data }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">
            Berita, Artikel, Info KOMKEP
          </h2>
          <h3 className="text-xl text-gray-900">
            Informasi <span className="text-orange-500">SiDepresi</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/blogs">
            <a href="" className="text-gray-600 hover:underline text-sm">
              Lihat Semua
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-ful text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
