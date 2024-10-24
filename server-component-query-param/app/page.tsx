'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    /* Create a state wherein we store the gender of our user */
    const [gender, setGender] = useState<string | undefined>(undefined);

    const router = useRouter();

    const handleSubmit = (currentGender: string | undefined) => {
        /*
            * Here, we attach/replace our URL with our query parameter
            * Query parameters follow the format: key=value
        */
        router.replace(`/?gender=${currentGender}`);

        /* Trigger a re-fetch of data from our Server Component */
        router.refresh();
    }

    return (
        <div className="w-screen h-screen flex flex-col gap-5 flex justify-center items-center">
            <input 
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Enter your gender here..."
                className="rounded-md px-2 text-background focus:outline-none"
            />
            <button onClick={() => handleSubmit(gender)}>submit gender</button>
        </div>
    )
}