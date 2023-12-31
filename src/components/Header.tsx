import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { HiTranslate } from "react-icons/hi";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleVisibility = useCallback(() => setIsOpen(!isOpen), [isOpen])

  const handleScroll = () => {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop > 10) { setSticky(true) }
    else { setSticky(false) }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <header className="py-4 w-full" style={{
        background: isSticky ? '#fff' : '',
        zIndex: '999', position: isSticky ? 'fixed' : 'relative', width: 'full'
      }}>
        <nav className=" border-gray-300 border-b lg:border-none px-4 lg:px-6 pb-6 lg:py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img
                src="https://www.askuni.com/images/askuni.png"
                className="mr-3 h-6 sm:h-9"
                alt="ASKUNI Logo"
              />
            </a>
            <div className="flex items-center lg:hidden" onClick={handleVisibility}>
              {/* <div className="flex lg:hidden"> */}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* </div> */}
            </div>

            <div
              className="hidden justify-between items-center w-full lg:gap-x-12 lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row items-center lg:space-x-12 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Universities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    How to Apply?
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Partner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Fairs
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                    Sign Up
                  </button>
                  <div className="w-8 h-8 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                      width="35" height="35" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11 1H3c-1.1 0-2 .9-2 2v12l3-3h5v-1c0-2.2 1.79-4 4-4V3c0-1.1-.9-2-2-2m0 3H9.5c-.34 1.19-.96 2.3-1.82 3.26l-.02.02l1.26 1.25l-.37 1.01L7 8l-2.5 2.5l-.69-.73l2.53-2.49A8.58 8.58 0 0 1 4.86 5h.99c.31.6.69 1.17 1.15 1.68A7.69 7.69 0 0 0 8.57 4H3V3h3.5V2h1v1H11v1m10 5h-8c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7l3 3V11c0-1.1-.9-2-2-2m-1.37 10l-.85-2.25h-3.56L14.38 19h-1.5l3.37-9h1.5l3.38 9h-1.5M17 12l1.22 3.25h-2.43L17 12Z">
                      </path></svg>
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div className={`h-full lg:hidden ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">

          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex h-full">
            <div className="flex flex-col w-[20%] h-[inherit]">
              <div className="bg-white opacity-100 w-full h-[80px] items-center flex justify-center">
              <button onClick={handleVisibility} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              </div>
              <div className="flex-1  bg-black opacity-60 bg-blend-overlay">
              </div>
            </div>

            <div className="pt-6 flow-root h-[inherit] flex-1 bg-white">
              <div className="-my-6 divide-y divide-gray-500/10">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row text-[20px] items-start lg:space-x-12 lg:mt-0">
                  <li className="border-b border-b-gray-300 w-full">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-[#666666] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Universities
                    </a>
                  </li>
                  <li className="border-b border-b-gray-300 w-full">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-[#666666] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="border-b border-b-gray-300 w-full">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-[#666666] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      How to Apply?
                    </a>
                  </li>
                  <li className="border-b border-b-gray-300 w-full">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-[#666666] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Partner
                    </a>
                  </li>
                  <li className="border-b border-b-gray-300 w-full">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-[#666666] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Fairs
                    </a>
                  </li>
                  <li className="flex  w-full">
                    <button className="bg-blue-500  text-start hover:bg-blue-700 text-white py-2 px-6 w-full">
                      Sign Up
                    </button>
                  </li>
                  <li className="items-center flex justify-center w-full text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="my-2"
                      width="35" height="35" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11 1H3c-1.1 0-2 .9-2 2v12l3-3h5v-1c0-2.2 1.79-4 4-4V3c0-1.1-.9-2-2-2m0 3H9.5c-.34 1.19-.96 2.3-1.82 3.26l-.02.02l1.26 1.25l-.37 1.01L7 8l-2.5 2.5l-.69-.73l2.53-2.49A8.58 8.58 0 0 1 4.86 5h.99c.31.6.69 1.17 1.15 1.68A7.69 7.69 0 0 0 8.57 4H3V3h3.5V2h1v1H11v1m10 5h-8c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7l3 3V11c0-1.1-.9-2-2-2m-1.37 10l-.85-2.25h-3.56L14.38 19h-1.5l3.37-9h1.5l3.38 9h-1.5M17 12l1.22 3.25h-2.43L17 12Z">
                      </path></svg>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
