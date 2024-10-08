"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:container mx-5 md:mx-auto mt-20">
        <div className="text-center">
          <h1 className="font-bold text-4xl md:text-[64px] italic">
            Simply <span className="bg-reve text-white">unify</span> SNS data.
          </h1>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="hidden md:flex justify-center">
           <Image src="/indoor.svg" alt="" width={100} height={100} className="w-full" />
          </div>
          <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-8 border rounded-2xl">
              <h1 className="text-xl font-bold mb-2">Easily Shareable via URL</h1>
              <p>Easily share your findings with others using a URL.</p>
            </div>
            <div className="p-8 border rounded-2xl">
              <h1 className="text-xl font-bold mb-2">Fast & Efficient</h1>
              <p>You can quickly search for the data you need.</p>
            </div>
            <div className="p-8 border rounded-2xl">
              <h1 className="text-xl font-bold mb-2">No Login Required</h1>
              <p>You can use the tools anytime without logging in.</p>
            </div>
          </div>
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