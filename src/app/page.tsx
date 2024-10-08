"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="py-4 bg-white border-b">
        <div className="md:container mx-5 md:mx-auto flex items-center">
          <Link href="/">
            <Image src="/logotype.svg" alt="Merge" width={100} height={100} className="w-20" />
          </Link>

          <div className="ml-auto md:block hidden">
            <div className="link-focus text-reve">
              <Link href="#" className="pr-4 border-r border-reve">Instagram</Link>
              <Link href="#" className="px-4 border-r border-reve">Twitter</Link>
              <Link href="#" className="pl-4">YouTube</Link>
            </div>
          </div>

          <div className="ml-auto md:hidden relative text-reve">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="py-1.5 px-4 border border-reve shadow rounded-full flex items-center"
            >
              Links
              <span
                className={`ml-2 transform transition-transform duration-200 ease-in-out ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <FiChevronDown />
              </span>
            </button>

            <div
              className={`link-focus absolute right-0 mt-2 w-44 border bg-white shadow-lg rounded-lg transition-all duration-200 ease-in-out transform ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Link href="#" className="block px-4 py-2 flex items-center">
                <FaInstagram className="mr-2 opacity-50" />
                Instagram
              </Link>
              <hr />
              <Link href="#" className="block px-4 py-2 flex items-center">
                <FaTwitter className="mr-2 opacity-50" />
                Twitter
              </Link>
              <hr />
              <Link href="#" className="block px-4 py-2 flex items-center">
                <FaYoutube className="mr-2 opacity-50" />
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}