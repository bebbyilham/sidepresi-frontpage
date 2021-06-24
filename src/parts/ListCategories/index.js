import React from "react";

import RenderItem from "./RenderItem";
import Berita from "public/images/icon-berita.svg";
import Artikel from "public/images/icon-artikel.svg";
import Infokomkep from "public/images/icon-infokomkep.svg";

export default function index() {
  const data = [
    {
      imageName: <Berita />,
      name: "Berita",
    },
    {
      imageName: <Artikel />,
      name: "Artikel",
    },
    {
      imageName: <Infokomkep />,
      name: "Info KOMKEP",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Kategori</h2>
          <h3 className="text-xl text-gray-900">
            Informasi <span className="text-orange-500">SiDepresi</span>
          </h3>
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
