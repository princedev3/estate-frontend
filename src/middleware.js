import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const privateRoute = [/^\/profile(\/.*)?$/, "/newpost"];
const authRoute = ["/login", "/register"];

export const middleware = async (request) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore?.get("accessToken")?.value;

  console.log("Access Token:", accessToken);

  // const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = jwt.decode(accessToken);
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
