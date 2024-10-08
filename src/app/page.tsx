"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:container mx-5 md:mx-auto mt-20">
        <div className="text-right">
          <h1 className="font-bold text-4xl md:text-[64px] italic">Simply unify SNS data.</h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="hidden md:flex justify-center">
           <Image src="/indoor.svg" alt="" width={100} height={100} className="w-full md:w-3/4" />
          </div>
          <div className="flex items-center">
            <ul className="list-disc pl-8 space-y-4 text-2xl font-bold">
              <li>Fast & Efficient</li>
              <li>No Login Required</li>
              <li>Easily Shareable via URL</li>
            </ul>
          </div>
          <div className="flex md:hidden justify-center">
           <Image src="/indoor.svg" alt="" width={100} height={100} className="w-full md:w-3/4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}