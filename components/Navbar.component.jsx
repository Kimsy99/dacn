import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="bg-gray-50">
      <nav className="max-w-screen-xl mx-auto flex items-center flex-wrap bg-gray-50 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            {/* <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-black h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg> */}
            <Image
              src="/blacklogo-transbackground.png"
              alt="DACN Logo"
              width={52}
              height={57.407496977}
            />
            <span className="text-xl text-dark font-bold ml-5 md:block hidden">
              Data Analytics Consultancy Network
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-gray-100 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full py-2 px-4  rounded text-black font-bold items-center justify-center ">
                Home
              </a>
            </Link>
            <div className="p-2">
              <div className="dropdown inline-block relative">
                <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">About</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className="">
                    <Link href="/about#who-we-are">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#data"
                      >
                        Who We Are
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/about/#what-we-do">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        What We Do
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/about/#ambassadors">
                      <a
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Student Ambassadors
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <Link href="/project">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center ">
                Projects
              </a>
            </Link> */}
            <div className="p-2">
              <div className="dropdown inline-block relative">
                <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">Project</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className="">
                    <Link href="/project/#showcase">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Showcase
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/project/#timeline">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Timeline
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/project/#team">
                      <a
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Project Teams
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/client">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center ">
                Clients
              </a>
            </Link>

            <Link href="/student">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center">
                Students
              </a>
            </Link>
            {/* end */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
