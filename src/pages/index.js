import Head from "next/head";
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/Circle.svg";

export default function Home(props) {
  console.log(props);
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>SiDepresi</title>
        <link rel="icon" href="/favicon.ico " />
      </Head>

      <main>
        <section className="pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
        </section>
      </main>
    </div>
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
