import Head from "next/head";
import Link from "next/link";

import Header from "src/parts/Header";

import blogs from "src/constants/api/blogs";
import capitalizedText from "src/helpers/capitalizedText";

function DetailsBlog({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>SiDepresi </title>
      </Head>

      <section className="pt-10 overflow-hidden" style={{ height: 660 }}>
        <div className="absolute inset-0 z-0 w-full h-1/2 bg-orange-500 opacity-100"></div>
        <div className="meta-tittle absolute inset-0 object-fill z-0 w-full h-1/2 flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">
              {capitalizedText(data?.category ?? "Nama Kategori")}
            </h3>
            <h4 className="text-6xl text-green-800 font-semibold">
              {capitalizedText(data?.name ?? "Nama Info")}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>
      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify"></div>
          </div>
        </div>
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
