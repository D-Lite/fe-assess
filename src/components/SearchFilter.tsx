'use client'

import React from 'react';
import Select, { StylesConfig } from 'react-select';

interface Props {
    name: string;
}
interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];


const SearchFilter = () => {
    return (
        <div className='w-full py-8 flex flex-col items-center'>
            <div className="flex w-full flex-col my-2 gap-[10px] px-4">
                <p>Country</p>

                <Select
                    placeholder='Select country'
                    options={colourOptions}
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>University Type</p>

                <Select
                    placeholder='Select University Type'
                    options={colourOptions}
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>Grade Type</p>

                <Select
                    placeholder='Select Grade Type'
                    options={colourOptions}
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>Education Type</p>

                <Select
                    placeholder='Select Education Type'
                    options={colourOptions}
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>Campus Type</p>

                <Select
                    placeholder='Select Campus Type'
                    options={colourOptions}
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-2">
                <p>Education Language</p>

                <Select
                    placeholder='Select Education Language'
                    options={colourOptions}
                />
            </div>

            <button className='bg-[#0B69FF]  w-[80%] text-white rounded-[15px] py-2 px-8 mt-4'>
                CLEAR FILTERS
            </button>
        </div>
    );
};

export default SearchFilter;
