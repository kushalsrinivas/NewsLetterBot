import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ background: "white" }}>
      <div style="container">
        <h1>Promptly Launched</h1>
        <h2>The Most waited chat gpt plugin is here</h2>
        <button>Download Now</button>
        <button>Git Hub </button>
        <button>Product Hunt </button>
      </div>
    </div>
  );
}
