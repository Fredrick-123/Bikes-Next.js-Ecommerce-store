'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {name: "Home", path: "/"},
  {name: "Our Bikes ", path: "/our-bikes"},

]

const Nav = ({ containerStyles }) =>{
   const pathname = usePathname();
  return (
    <nav className={`${ containerStyles }`}>
      {links.map((link , i )=>{
           return <Link href={link.path} key={i} className={`${link.path === pathname && 'text-accent' }`}>
            {link.name}</Link>
      
      })}
    </nav>
  )
}

export default Nav