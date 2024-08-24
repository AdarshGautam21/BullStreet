import Image from "next/image";
import Link from "next/link";
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

export default function Home() {
  return (
  <main>
    <Navbar/>
    <Homepage/>
  </main>
  );
}
