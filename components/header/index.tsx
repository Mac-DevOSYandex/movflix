import Image from 'next/image';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from '../../templates/nav';

const Header = () => {

  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
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
    <header className={`${isScrolled && 'bg-primary shadow-lg'}`}>
      <Nav />
    </header>
  );
};

export default Header;
