import { FooterLink } from './footerLink';

export function Footer(): JSX.Element {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      {/* <div
        className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 w-full overflow-hidden"
        style={{ height: '80px' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-gray-300"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="mt-0 mb-2 text-lg text-gray-700">
              Find us on any of these platforms.
            </h5>
            <div className="mt-6"></div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="ml-auto w-full px-4 lg:w-4/12">
                <span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <FooterLink />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-600">
              Copyright © {new Date().getFullYear()} Travel Vault by{' '}
              <a
                href="https://suvadeepghoshal-id.vercel.app"
                className="text-grey-600 hover:text-gray-900"
              >
                Suvadeep Ghoshal
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
