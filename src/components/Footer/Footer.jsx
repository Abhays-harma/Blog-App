import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className=" mt-2 relative overflow-hidden py-12 bg-gray-800 text-gray-400 border-t-2 border-gray-700">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm">
                  &copy; 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          
          {/* Company Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Account
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Help
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-white" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
