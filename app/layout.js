"use client";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.compat.css";
import "./globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import BackTop from "@/component/backtotop";

export default function RootLayout ( { children } ) {

  useEffect( () => {
    Aos.init( { duration: 1000 } );
  } );

  return (

    <html lang="en" >

      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <title>Shagoto Bhakat</title>
      <body>
        { children }
        <BackTop></BackTop>
      </body>


    </html>

  );
}
