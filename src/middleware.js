import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const privateRoute = [/^\/profile(\/.*)?$/, "/newpost"];
const authRoute = ["/login", "/register"];

export const middleware = (request) => {
  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = jwt.decode(accessToken);
  console.log("accessToken ", accessToken);
  const { pathname } = request.nextUrl;
  const isPrivateRoute = privateRoute.some((route) =>
    typeof route === "string" ? route === pathname : route.test(pathname)
  );
  if (decodedToken?.exp && decodedToken.exp * 1000 < Date.now()) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (!accessToken && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (accessToken && authRoute.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  NextResponse.next();
};
