'use client'

import { capitalize } from '@/utils/cap';
import { University } from '@/utils/commonTypes';
import React, { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

interface Props {
    data: University[];
}


const SearchFilter = ({data}: Props) => {
const [languages, setLanguages] = useState<string[]>([]);
const [campuses, setCampuses] = useState<string[]>([]);
const [educationTypes, setEducationTypes] = useState<string[]>([]);
const [gradeTypes, setGradeTypes] = useState<string[]>([]);
const [universityTypes, setUniversityTypes] = useState<string[]>([]);
const [countries, setCountries] = useState<string[]>([]);

    useEffect(() => {
            const uniqueLanguages: any = Array.from(new Set(data.map((school: University) => school.primaryLanguage)));
            setLanguages(uniqueLanguages.map((language: string) => ({ value: language.toLowerCase(), label: capitalize(language) })));

            const uniqueCampus: any = Array.from(new Set(data.map((school: University) => school.campusType)));
            setCampuses(uniqueCampus.map((campus: string) => ({ value: campus.toLowerCase(), label: capitalize(campus) })));

            const uniqueEducationType: any = Array.from(new Set(data.map((school: University) => school.educationType)));
            setEducationTypes(uniqueEducationType.map((type: string) => ({ value: type.toLowerCase(), label: capitalize(type) })));

            const uniqueGradeType: any = Array.from(new Set(data.map((school: University) => school.gradeType)));
            setGradeTypes(uniqueGradeType.map((type: string) => ({ value: type.toLowerCase(), label: capitalize(type) })));

            const uniqueUniversityType: any = Array.from(new Set(data.map((school: University) => school.type)));
            setUniversityTypes(uniqueUniversityType.map((type: string) => ({ value: type.toLowerCase(), label: capitalize(type) })));

            const uniqueCountry: any = Array.from(new Set(data.map((school: University) => school.country)));
            setCountries(uniqueCountry.map((country: string) => ({ value: country.toLowerCase(), label: capitalize(country) })));

            
    }, [data])

    return (
        <div className='w-full py-8 flex flex-col items-center'>
            <div className="flex w-full flex-col my-2 gap-[10px] px-4">
                <p>Country</p>

                <Select
                    placeholder='Select country'
                    options={countries}
                    isMulti
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>University Type</p>

                <Select
                    placeholder='Select University Type'
                    options={universityTypes}
                    isMulti
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>Grade Type</p>

                <Select
                    placeholder='Select Grade Type'
                    options={gradeTypes}
                    isMulti
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>Education Type</p>

                <Select
                    placeholder='Select Education Type'
                    options={educationTypes}
                    isMulti
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                <p>Campus Type</p>

                <Select
                    placeholder='Select Campus Type'
                    options={campuses}
                    isMulti
                />
            </div>

            <div className="flex flex-col my-2 gap-[10px] px-2 w-full">
                <p>Education Language</p>

                <Select
                    placeholder='Select Education Language'
                    options={languages}
                    isMulti
                />
            </div>

            <button className='bg-[#0288D1] shadow-2xl w-[80%] text-white rounded-[15px] py-2 px-8 mt-4'>
                CLEAR FILTERS
            </button>
        </div>
    );
};

export default SearchFilter;
