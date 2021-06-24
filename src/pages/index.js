import Head from "next/head";
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle.svg";

import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import Partners from "src/parts/Partners";
import ListBlogs from "src/parts/ListBlogs";
import ListCategories from "src/parts/ListCategories";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>SiDepresi</title>
        {/* <link rel="icon" href="/favicon.ico " /> */}
      </Head>

      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full"></div>
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="container mx-auto px-4">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Partners></Partners>
        </section>
        <section className="container mx-auto pt-24">
          <ListBlogs data={data}></ListBlogs>
        </section>
        <section className="container mx-auto pt-24">
          <ListCategories></ListCategories>
        </section>
        <section className="container mx-auto py-24"></section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/blogs`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};
