import React from 'react';

function Footer() {
  console.log('Footer component rendered');
  return (
    <>
      <footer style={{ marginTop:"100px" }} className="relative dark:bg-black pt-8 pb-6 transition-colors duration-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold white:text-dark dark:text-white transition-colors duration-100">Feel free to reach out!</h4>
              <h5 className="text-lg mt-0 mb-2 white:text-dark dark:text-white transition-colors duration-100">
                I would love to collaborate with you on your next project.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <form>
                  <div className="mb-4">
                    <label className="block white:text-dark dark:text-white text-sm font-bold mb-2 transition-colors duration-100" htmlFor="name">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 white:text-dark dark:text-black leading-tight focus:outline-none focus:shadow-outline transition-colors duration-100" id="name" type="text" placeholder="Your name" />
                  </div>
                  <div className="mb-4">
                    <label className="block white:text-dark dark:text-white text-sm font-bold mb-2 transition-colors duration-100" htmlFor="email">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 white:text-dark dark:text-black leading-tight focus:outline-none focus:shadow-outline transition-colors duration-100" id="email" type="email" placeholder="Your email" />
                  </div>
                  <div className="mb-4">
                    <label className="block white:text-dark dark:text-white text-sm font-bold mb-2 transition-colors duration-100" htmlFor="message">
                      Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 white:text-dark dark:text-black leading-tight focus:outline-none focus:shadow-outline transition-colors duration-100" id="message" placeholder="Your message" rows="4"></textarea>
                  </div>
                  <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-100" type="button">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 dark:text-white text-sm font-semibold mb-2 transition-colors duration-100">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="white:text-dark dark:text-white hover:text-blueGray-800 dark:hover:text-white font-semibold block pb-2 text-sm transition-colors duration-100" href="https://github.com/dylGray" target="_blank">GitHub</a>
                    </li>
                    <li>
                      <a className="white:text-dark dark:text-white hover:text-blueGray-800 dark:hover:text-white font-semibold block pb-2 text-sm transition-colors duration-100" href="https://www.linkedin.com/in/dylan-gray-255107217/" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                    <a className="white:text-dark dark:text-white hover:text-blueGray-800 dark:hover:text-white font-semibold block pb-2 text-sm transition-colors duration-100" href="https://secure.aspca.org/donate/ps-gn-p2?psafe_param=1&ms=MP_PMK_Googlenonbrand&initialms=MP_PMK_Googlenonbrand&pcode=WPSN7GO2PK02&lpcode=WPSN7GO1PK02&ds_rl=1066464&gad_source=1&gclid=Cj0KCQiA7NO7BhDsARIsADg_hIaIVAyqdwhbuO8oMEZowZm-Wgf83nmr2uWwABDEqB7pfcLQRLp1zcYaAs5aEALw_wcB&gclsrc=aw.ds" target="_blank">Donate to ASPCA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-100 dark:border-white transition-colors duration-100" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 dark:text-white font-semibold py-1 transition-colors duration-100">
                Copyright © <span id="get-current-year">2025</span>
                <p className="text-blueGray-500 dark:text-white hover:text-gray-800 dark:hover:text-white transition-colors duration-100"> Dylan Gray</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
