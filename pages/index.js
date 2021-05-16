import Head from "next/head";

import Input from "../components/Input"
// import './style.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mazda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
        <h1 className="title">
          HELLO THERE <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Input />
      </main>
    </div>
  );
}
