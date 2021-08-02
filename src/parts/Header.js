import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "public/images/logo.svg";
import DefaultAvatar from "public/images/default-avatar.svg";

export default function Header({ onLight }) {
  const [User, setUser] = useState(() => null);
  const [ToggleMenu, setToggleMenu] = useState(() => false);

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
    <header
      className={[
        "flex justify-between items-center",
        ToggleMenu ? "fixed w-full -mx-4 px-4" : "",
      ].join(" ")}
    >
      <div style={{ height: 54, zIndex: 50 }}>
        <a href="/">
          <Logo className="on-dark"></Logo>
        </a>
        {/* <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-green-800 hover:text-green-900",
                ].join(" ")}
              >
                <h1 className="text-2xl py-3 font-semibold">SiDepresi</h1>
              </a>
            </Link> */}
      </div>

      <div className="flex md:hidden">
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className={["toggle z-50", ToggleMenu ? "active" : ""].join(" ")}
        ></button>
      </div>

      <ul
        className={[
          "transition-all duration-200 items-center fixed inset-0 bg-orange-500 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible",
          ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible",
        ].join(" ")}
      >
        <li className="my-4 md:my-0">
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
        <li className="my-4 md:my-0">
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

        <li className="mt-8 md:mt-0">
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
