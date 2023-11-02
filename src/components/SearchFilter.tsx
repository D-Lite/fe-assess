import React from 'react';

interface Props {
    name: string;
}

const SearchFilter = () => {
    return (
        <div className='w-full'>
            <div className="flex flex-col my-8 gap-[10px] px-2">
                <p>Country</p>
                <select className="row text-[1rem] px-8 py-2 cursor-pointer text-gray-500 bg-white border border-gray-400 rounded-md shadow-sm outline-none appearance-none focus:border-black">
                    <option value="-can_apply,rank">Featured</option>
                    <option value="-can_apply,discounted_price">Low to High</option>
                    <option value="-can_apply,-discounted_price">High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default SearchFilter;
