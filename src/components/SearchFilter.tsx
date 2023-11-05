'use client'

import useQueryParams from '@/app/hooks/useQueryHook';
import { capitalize } from '@/utils/cap';
import { University } from '@/utils/commonTypes';
import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';

interface Props {
    data: University[];
    urlQueryFilters?: {},
    open: boolean,
    close: any
}


const SearchFilter = ({ data, urlQueryFilters, open, close }: Props) => {
    const [isOpen, setIsOpen] = useState(true);
    // const handleVisibility = useCallback(() => open = false, [open])
    // const handleVisibility = useCallback(() => close(!open), [open])

    const [languages, setLanguages] = useState<string[]>([]);
    const [campuses, setCampuses] = useState<string[]>([]);
    const [educationTypes, setEducationTypes] = useState<string[]>([]);
    const [gradeTypes, setGradeTypes] = useState<string[]>([]);
    const [universityTypes, setUniversityTypes] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);

    const [selectedLanguages, setSelectedLanguages] = useState<any>([]);
    const [selectedCampuses, setSelectedCampuses] = useState<any>([]);
    const [selectedEducationTypes, setSelectedEducationTypes] = useState<any>([]);
    const [selectedGradeTypes, setSelectedGradeTypes] = useState<any>([]);
    const [selectedUniversityTypes, setSelectedUniversityTypes] = useState<any>([]);
    const [selectedCountries, setSelectedCountries] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<any>(true);

    const { setQueryParam } = useQueryParams();

    const findObjectById = (id: string, propertyName: keyof University) => {
        return data.find((item) => item.id === id)?.[propertyName];
    };

    const generateArray = (idsArray: string[], propertyName: keyof University) => {
        return idsArray.map((id) => ({
            value: findObjectById(id, propertyName),
            label: findObjectById(id, propertyName)
        }));
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const countryIdParam = urlParams.get('country');
        const languageIdParam = urlParams.get('education_language');
        const campusIdParam = urlParams.get('campus_type');
        const educationTypeIdParam = urlParams.get('education_type');
        const gradeTypeIdParam = urlParams.get('grade_type');
        const universityTypeIdParam = urlParams.get('provider_type');



        const languageIdsArray = languageIdParam ? languageIdParam.split(',') : [];
        const countryIdsArray = countryIdParam ? countryIdParam.split(',') : [];
        const campusIdsArray = campusIdParam ? campusIdParam.split(',') : [];
        const educationTypeIdsArray = educationTypeIdParam ? educationTypeIdParam.split(',') : [];
        const gradeTypeIdsArray = gradeTypeIdParam ? gradeTypeIdParam.split(',') : [];
        const universityTypeIdsArray = universityTypeIdParam ? universityTypeIdParam.split(',') : [];


        const languageArray = generateArray(languageIdsArray, 'primaryLanguage');
        const countryArray = generateArray(countryIdsArray, 'country');
        const campusArray = generateArray(campusIdsArray, 'campusType');
        const educationTypeArray = generateArray(educationTypeIdsArray, 'educationType');
        const gradeTypeArray = generateArray(gradeTypeIdsArray, 'gradeType');
        const universityTypeArray = generateArray(universityTypeIdsArray, 'type');


        setSelectedLanguages(languageArray);
        setSelectedCountries(countryArray);
        setSelectedCampuses(campusArray);
        setSelectedEducationTypes(educationTypeArray);
        setSelectedGradeTypes(gradeTypeArray);
        setSelectedUniversityTypes(universityTypeArray);





        setIsLoading(false);
    }, [data]);

    const findIdsFromSelectedArray = (selectedArray: any, propertyName: string) => {
        const ids = selectedArray
            .map((item: { value: string }) => {
                const itemObject = data.find((school: University) => school[propertyName as keyof University].toLowerCase() === item.value.toLowerCase());
                return itemObject ? itemObject.id : null;
            })
            .filter((id) => id !== null);

        return ids.join(',');
    };


    useEffect(() => {
        const allCountryIds = findIdsFromSelectedArray(selectedCountries, 'country');
        allCountryIds.length > 0 && setQueryParam('country', allCountryIds);
    }, [selectedCountries]);

    useEffect(() => {
        const allUniversityIds = findIdsFromSelectedArray(selectedUniversityTypes, 'type');
        allUniversityIds.length > 0 && setQueryParam('provider_type', allUniversityIds);
    }, [selectedUniversityTypes]);

    useEffect(() => {
        const allGradeIds = findIdsFromSelectedArray(selectedGradeTypes, 'gradeType');
        allGradeIds.length > 0 && setQueryParam('grade_type', allGradeIds);
    }, [selectedGradeTypes]);

    useEffect(() => {
        const allEducationIds = findIdsFromSelectedArray(selectedEducationTypes, 'educationType');
        allEducationIds.length > 0 && setQueryParam('education_type', allEducationIds);
    }, [selectedEducationTypes]);

    useEffect(() => {
        const allCampusIds = findIdsFromSelectedArray(selectedCampuses, 'campusType');
        allCampusIds.length > 0 && setQueryParam('campus_type', allCampusIds);
    }, [selectedCampuses]);

    useEffect(() => {
        const allLanguageIds = findIdsFromSelectedArray(selectedLanguages, 'primaryLanguage');
        allLanguageIds.length > 0 && setQueryParam('education_language', allLanguageIds);
    }, [selectedLanguages]);




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
        <div>
            <div className='hidden w-full py-8 md:flex flex-col items-center min-h-[650px] border border-gray-400 rounded-xl'>
                <div className="flex w-full flex-col my-2 gap-[10px] px-4">
                    <p>Country</p>

                    <Select
                        placeholder='Select country'
                        options={countries}
                        isMulti
                        isLoading={isLoading}
                        value={selectedCountries}
                        onChange={setSelectedCountries}
                    />
                </div>

                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                    <p>University Type</p>

                    <Select
                        placeholder='Select University Type'
                        options={universityTypes}
                        isMulti
                        isLoading={isLoading}
                        value={selectedUniversityTypes}
                        onChange={setSelectedUniversityTypes}
                    />
                </div>

                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                    <p>Grade Type</p>

                    <Select
                        placeholder='Select Grade Type'
                        options={gradeTypes}
                        isMulti
                        isLoading={isLoading}
                        value={selectedGradeTypes}
                        onChange={setSelectedGradeTypes}
                    />
                </div>

                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                    <p>Education Type</p>

                    <Select
                        placeholder='Select Education Type'
                        options={educationTypes}
                        isMulti
                        isLoading={isLoading}
                        value={selectedEducationTypes}
                        onChange={setSelectedEducationTypes}
                    />
                </div>

                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                    <p>Campus Type</p>

                    <Select
                        placeholder='Select Campus Type'
                        options={campuses}
                        isMulti
                        isLoading={isLoading}
                        value={selectedCampuses}
                        onChange={setSelectedCampuses}
                    />
                </div>

                <div className="flex flex-col my-2 gap-[10px] px-2 w-full">
                    <p>Education Language</p>

                    <Select
                        placeholder='Select Education Language'
                        options={languages}
                        isMulti
                        value={selectedLanguages}
                        isLoading={isLoading}
                        onChange={setSelectedLanguages}
                    />
                </div>

                <button className='bg-[#0288D1] shadow-2xl w-[80%] text-white rounded-[15px] py-2 px-8 mt-4'>
                    CLEAR FILTERS
                </button>
            </div>


            <div className={`h-full ${open && 'block'} lg:hidden z-[999]`} role="dialog" aria-modal="true">

                <div className="fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex flex-row-reverse h-full">
                        <div className="flex flex-col w-[20%] h-[inherit]">

                            <div className="flex-1  bg-black opacity-60 bg-blend-overlay">
                            </div>
                        </div>

                        <div className="pt-6 flow-root h-[inherit] flex-1 bg-white">
                            <div className="-my-6">
                                <div className="bg-gray-100 opacity-100 w-full h-[60px] items-center flex justify-between px-6">
                                    <h3>Filter</h3>
                                    <button type="button" onClick={close} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex w-full flex-col my-2 gap-[10px] px-4">
                                    <p>Country</p>

                                    <Select
                                        placeholder='Select country'
                                        options={countries}
                                        isMulti
                                        isLoading={isLoading}
                                        value={selectedCountries}
                                        onChange={setSelectedCountries}
                                    />
                                </div>

                                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                                    <p>University Type</p>

                                    <Select
                                        placeholder='Select University Type'
                                        options={universityTypes}
                                        isMulti
                                        isLoading={isLoading}
                                        value={selectedUniversityTypes}
                                        onChange={setSelectedUniversityTypes}
                                    />
                                </div>

                                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                                    <p>Grade Type</p>

                                    <Select
                                        placeholder='Select Grade Type'
                                        options={gradeTypes}
                                        isMulti
                                        isLoading={isLoading}
                                        value={selectedGradeTypes}
                                        onChange={setSelectedGradeTypes}
                                    />
                                </div>

                                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                                    <p>Education Type</p>

                                    <Select
                                        placeholder='Select Education Type'
                                        options={educationTypes}
                                        isMulti
                                        isLoading={isLoading}
                                        value={selectedEducationTypes}
                                        onChange={setSelectedEducationTypes}
                                    />
                                </div>

                                <div className="flex flex-col my-2 gap-[10px] px-4 w-full">
                                    <p>Campus Type</p>

                                    <Select
                                        placeholder='Select Campus Type'
                                        options={campuses}
                                        isMulti
                                        isLoading={isLoading}
                                        value={selectedCampuses}
                                        onChange={setSelectedCampuses}
                                    />
                                </div>

                                <div className="flex flex-col my-2 gap-[10px] px-2 w-full">
                                    <p>Education Language</p>

                                    <Select
                                        placeholder='Select Education Language'
                                        options={languages}
                                        isMulti
                                        value={selectedLanguages}
                                        isLoading={isLoading}
                                        onChange={setSelectedLanguages}
                                    />
                                </div>

                                <div className="flex justify-center px-2 w-full mt-4">
                                <button className='bg-[#0288D1] shadow-2xl w-[100%] text-white rounded-[15px] py-2 flex px-20'>
                                    CLEAR FILTERS
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
