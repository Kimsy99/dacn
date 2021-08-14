import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1"
        rel="noopener noreferrer"
      >
        {/* Powered by{" "} */}
        <div className="grid grid-cols-1 items-center justify-items-center ">
          <div className="grid grid-cols-2 items-center justify-items-center ">
            <Image
              src="/blacklogo-transbackground.png"
              className={styles.logo}
              alt="Vercel Logo"
              width={72}
              height={72}
            />
            <p>Data Analytics Consultancy Network</p>
          </div>
        </div>
        <div className="items-center justify-items-center grid grid-row-4 gap-2  box-border flex-wrap w-full">
          <p>The Team</p>
          <p>DACN Founders</p>
          <p>DACN Committee</p>
          <p>Student Ambassadors</p>
        </div>
        <div className="items-center justify-items-center grid grid-row-3 gap-2 box-border flex-wrap w-full">
          <p>Join Us</p>
          <p>Clients</p>
          <p>Students</p>
        </div>
        {/* <p className="text-md self-center">
          Copyright © 2021 DACN. All rights reserved.
        </p> */}
        <div className="items-center justify-items-center ml-auto mr-auto  grid grid-cols-5 gap-5  box-border flex-wrap">
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
