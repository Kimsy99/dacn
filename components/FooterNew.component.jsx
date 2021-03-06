import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className=" bg-gray-50 border-gray-200">
        <div className="mx-auto container pt-12 flex flex-col items-center justify-center">
          <div>
            <Image
              src="/blacklogo-transbackground.png"
              className={styles.logo}
              alt="Vercel Logo"
              width={72}
              height={79.487303507}
            />
          </div>
          <div className="text-black flex flex-col md:items-center f-f-l pt-3">
            {/* <h1 className="text-2xl font-black">Build. Review. Ship.</h1> */}
            {/* <div className="md:flex items-center grid grid-cols-3 grid-gap-3 mt-5 md:mt-10 text-base text-color f-f-l">
              <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Clients</h2>
              <h2 className="cursor-pointer">Students</h2>
              {/* <h2 className="cursor-pointer">Student Ambassadors</h2> */}
            {/* </div> */}
            <div className="my-4 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/about#who-we-are">DACN Founders</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/about#who-we-are">DACN Committee</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/about#ambassadors">Student Ambassadors</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/student">Students</Link>
                </li>
                <li className="cursor-pointer pt-4 lg:py-0">
                  <Link href="/client">Clients</Link>
                </li>
                {/* <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Careers
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li> */}
              </ul>
            </div>
            {/* <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/student">Students</Link>
                </li>
                <li className="cursor-pointer pt-4 lg:py-0">
                  <Link href="/client">Clients</Link>
                </li>
              </ul>
            </div> */}
            <div className="text-sm text-color mb-5 f-f-l">
              <p> ?? 2020 DACN. All rights reserved</p>
            </div>
          </div>
          {/* <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" /> */}
          <div className="flex justify-between items-center pt-5 grid grid-cols-5 gap-5 ">
            <a href="https://www.facebook.com/DACNMalaysia" target="__blank">
              <Image
                src="/icons/facebook.svg"
                alt="Vercel Logo"
                width={36}
                height={36}
              />
            </a>
            <a href="https://www.instagram.com/dacn.malaysia/" target="__blank">
              <Image
                src="/icons/instagram.svg"
                alt="Vercel Logo"
                width={36}
                height={36}
              />
            </a>
            <a href="https://www.linkedin.com/company/dacn" target="__blank">
              <Image
                src="/icons/linkedin.svg"
                alt="Vercel Logo"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCFAxwozviUmGi7mobmLBWeg/"
              target="__blank"
            >
              <Image
                src="/icons/youtube.svg"
                alt="Vercel Logo"
                width={36}
                height={36}
              />
            </a>
            <a href="mailto:dacn.malaysia@gmail.com">
              <Image
                src="/icons/gmail.svg"
                alt="Vercel Logo"
                width={36}
                height={36}
              />
            </a>
            <div className="mr-4"></div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
