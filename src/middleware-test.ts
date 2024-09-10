// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req:any) {
  const token = req.cookies.get('token'); // Assuming the token is stored in cookies

  const { pathname } = req.nextUrl;

  // If the token is not found and the user is not on the login page, redirect to login
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If the token is found and the user is on the login page, redirect to the home page
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
