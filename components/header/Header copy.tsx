import Image from 'next/image';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {

  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#272a30]'}`}>
      {/* Left side */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="http://localhost:8080/netflix/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="Logo"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>
      {/* Right side */}
      <div className="flex items-center space-x-4 md:space-x-8 text-sm font-light">
        <SearchIcon className="hidden cursor-pointer h-6 w-6 sm:inline" />
        <p className="cursor-pointer hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account" passHref>
          <a className=''>
            <Image
              src="http://localhost:8080/netflix/logo/Account.png"
              width={30}
              height={30}
              className="cursor-pointer rounded"
              alt="account"
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
