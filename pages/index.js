import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((log) => console.log(log));
  });
  return <main>wauuwa</main>;
}
