import Image from "next/image";
import DefaultUniImage from '@/assets/images/university_default.jpg';
import { capitalize } from "@/utils/cap";
import { University } from "@/utils/commonTypes";

const SchoolCard = ({school}: { school: University }) => {
    return (
        <div>
        {
            school && (
                <div className="mb-[20px] p-[25px] bg-white border border-gray-300 shadow-inner rounded-2xl mt-[10px]">
            <div className=" flex justify-between gap-[30px]">
                <div className=" w-[30%] flex items-center justify-center">
                    <Image alt="University logo" src={DefaultUniImage} className="rounded-xl" width={269} height={192} />
                </div>
                <div className="flex flex-1 flex-col border-r border-[1px solid] border-gray-300">
                    <h5 className=" text-[20px]">{school.name}</h5>
                    <h6 className="text-gray-500 text-[16px] mt-2">{capitalize(school.type) } University</h6>
                    <h6 className="my-[10px]">{capitalize(school.course)} </h6>

                    <div className="flex flex-wrap w-[80%]">
                        <div className="h-[30px] min-w-[100px] flex justify-center items-center m-1 font-medium py-1 px-2 rounded-lg text-green-700 bg-white border border-green-300 ">
                            <div slot="avatar">
                                <div className="flex relative w-4 h-4 text-green-700 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                                        className="" width="inherit" height="inherit" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                {school.primaryLanguage}
                            </div>
                        </div>
                        <div className="h-[30px] min-w-[100px] flex justify-center items-center m-1 font-medium py-1 px-2 rounded-lg text-orange-700 bg-white border border-orange-300 ">
                            <div slot="avatar">
                                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                                        width="inherit" height="inherit" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 23c-3.7 0-7.4.1-11.1.27l.8 17.98c3.4-.16 6.8-.25 10.3-.25c118.8 0 215 96.2 215 215s-96.2 215-215 215c-89.6 0-166.35-54.7-198.65-132.6l27.63-8.3l-48.43-34.3l-19.05 54.5l22.55-6.7C74.68 428.8 158.4 489 256 489c128.6 0 233-104.4 233-233S384.6 23 256 23zm-30.8 2.04c-13.3 1.75-26.1 4.6-38.6 8.48l5.6 17.09c11.4-3.54 23.3-6.15 35.4-7.75l-2.4-17.82zm-57 15.12c-12.4 5.05-24.2 11.12-35.4 18.12l9.5 15.21c10.3-6.44 21.2-12.03 32.6-16.67l-6.7-16.66zM116.4 69.5a234.139 234.139 0 0 0-29.35 26.12l13.05 12.28c8.3-8.77 17.4-16.81 27-24.06l-4.8-6.57l-5.9-7.77zm69.5 8.58l-4.4 17.44l217 55.48l4.4-17.4l-217-55.52zM74.07 110.5c-8.19 10.2-15.54 21.2-21.94 32.7l15.65 8.8c5.91-10.7 12.69-20.8 20.26-30.3l-13.97-11.2zm127.63 8.8c-3.9 26 2.8 55.2 14.2 79.2c6.4 13.4 14.2 25.2 21.9 33.8c4.2 4.7 8.4 8.3 12.2 10.9l-5.4 21.2c-4.6.4-10 1.6-16 3.7c-10.9 3.8-23.4 10.4-35.4 19.1c-21.6 15.6-41.4 37.9-50.4 62.6l167.5 42.9c3.9-26-2.8-55.2-14.2-79.2c-6.4-13.4-14.2-25.2-21.9-33.8c-4.2-4.7-8.4-8.3-12.2-10.9l5.4-21.2c4.5-.5 10-1.6 16-3.7c10.9-3.8 23.4-10.4 35.4-19.1c21.6-15.6 41.4-37.9 50.4-62.6l-167.5-42.9zM43.24 160.9c-5.33 12-9.7 24.4-13 37.3l17.48 4.2c3.03-11.8 7.04-23.2 11.95-34.2l-16.43-7.3zM26.2 217.5C24.11 230 23 242.9 23 256v.9l18-.2v-.7c0-12.1 1.02-24 2.95-35.6l-17.75-2.9zM113.5 361l-4.4 17.4l217 55.5l4.4-17.4l-217-55.5z">
                                        </path></svg>
                                </div>
                            </div>
                            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                {school.yearsOfStudy} years
                            </div>
                        </div>
                        <div className="h-[30px] min-w-[100px] flex justify-center items-center m-1 font-medium py-1 px-2 rounded-lg text-blue-700 bg-white border border-blue-300 ">
                            <div slot="avatar">
                                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                                        width="inherit" height="inherit" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>
                                        <path fill="currentColor" d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.37 12.5l-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9h-1.55z"></path>
                                        <path fill="currentColor" d="m13.96 7.17l-1.31 3.72h2.69l-1.3-3.72z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                {capitalize(school.educationType)}
                            </div>
                        </div>
                        <div className="h-[30px] min-w-[40px] flex justify-center items-center m-1 font-medium py-3 px-2 rounded-lg text-purple-700 bg-white border border-purple-300 ">
                            <div slot="avatar">
                                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                                        width="inherit" height="inherit" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 23c-3.7 0-7.4.1-11.1.27l.8 17.98c3.4-.16 6.8-.25 10.3-.25c118.8 0 215 96.2 215 215s-96.2 215-215 215c-89.6 0-166.35-54.7-198.65-132.6l27.63-8.3l-48.43-34.3l-19.05 54.5l22.55-6.7C74.68 428.8 158.4 489 256 489c128.6 0 233-104.4 233-233S384.6 23 256 23zm-30.8 2.04c-13.3 1.75-26.1 4.6-38.6 8.48l5.6 17.09c11.4-3.54 23.3-6.15 35.4-7.75l-2.4-17.82zm-57 15.12c-12.4 5.05-24.2 11.12-35.4 18.12l9.5 15.21c10.3-6.44 21.2-12.03 32.6-16.67l-6.7-16.66zM116.4 69.5a234.139 234.139 0 0 0-29.35 26.12l13.05 12.28c8.3-8.77 17.4-16.81 27-24.06l-4.8-6.57l-5.9-7.77zm69.5 8.58l-4.4 17.44l217 55.48l4.4-17.4l-217-55.52zM74.07 110.5c-8.19 10.2-15.54 21.2-21.94 32.7l15.65 8.8c5.91-10.7 12.69-20.8 20.26-30.3l-13.97-11.2zm127.63 8.8c-3.9 26 2.8 55.2 14.2 79.2c6.4 13.4 14.2 25.2 21.9 33.8c4.2 4.7 8.4 8.3 12.2 10.9l-5.4 21.2c-4.6.4-10 1.6-16 3.7c-10.9 3.8-23.4 10.4-35.4 19.1c-21.6 15.6-41.4 37.9-50.4 62.6l167.5 42.9c3.9-26-2.8-55.2-14.2-79.2c-6.4-13.4-14.2-25.2-21.9-33.8c-4.2-4.7-8.4-8.3-12.2-10.9l5.4-21.2c4.5-.5 10-1.6 16-3.7c10.9-3.8 23.4-10.4 35.4-19.1c21.6-15.6 41.4-37.9 50.4-62.6l-167.5-42.9zM43.24 160.9c-5.33 12-9.7 24.4-13 37.3l17.48 4.2c3.03-11.8 7.04-23.2 11.95-34.2l-16.43-7.3zM26.2 217.5C24.11 230 23 242.9 23 256v.9l18-.2v-.7c0-12.1 1.02-24 2.95-35.6l-17.75-2.9zM113.5 361l-4.4 17.4l217 55.5l4.4-17.4l-217-55.5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                {capitalize(school.gradeType)} degree
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[20%] text-center">
                    <div>
                        <div>
                            <h6 className="text-gray-500 text-[16px] line-through">{school.amount} EUR</h6>
                        </div>
                        <div>
                            <h4 className="text-[20px] text-[#0dcaf0]">1395.00 EUR</h4>
                        </div>
                    </div>
                    <div className=" text-center flex items-center justify-center">
                        <div className="h-[30px] w-[80px] flex justify-center items-center m-1 font-medium py-2 px-2 rounded-lg text-green-700 bg-white border border-green-300 ">
                            <div slot="avatar">
                                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="inherit" height="inherit" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M17.005 16.003h2v-12h-10v2h8v10Zm0 2v3c0 .552-.45 1-1.007 1H4.012a1.001 1.001 0 0 1-1.007-1l.002-14c0-.552.45-1 1.007-1h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3Zm-11.998-10l-.002 12h10v-12H5.007Zm1.998 8h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 0 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2v-2Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                Yearly 
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="border-[1px solid] border-gray-300 m-[5px]" />
                        <h6 className="text-gray-500 text-[16px] ">Deadline:
                            <span className="text-red-500">{+' '+ school.deadlineForApplication}</span>
                        </h6>
                        <h6 className="text-gray-500 text-[16px] ">Season:
                            <span className="font-[400]"> {capitalize(school.season)} </span>
                        </h6>
                        <button className='bg-[#0288D1] shadow-xl w-[100%] text-white rounded-[15px] py-2 px-8 mt-4'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
            )
        }
        </div>
    )
}

export default SchoolCard;