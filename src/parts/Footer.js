import React from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container px-4 mx-auto">
      <div className="flex flex-wrap flex-justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h6 className="text-white">Tentang Kami</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="">
                <a
                  href="https://rsjhbsaanin.sumbarprov.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="RSJ Prof. HB Saanin Padang"
                  className="text-orange-300 hover:text-green-800 hover:underline"
                >
                  RSJ Prof HB. Saanin Padang{" "}
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-green-800 hover:underline"
                >
                  PPNI RSJ Prof HB. Saanin Padang{" "}
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-green-800 hover:underline"
                >
                  Unit IT RSJ Prof HB. Saanin Padang{" "}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h6 className="text-white">Alamat</h6>
          <p className="mt-4 text-orange-300 leading-loose">
            Jl. Raya Gadut, Limau Manis Selatan,
            <br /> Kecamatan Pauh, Kota Padang,
            <br />
            Sumatera Barat 25157
          </p>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-orange-300 text-center">
        <p className="text-orange-300">
          2020 Copyright Unit IT | PPNI. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
