"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";


export function FooterWrapper() {
  const pathname = usePathname();
  const showFooter = ["/", "/about", "/pricing", "/methodology", "/legal", "/contact"].includes(pathname);

  if (!showFooter) return null;

  return <Footer />;
}
