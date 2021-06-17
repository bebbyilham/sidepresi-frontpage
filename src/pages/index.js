import Head from "next/head";
import Link from "next/link";

export default function Home() {
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
