import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useQueryParams() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname)
  
    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, encodeURIComponent(value));
        return decodeURIComponent(params.toString().replace(/%252C/g,","));
      },
      [searchParams],
    );
  
    const setQueryParam = (queryName: string, value: string) => {
      router.push(`${pathname+'/'}?${createQueryString(queryName, value)}`);
    };
  
    return { queryParams: searchParams, createQueryString, setQueryParam };
  }