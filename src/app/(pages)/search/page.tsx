"use client"

import Header from "@/components/Header";
import SearchFilter from "@/components/SearchFilter";
import SearchFilterDropdown from "@/components/SearchFilterDropdown";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import SchoolCard from "@/components/SchoolCard";

import { useDispatch, useSelector } from "@/app/store";
import { getSchools } from "@/app/store/slices/school";
import { useEffect, useState } from "react";
import { University } from "@/utils/commonTypes";


const SearchPage = () => {
  const [rows, setRows] = useState<University[]>([])
  const [filteredRows, setFilteredRows] = useState<University[]>([]); // State for filtered rows
  const [searchValue, setSearchValue] = useState<string>(''); // State for search input value
  
  const dispatch = useDispatch();

  const { schools } = useSelector((state: { school: { schools: any } }) => state.school);

  useEffect(() => {
    dispatch<any>(getSchools());
  }, [dispatch])

  useEffect(() => {
    setRows(schools)
    setFilteredRows(schools)
  }, [schools]) 

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const filtered = rows.filter((school) =>
      school.course.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  return (
    <div className="w-full">
      <Header />
      <div className="mt-16">
        <p className="text-center text-[64px] font-[500]">
          Find Your Dream Programs
        </p>

        <div className="flex mt-10 items-center gap-[10px]">
          <div className="w-[23%]">
            <p className="text-[24px] font-[500] text-start text-gray-400">
              Filters
            </p>
          </div>
          <div className="flex-1 justify-between items-center flex">
            <p className="font-[400] text-gray-400 text-[1rem]">
              We found 4452 programs for you
            </p>
            <SearchFilterDropdown />
          </div>
        </div>

        <div className="flex mt-10 gap-[20px]">
          <div className="w-[23%] flex bg-white border border-gray-400 rounded-xl h-[650px] ">
            <SearchFilter />
          </div>

          <div className="flex-1 flex w-full flex-col">
            <div className="relative">
              <input
                type="text"
                id="searchprograms"
                className="block rounded-lg px-4 py-4 w-full text-sm text-black dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => handleSearch(e.target.value)}
              />
              <label
                htmlFor="searchprograms"
                className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 text-[24px] scale-75 top-2 px-4 bg-white z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100'
                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Type Interested Program
              </label>
              <button
                // type="submit"
                className="absolute text-white right-6 bottom-[40%] focus:ring-4 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>

            <div className=" mt-[20px]">
              {/* {
                rows.length > 0 && rows.map((school, index) => (
                  <SchoolCard key={index} school={school} />
                ))
              } */}
              {filteredRows.length > 0 ? (
          filteredRows.map((school, index) => <SchoolCard key={index} school={school} />)
        ) : (
          <p>No matching schools found.</p>
        )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
