import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import Link from "next/link"


export const NavBar = () => {
    return (
      <nav className="bg-background  w-full top-0 fixed z-50  px-20 py-5 border-b">
        <div className="flex justify-between items-center bg-white p-2">
          <div className="md:hidden">
            <Menu className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-wider ">
            <Link href="/">PHOTOSNAP</Link>
          </h1>
          <div>
            <ul className="hidden md:flex space-x-6 justify-between items-center">
              <li className="font-medium uppercase tracking-wide">
                <Link href="#">STORIES</Link>
              </li>
              <li className="font-medium uppercase tracking-wide">
                <Link href="#">FEATURES</Link>
              </li>
              <li className="font-medium uppercase tracking-wide">
                <Link href="#">PRICING</Link>
              </li>
            </ul>
          </div>
          <div>
            <Button className="text-sm font-bold uppercase tracking-wider text-white">
              <Link href="#">GET AN INVITE</Link>
            </Button>
          </div>
        </div>
      </nav>
    );
}