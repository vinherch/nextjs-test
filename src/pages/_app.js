import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import Layout from "@/components/Layout";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style>
        {`
          html {
            font-family: ${montserrat.style.fontFamily}
          }
        `}
      </style>
      <Component {...pageProps} />
    </Layout>
  );
}
