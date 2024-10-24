import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    /*
        * Here, we retrieve the query parameters in our URL.
        * `nextUrl.searchParams` is a Next.js method/function that extends URLSearchParams 
        * (https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
    */
    const queryParams = request.nextUrl.searchParams; 

    /* Retrieve the value of the query parameter `gender` which we retrieve from our Client Component */
    const gender = queryParams.get('gender');

    if (gender !== null) {
        const requestHeaders = new Headers(request.headers);

        /* Attach `gender` to our header */
        requestHeaders.set('user_gender', gender);

        /* 
            * Return `requestHeaders` as our new header
            * In our Server Component (layout.tsx), we can retrieve the `gender` value
            * by accessing the `user_gender` field in our header
        */
        return NextResponse.next({
            request: {
                headers: requestHeaders
            }
        })
    }
}

export const config = {
    matcher: [
        /*
            * Match all request paths except for the ones starting with:
            * - _next/static (static files)
            * - _next/image (image optimization files)
            * - favicon.ico (favicon file)
        */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
}