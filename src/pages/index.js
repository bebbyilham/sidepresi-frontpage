import Head from "next/head";
import Link from "next/link";

import axios from "configs/axios";

export default function Home(props) {
  console.log(props);
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>SiDepresi</title>
        <link rel="icon" href="/favicon.ico " />
      </Head>

      <main>
        <h1>Beranda</h1>
        <Link href="/random">
          <a>Bring me to random</a>
        </Link>
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
