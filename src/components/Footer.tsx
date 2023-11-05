const Footer = () => {
    return (
        <div className="w-full flex justify-center bg-[#f6f7f8]">
            <footer className="bg-[#f6f7f8] w-full text-[#6c757d] px-[10px] lg:px-0 mt-16 flex items-center">
                <div className="flex items-center flex-col px-0 lg:px-72 py-6 lg:py-8">
                    <div className="flex justify-between md:flex-col flex-row flex-wrap">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div className="mb-6 md:mb-0 flex flex-col ">
                            <a href="#" className="flex items-center">
                                <img
                                    src="https://www.askuni.com/images/askuni.png"
                                    className="mr-3 h-6 sm:h-9"
                                    alt="ASKUNI Logo"
                                />
                            </a>

                            <div className="w-[100%] lg:w-[100%] flex flex-col gap-[5px]">
                                <p className="p-[10px]">Halkalı Merkez Mah. Halkalı Cad. 281/23 Zaim Teknopark No:6 34303 Küçükçekmece/Istanbul</p>
                                <p className="p-[10px]">+(90) 552 367 43 36</p>
                                <p className="p-[10px]">info@askuni.com</p>
                            </div>
                        </div>
                            <div>
                                <h2 className="mb-6 text-lg font-medium text-gray-900 dark:text-white">Navigations</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-regular text-md">
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">About Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Programs</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Universities</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Articles</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Contact</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Fairs</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Become a Partner</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-lg font-medium text-gray-900 dark:text-white">For Students</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-regular text-md">
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">How To Apply</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Candidate Form</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-lg font-medium text-gray-900 dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-regular text-md">
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Terms and Conditions</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Cookie Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Disclaimer</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 w-full sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center w-full sm:justify-between flex flex-col lg:flex-row">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 -2023 <a href="#" className="hover:underline">Askuni</a>. All Rights Reserved
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="#" className=" pr-2 border-r border-[1px solid] border-gray-300 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span>Facebook</span>
                            </a>
                            <a href="#" className="pr-2 border-r border-[1px solid] border-gray-300 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span>Twitter </span>
                            </a>
                            <a href="#" className="pr-2 border-r border-[1px solid] border-gray-300 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span className="">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span className="">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;