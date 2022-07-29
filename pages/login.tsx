import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Login = () => {
  return (
    // <!-- Container for demo purpose -->
<div className="container my-24 px-6 mx-auto">

  {/* <!-- Section: Design Block --> */}
  <section className="mb-32 text-gray-800 text-center lg:text-left">
    <div className={`px-6 py-12 md:px-12" style="background-color: hsl(0, 0%, 96%)`}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="mt-12 lg:mt-0">
          <h1 className="text-5xl font-bold tracking-tight leading-tight mb-12">
            The best offer <br /><span className="text-blue-600">for your business</span>
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium
            odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores
            libero veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>
        <div className="mb-12 lg:mb-0">
          <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
            <form>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-6">
                  <input type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="First name" />
                </div>
                <div className="mb-6">
                  <input type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Last name" />
                </div>
              </div>
              <input type="email"
                className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address" />
              <input type="password"
                className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password" />
              <div className="form-check flex justify-center mb-6">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                  Subscribe to our newsletter
                </label>
              </div>
              <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Sign up
              </button>
              <div className="text-center">
                <p className="mb-6">or sign up with:</p>
              </div>
              <div className="flex justify-center">
                <a href="#!" role="button"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out">
                      {/* <!-- Facebook --> */}
                      <FaFacebookF className="h-4 w-4 mx-4"  />

                </a>
                <a href="#!" role="button"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out">
                      {/* <!-- Google --> */}
                      <FaGoogle className="h-4 w-4 mx-4"  />

                </a>
                <a href="#!" role="button"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out">
                      {/* <!-- Twitter --> */}
                      <FaTwitter  className="w-4 h-4 mx-4"/>
                </a>
                <a href="#!" role="button"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out">
                      {/* <!-- Github --> */}
                      <FaGithub  className="w-4 h-4 mx-4"/>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
// <!-- Container for demo purpose -->
  )
}

export default Login