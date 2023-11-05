import React from 'react';

interface Props {
    value: string;
    onChange: any;
}

const SearchFilterDropdown = ({value, onChange}: Props) => {
    return (
        <div className="dropdown">
        <select value={value}  onChange={onChange} className="row text-[1rem] px-6 py-2 cursor-pointer text-gray-500 bg-white border border-gray-400 rounded-2xl shadow-sm outline-none appearance-none focus:border-black">
              <option value="-can_apply,rank">Featured</option>
              <option value="-can_apply,discounted_price">Low to High</option>
              <option value="-can_apply,-discounted_price">High to Low</option>
            </select>
            </div>
    );
};

export default SearchFilterDropdown;
