import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

import blogs from "src/constants/api/blogs";

import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import ListBlogs from "src/parts/ListBlogs";
import ListCategories from "src/parts/ListCategories";

function Blogs({ data }) {
  const [Search, setSearch] = useState(() => "");
  const [SearchFocus, setSearchFocus] = useState(() => false);
  const [SearchResponse, setSearchResponse] = useState(() => ({
    isLoading: false,
    isError: false,
    data: [],
  }));

  const selectWrapper = useRef(null);

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearch("");
    }
  }

  let timeoutSearch = useRef(null);
  function handleSearch(e) {
    e.persist();
    setSearch(e.target.value);
    clearTimeout(timeoutSearch.current);
    timeoutSearch.current = setTimeout(() => {
      setSearchResponse({
        isLoading: true,
        isError: false,
        data: null,
      });
      blogs
        .all({ params: { q: e.target.value } })
        .then((res) => {
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data,
          });
        })
        .catch((err) => {
          setSearchResponse({
            isLoading: false,
            isError: true,
            data: null,
          });
        });
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sidepresi | Info</title>
      </Head>

      <section className="pt-10 z-30 relative" style={{ height: 360 }}>
        <div className="absolute inset-0 z-0 w-full h-full bg-orange-500 opacity-100"></div>
        <div
          className="meta-tittle absolute inset-0 object-fill z-0 pt-24 w-full flex justify-center items-center"
          style={{ marginBottom: "-25px" }}
        >
          <div className="px-4">
            <h3 className="text-6xl text-center text-green-800 font-semibold">
              Informasi
            </h3>
            <h4 className="text-lg text-center text-white">
              Cari informasi Berita, Artikel dan INFOKOMKEP.
            </h4>
            <div className="flex flex-col relative" ref={selectWrapper}>
              <input
                id="q"
                type="text"
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!SearchFocus)}
                onBlur={() => setSearchFocus(!SearchFocus)}
                value={Search}
                placeholder={
                  SearchFocus
                    ? "Ketik minimal 3 karakter untuk mencari"
                    : "Cari Berita, Artikel dan INFOKOMKEP disini"
                }
                className="bg-white focus:outline-none transition-all duration-200 focus:border-teal-500 border border-green-600 rounded-md px-4 py-3 w-full mt-6"
              />
              {Search.length >= 3 && (
                <div
                  className="flex flex-col absolute py-2 px-4 bg-white border border-green-500 rounded-md w-full"
                  style={{ top: 75 }}
                >
                  {SearchResponse.isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      {SearchResponse.isError &&
                        "Something is technically wrong"}
                      {SearchResponse.data?.length > 0
                        ? SearchResponse.data?.map((item, index) => {
                            return (
                              <div className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative">
                                <div
                                  className="w-auto px-4"
                                  style={{ width: 150 }}
                                >
                                  <img
                                    src={item?.thumbnail ?? ""}
                                    alt={item?.name ?? "Blogs name"}
                                  />
                                </div>
                                <div className="w-full px-4">
                                  <h6 className="text-gray-900 text-lg">
                                    {item?.name ?? "Blogs name"}
                                  </h6>
                                  <a className="text-gray-600">
                                    {item?.category ?? "category"}
                                  </a>
                                  <Link
                                    href="/blogs/[id]"
                                    as={`/blogs/${item.id}`}
                                  >
                                    <a className="link-wrapped"></a>
                                  </Link>
                                </div>
                              </div>
                            );
                          })
                        : "Informasi tidak ditemukan"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container px-4 mx-auto pt-24">
        <ListBlogs data={data}></ListBlogs>
      </section>
      <section className="container px-4 mx-auto pt-24">
        <ListCategories></ListCategories>
      </section>
      <section className="mt-24 bg-orange-500 py-12">
        <Footer></Footer>
      </section>
    </>
  );
}

Blogs.getInitialProps = async () => {
  try {
    const data = await blogs.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Blogs;
