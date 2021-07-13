import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "public/images/logo.svg";

export default function Header({ onLight }) {
  const [User, setUser] = useState(() => null);
  useEffect(() => {
    const userCookies = decodeURIComponent(window.document.cookie)?.split(";");
  }, []);
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const router = useRouter();
  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
  return (
    <header className="flex justify-between items-center">
      <ul className="flex">
        <li>
          <div style={{ height: 54 }}>
            <Logo className="on-dark"></Logo>
          </div>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-green-800 hover:text-green-900",
              ].join(" ")}
            >
              <h1 className="text-2xl py-3 font-semibold">SiDepresi</h1>
            </a>
          </Link>
        </li>
      </ul>

      <ul className="flex">
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-green-900 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Beranda
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-green-900 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Tentang Kami
            </a>
          </Link>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noereferrer"
            href={linkCTA}
            className="btn-login bg-green-800 hover:bg-green-900 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
          >
            {textCTA}
          </a>
        </li>
      </ul>
    </header>
  );
}

Header.prototype = {
  onLight: propTypes.bool,
};
