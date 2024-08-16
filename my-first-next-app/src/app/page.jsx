import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Home page</h1>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
      <li><Link href="/about/branches">Branches</Link></li>
      <li><Link href="/products/vegis">Vegies</Link></li>

    </ul>

    <Link href="http://nextjs.org" target="_blank">NextJs Site</Link>


    </>
  );
}
