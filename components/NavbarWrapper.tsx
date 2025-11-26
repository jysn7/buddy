"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


export function NavbarWrapper() {
  const pathname = usePathname();
  const showNavbar = ["/", "/about", "/pricing", "/methodology", "/legal", "/contact"].includes(pathname);

  if (!showNavbar) return null;

  return <Navbar />;
}
