import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <body>
      <div className="container">
        <h1>Promptly Launched</h1>
      </div>
    </body>
  );
}
