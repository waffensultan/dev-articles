import { headers } from "next/headers";

import "./globals.css";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    /* Retrieve the headers sent to us from the Middleware */
    const headersList = headers();

    /* 
        * Retrieve the value of the user's gender from 
        * the field which we previously declared: `user_gender`
    */
    const userGender = headersList.get('user_gender');

    return (
        <html lang="en">
            <body className={`${userGender === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}>
                {children}
            </body>
        </html>
    )
}