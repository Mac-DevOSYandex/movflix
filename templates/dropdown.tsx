import Image from "next/image";

const Dropdown = () => {
  return (
    // <!-- Container for demo purpose -->
    <div className="container my-24 px-6 mx-auto">
      {/* <!-- Section: Design Block --> */}
      <section className="mb-12">
        <nav className="navbar navbar-expand-lg shadow-lg py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6">
            <button
              className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-300 ease-in-out"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
              <ul className="navbar-nav mr-auto flex flex-row">
                <li className="nav-item dropdown static">
                  <a
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-300 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                    href=""
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    type="button"
                    id="dropdownMenuButtonX"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Click me
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </a>
                  <ul
                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <h6 className="text-gray-500 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent">
                        Bootstrap 5
                      </h6>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>Standard (plain JS)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/angular.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>Angular</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/react.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>React</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/vue.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>Vue</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <h6 className="text-gray-500 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent">
                        Bootstrap 4
                      </h6>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/jquery.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>Standard (jQuery)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/angular.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>Angular</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/react.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>React</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                        href="#"
                      >
                        <Image
                          src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/vue.webp"
                          alt=""
                          className="h-5 mr-2"
                        />
                        <span>Vue</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
    // <!-- Container for demo purpose -->
  );
};

export default Dropdown;
