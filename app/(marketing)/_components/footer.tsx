import { ArrowBigRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";


export const Footer = () => {
    return (
      <footer className="bg-black text-white py-16 px-8 md:px-16">
        <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-white rotate-45"></div>
              <span className="font-bold text-lg tracking-wider">
                PHOTOSNAP
              </span>
            </Link>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              {/* <Link href="#" aria-label="Pinterest">
                <Pinterest className="h-5 w-5" />
              </Link> */}
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm hover:text-gray-400">
                HOME
              </Link>
              <Link href="/stories" className="text-sm hover:text-gray-400">
                STORIES
              </Link>
              <Link href="/features" className="text-sm hover:text-gray-400">
                FEATURES
              </Link>
              <Link href="/pricing" className="text-sm hover:text-gray-400">
                PRICING
              </Link>
            </nav>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-start md:justify-end items-center space-x-2">
              <Link
                href="/invite"
                className="flex items-center text-white font-bold tracking-wider group"
              >
                GET AN INVITE{" "}
                <ArrowBigRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-8 md:text-right">
              Copyright 2023. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
}