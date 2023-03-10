import Board from "@/components/Board";
import Layout from "@/components/Layout";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chess</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Board />
        </main>
      </Layout>
    </>
  );
};

export default Home;
