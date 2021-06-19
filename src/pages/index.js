import Head from "next/head";
// import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle.svg";

import Header from "src/parts/Header";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>SiDepresi</title>
        {/* <link rel="icon" href="/favicon.ico " /> */}
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
          </div>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};
