import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Header from "src/parts/Header";

import blogs from "src/constants/api/blogs";

import capitalizedText from "src/helpers/capitalizedText";

import { CSSTransition } from "react-transition-group";

//public images files
import Creator from "public/images/icon-creator.svg";
import CalendarDate from "public/images/icon-calendardate.svg";
import CalendarUpdate from "public/images/icon-calendarupdate.svg";

import Feature from "src/parts/Details/Feature";
import BlogPhoto from "src/parts/Details/BlogPhoto";
import Footer from "src/parts/Footer";

function DetailsBlog({ data }) {
  console.log(data);

  const footer = useRef(null);

  const [isSticky, setisSticky] = useState(() => true);

  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top;

    const stickyMetaToggler = () => {
      setisSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight);
    };

    window.addEventListener("scroll", stickyMetaToggler);
    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          SiDepresi | {capitalizedText(data?.category ?? "Nama Kategori")} |{" "}
          {capitalizedText(data?.name ?? "Nama Info")}
        </title>
      </Head>

      <section className="px-4 pt-10 overflow-hidden" style={{ height: 330 }}>
        <div className="blog-wrapper min-h-screen md:min-h-full"></div>
        <div className="absolute inset-0 z-0 w-full h-1/2 bg-orange-500 opacity-100"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full h-1/2 flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">
              {capitalizedText(data?.category ?? "Nama Kategori")}
            </h3>
            <h4 className="text-3xl md:text-6xl text-green-800 font-semibold">
              {capitalizedText(data?.name ?? "Nama Info")}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-20 relative">
          <Header></Header>
        </div>
      </section>
      <section className="container mx-auto pt-24 relative">
        <div className="md:absolute top-0 w-full transform md:-translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex flex-wrap justify-between">
              <Feature
                data={{
                  icon: <Creator className="fill-orange-400" />,
                  meta: "Creator",
                  value: capitalizedText(data?.creator?.name ?? "-"),
                }}
              ></Feature>
              <Feature
                data={{
                  icon: <CalendarDate className="fill-orange-400" />,
                  meta: "Publikasi pada",
                  value: data?.created_at ?? "-",
                }}
              ></Feature>
              <Feature
                data={{
                  icon: <CalendarUpdate className="fill-orange-400" />,
                  meta: "Perbarui pada",
                  value: data?.updated_at ?? "-",
                }}
              ></Feature>
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={300}
            classNames="meta-tag"
            unmountOnExit
          >
            <div className="meta-tag w-full bg-white rounded-t-lg z-10 left-0 md:py-3">
              <div className="w-full md:w-3/4 md:mx-auto">
                <div className="flex items-center">
                  <div className="w-full ml-2 md:mx-auto">
                    <h2 className="text-orange-400 text-xs md:text-base">
                      {capitalizedText(data?.category ?? "Nama Kategori")}
                    </h2>
                    <h3 className="text-base md:text-2xl text-green-800">
                      {capitalizedText(data?.name ?? "Nama Info")}
                    </h3>
                  </div>
                  <span className="text-sm text-orange-500 whitespace-nowrap mr-4">
                    {"Di Perbarui Pada : "}
                    {data?.updated_at ?? "-"}
                  </span>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>

        <div className="w-3/4 mx-auto mt-8">
          <div className="w-full">
            <section>
              <h6 className="font-medium text-green-800 text-2xl mb-4">
                {capitalizedText(data?.category ?? "")}{" "}
                <span className="text-orange-500">
                  {capitalizedText(data?.name ?? "")}
                </span>
              </h6>
              <p className="text-justify text-black text-base md:text-lg leading-relaxed mb-3">
                {capitalizedText(data?.description ?? "Tidak ada deskripsi")}
              </p>
            </section>
            <section className="mt-10">
              <h6 className="font-medium text-green-800 text-2xl mb-4">
                {"Foto "} {capitalizedText(data?.category ?? "")}{" "}
                <span className="text-orange-500">
                  {capitalizedText(data?.name ?? "")}
                </span>
              </h6>
              <div className="flex flex-wrap justify-start item-center -mx-4 mt-6">
                {data?.images?.length > 0 ? (
                  data?.images?.map?.((photo, index) => (
                    <BlogPhoto data={photo.image} key={index} />
                  ))
                ) : (
                  <div className="w-full text-center py-12">Tidak ada foto</div>
                )}
              </div>
            </section>
            <section className="mt-10 w-full md:w-2/3">
              <h6 className="font-medium text-green-800 text-lg mb-2">
                {"Creator "}
                <span className="text-orange-500">
                  {capitalizedText(data?.category ?? "")}
                </span>
              </h6>
              <div className="flex item-center">
                <img
                  src={data?.creator?.profile ?? ""}
                  alt={data?.creator?.name}
                  className="w-10 rounded-full overflow-hidden object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-sm text-black">
                    {data?.creator?.name ?? "Nama Creator"}
                  </h2>
                  <h3 className="text-xs text-gray-600">
                    {data?.creator?.profession}
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="mt-24 bg-orange-500 py-12" ref={footer}>
        <Footer></Footer>
      </section>
    </>
  );
}

DetailsBlog.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await blogs.details(id);

    return { data };
  } catch (error) {}
};

export default DetailsBlog;
