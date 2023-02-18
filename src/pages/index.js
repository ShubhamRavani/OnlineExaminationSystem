import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Homepage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [color, setColor] = useState(false);
  return (
    <>
      <Head>
        <title>Online Examination System</title>
        <meta name="description" content="Online Examination System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-between bg-white">
        <div className=" text-black bg-white">
          <div className="fixed top-0 left-0 right-0 bg-slate-50">
            <Navbar />
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-slate-50">
            <Footer setValue={setColor} color={color}></Footer>
          </div>
          <div className="mt-16 bg-slate-50">
            <Homepage />
          </div>
        </div>
      </main>
    </>
  );
}
