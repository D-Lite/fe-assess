import ClientOnly from "@/components/ClientOnly";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-[20px] items-center w-full justify-center h-[60vh]">
            <h2 className="text-[40px] font-bold">Page not available yet!!</h2>
            <p className="italic text-[20px]">Looks like we do not have a page for this route yet! Take a look at our search</p>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect className="spinner_9y7u" x="1" y="1" rx="1" width="10" height="10" />
                <rect className="spinner_9y7u spinner_DF2s" x="1" y="1" rx="1" width="10" height="10" />
                <rect className="spinner_9y7u spinner_q27e" x="1" y="1" rx="1" width="10" height="10" />
            </svg>
            <Link className="underline text-blue-400" href="/search">Ask UniSearch</Link>
        </div>
    );
}