import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.center} rel="noopener noreferrer">
        {/* Powered by{" "} */}
        <Image
          src="/blacklogo-transbackground.png"
          className={styles.logo}
          alt="Vercel Logo"
          width={72}
          height={72}
        />
        {/* <p className="text-md self-center">
          Copyright © 2021 DACN. All rights reserved.
        </p> */}
        <div className="self-center grid grid-cols-5 gap-5 ml-auto box-border flex-wrap">
          <Image
            src="/icons/facebook.svg"
            alt="Vercel Logo"
            width={36}
            height={36}
          />
          <Image
            src="/icons/insta.svg"
            alt="Vercel Logo"
            width={36}
            height={36}
          />
          <Image
            src="/icons/linkedin.svg"
            alt="Vercel Logo"
            width={36}
            height={36}
          />
          <Image
            src="/icons/twitter.svg"
            alt="Vercel Logo"
            width={36}
            height={36}
          />
          <Image
            src="/icons/youtube.svg"
            alt="Vercel Logo"
            width={36}
            height={36}
          />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
