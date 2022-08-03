import { BellIcon, MenuIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image'
// import '../styles/nav.module.css';



const Nav = () => {
  return (
    <nav className="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-0
    text-gray-300
    hover:text-gray-700
    focus:text-gray-700

    navbar navbar-expand-lg navbar-light
    ">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button className="
        navbar-toggler
        text-gray-500
        border-0
        hover:shadow-none hover:no-underline
        py-2
        px-2.5
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
      " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <MenuIcon className='w-6 h-6' />
        </button>
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">

          <a className="
          flex
          items-center
          text-gray-900
          hover:text-gray-900
          focus:text-gray-900
          mt-2
          lg:mt-0
          mr-1
        " href="#">
            <Image src="http://localhost:8080/netflix/logo/Netflix-transparent-noshadows.svg" width={120} height={24} alt=""
              loading="lazy" />
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <a className="nav-link" href="#!">Home</a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="#!">TV Shows</a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="#!">Movies</a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="#!">New & Popular</a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="#!">My List</a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="flex items-center relative">
          {/* <!-- Icon --> */}
          <a className="text-gray-100 hover:text-gray-300 focus:text-gray-300 mr-4" href="#">
            <SearchIcon className='w-6 h-6' />
          </a>
          <div className="dropdown relative">
            <a className="dropdown-toggle flex items-center hidden-arrow mr-4" href="#" id="dropdownMenuButton2" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <Image src="http://localhost:8080/netflix/logo/Account.png" className="rounded-md"
                height={25} width={25} alt="Avatar" loading="lazy" />
            </a>

            <ul className="
      dropdown-menu
      min-w-max
      absolute
      hidden
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Action</a>
              </li>
              <li>
                <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Another action</a>
              </li>
              <li>
                <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Something else here</a>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a className="
            text-gray-100
            hover:text-gray-300
            focus:text-gray-300
            mr-4
            dropdown-toggle
            hidden-arrow
            flex items-center
          " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <BellIcon className='w-6 h-6' />
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-3 py-0 px-1.5">1</span>
            </a>
            <ul className="
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        m-0
        bg-clip-padding
        border-none
        left-auto
        right-0
      " aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          " href="#">Action</a>
              </li>
              <li>
                <a className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          " href="#">Another action</a>
              </li>
              <li>
                <a className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          " href="#">Something else here</a>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a className="dropdown-toggle flex items-center hidden-arrow mr-4" href="#" id="dropdownMenuButton2" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <Image src="http://localhost:8080/netflix/users/2.jpg" className="rounded-full"
                height={25} width={25} alt="Avatar" loading="lazy" />
            </a>

            <ul className="
      dropdown-menu
      min-w-max
      absolute
      hidden
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Action</a>
              </li>
              <li>
                <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Another action</a>
              </li>
              <li>
                <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Something else here</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Right elements --> */}
      </div>
    </nav>
  )
}

export default Nav;