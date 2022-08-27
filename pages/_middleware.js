import { NextResponse } from "next/server";

// Middleware// Sayfa her yenilendiğinde çalışıyor
export async function middleware(req) {
   
  // if (req.nextUrl.pathname === "/") {
   
  //   const url = req.nextUrl.clone()
  //       url.pathname = '/home'
  //   // You could also check for any property on the session object,
  //   // like role === "admin" or name === "John Doe", etc.
  //   if (true) return NextResponse.redirect(url);
  //   // If user is authenticated, continue.
  // }
}