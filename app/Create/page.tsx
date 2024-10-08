/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import CoinForm from "./CoinForm";
import Button from "./Button";
import Link from "next/link";
import Navbar2 from "../components/Navbar2";

const BullStreetComponent: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-4 pt-2.5 pb-72 bg-neutral-950 max-md:pr-5 max-md:pb-24">
      {/* <Header /> */}

      <Navbar2 />
      <nav className="flex gap-1 px-1.5 py-1 mt-6 ml-52 text-xs font-medium text-center rounded-md bg-neutral-200 text-neutral-950 w-[68px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c830329b3325bc4629d11f36de71787db1afa788278849572d354e91c92fe5c8?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
          alt=""
          className="object-contain shrink-0 self-start w-2 aspect-[0.53]"
        />
        <Link href='/home'>
        <span>Go Back</span>
        </Link>
      </nav>
      <CoinForm />
      <p className="mt-5 text-xs font-semibold text-white">
        When your coin completes its bonding curve you receive 0.5 SOL
      </p>
    </main>
  );
};

export default BullStreetComponent;
