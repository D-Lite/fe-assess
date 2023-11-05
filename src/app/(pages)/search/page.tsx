"use client"

import Header from "@/components/Header";
import SearchFilter from "@/components/SearchFilter";
import SearchFilterDropdown from "@/components/SearchFilterDropdown";
import SchoolCard from "@/components/SchoolCard";

import { useDispatch, useSelector } from "@/app/store";
import { getSchools } from "@/app/store/slices/school";
import { useCallback, useEffect, useState } from "react";
import { University } from "@/utils/commonTypes";
import useQueryParams from "@/app/hooks/useQueryHook";
import ReactPaginate from "react-paginate";
import Footer from "@/components/Footer";


const SearchPage = () => {
  const [rows, setRows] = useState<University[]>([])
  const [filteredRows, setFilteredRows] = useState<University[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterVisibility = useCallback(() => setIsFilterOpen(!isFilterOpen), [isFilterOpen])

  const [totalPages, setTotalPages] = useState(0);


  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredRows.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredRows.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredRows.length;
    setItemOffset(newOffset);
  };




  const dispatch = useDispatch();
  const [sortByAmount, setSortByAmount] = useState('-can_apply,rank');
  const { setQueryParam } = useQueryParams();

  const { schools } = useSelector((state: { school: { schools: any } }) => state.school);


  useEffect(() => {
    dispatch<any>(getSchools());
  }, [dispatch])

  useEffect(() => {
    setRows(schools)
    setFilteredRows(schools)

    setTotalPages(Math.ceil(schools / itemsPerPage));
    setQueryParam('limit', itemsPerPage.toString());
    setQueryParam('ordering', sortByAmount)
  }, [schools, sortByAmount, itemsPerPage])

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const filtered = rows.filter((school) =>
      school.course.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortByAmount(event.target.value);

    // Sort the filtered rows based on the selected sort order
    const sorted = sortRows(filteredRows, event.target.value);
    setFilteredRows(sorted);
  };

  const sortRows = (data: University[], sortOrder: string) => {
    let sortedData = [...data];
    if (sortOrder === '-can_apply,discounted_price') {
      sortedData.sort((a, b) => a.amount - b.amount);
    } else if (sortOrder === '-can_apply,-discounted_price') {
      sortedData.sort((a, b) => b.amount - a.amount);
    } else if (sortOrder === '-can_apply,rank') {
      sortedData = [...rows]
    }
    return sortedData;
  };


  return (
    <div className="w-full">
      <div className="my-16 px-[10px] md:px-[20px] lg:px-[10px]">
        <p className="text-center xs:text-[20px] md:text-[45px] lg:text-[64px] font-[500]">
          Find Your Dream Programs
        </p>

        <div className="flex mt-10 items-center gap-[10px] flex-col lg:flex-row">
          <div className="w-[23%]">
            <p className="text-[24px] lg:flex hidden font-[500] text-start text-gray-400">
              Filters
            </p>
          </div>
          <div className="flex-1 justify-between items-center flex flex-row w-full">
            <p className="font-[400] text-gray-400 text-[1rem] text-left lg:w-full w-fit">
              We found {filteredRows.length ?? 0} programs for you
            </p>

              <div onClick={handleFilterVisibility} className={`h-[40px] w-[130px] flex lg:hidden justify-center items-center font-medium p-2 rounded-xl text-blue-700 bg-white border border-blue-300 `}>
              <div slot="avatar">
                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="inherit" height="inherit" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z">
                </path>
                </svg>
                </div>
              </div>
              <div className="text-sm font-normal leading-none max-w-full flex-initial uppercase">
                Filters
              </div>
            </div>

            <SearchFilterDropdown value={sortByAmount} onChange={handleSortChange} />
          </div>
        </div>

        <div className="flex mt-10 gap-[20px]">
          <div className={`w-[23%] lg:block ${isFilterOpen ? 'flex' : 'hidden'}`}>
            <SearchFilter data={filteredRows} />
          </div>

          <div className="flex-1 flex w-full flex-col">
            <div className="relative">
              <input
                type="text"
                id="searchprograms"
                className="block rounded-[20px] px-4 py-4 w-full text-sm text-black dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 hover:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              {filteredRows.length > 0 ? (
                currentItems.map((school, index) =>
                  <SchoolCard key={index} school={school} />
                )) : (
                <p>No matching schools found.</p>
              )}

              <div className="w-full items-center justify-center flex">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  className="flex justify-between gap-5 min-w-[50px]"
                  activeClassName="w-[30px] h-[30px] flex justify-center bg-gray-200 p-0 m-0 rounded-full"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
