import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "public/images/logo.svg";
import DefaultAvatar from "public/images/default-avatar.svg";

export default function Header({ onLight }) {
  const [User, setUser] = useState(() => null);
  useEffect(() => {
    const userCookies =
      decodeURIComponent(window.document.cookie)
        ?.split(";")
        ?.find?.((item) => item.indexOf("SIDEPRESI:user") > -1)
        ?.split("=")[1] ?? null;
    setUser(userCookies ? JSON.parse(userCookies) : null);
    console.log(userCookies);
  }, []);
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const router = useRouter();
  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_NURSEPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_NURSEPAGE_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
  return (
    <header className="flex justify-between items-center">
      <ul className="flex items-center">
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

      <ul className="flex items-center">
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
          <Link href="/about">
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
          {User ? (
            <a
              target="_blank"
              rel="noopener noereferrer"
              href={linkCTA}
              className="btn-login hover:bg-green-900 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center"
            >
              <span className="rounded-full overflow-hidden mr-3 ring-2 ring-white">
                {User?.thumbnail ? (
                  <img
                    src={User?.thumbnail}
                    alt={User?.name ?? "Username"}
                    className="object-cover w-8 h-8 inline-block"
                  />
                ) : (
                  <DefaultAvatar className="fill-green-800 w-8 h-8 inline-block ring-2 ring-green-800"></DefaultAvatar>
                )}
              </span>
              Hi, {User.name}
            </a>
          ) : (
            <a
              target="_blank"
              rel="noopener noereferrer"
              href={linkCTA}
              className="btn-login bg-green-800 hover:bg-green-900 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
            >
              {textCTA}
            </a>
          )}
        </li>
      </ul>
    </header>
  );
}

Header.prototype = {
  onLight: propTypes.bool,
};
