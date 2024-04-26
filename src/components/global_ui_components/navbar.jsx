import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import Button from "./button/button";
import {
  IoChevronDown,
  IoCloseCircleOutline,
  IoFingerPrintOutline,
  IoGridOutline,
  IoMenuOutline,
  IoPieChartOutline,
  IoRefreshCircleOutline,
  IoSparklesSharp,
} from "react-icons/io5";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: IoPieChartOutline,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: IoSparklesSharp,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: IoFingerPrintOutline,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: IoGridOutline,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: IoRefreshCircleOutline,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-20 font-rubik">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-3 lg:px-0 md:px-5 px-3"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex outline-none items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IoMenuOutline className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          <Link
            to="/"
            className="tracking-wider leading-6 text-sm text-white hover:text-primary-0 duration-300 ease-in"
          >
            Home
          </Link>

          <Link
            to="/"
            className="tracking-wider leading-6 text-sm text-white hover:text-primary-0 duration-300 ease-in"
          >
            About
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex text-sm items-center gap-x-2 tracking-wider leading-6 text-white outline-none group hover:text-primary-0 duration-300 ease-in">
              Services
              <IoChevronDown
                className="h-5 w-5 flex-none text-white group-hover:text-primary-0 duration-300 ease-in"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black-0 bg-opacity-80 backdrop-blur-md shadow-lg">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-primary-0 duration-300 ease-in"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-900 duration-300 ease-in group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/"
            className="tracking-wider leading-6 text-sm text-white hover:text-primary-0 duration-300 ease-in"
          >
            Features
          </Link>

          <Link
            to="/"
            className="tracking-wider leading-6 text-sm text-white hover:text-primary-0 duration-300 ease-in"
          >
            FAQ
          </Link>

          <Link
            to="/"
            className="tracking-wider leading-6 text-sm text-white hover:text-primary-0 duration-300 ease-in"
          >
            Pricing Plan
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/" className="outline-none no-underline">
            <Button variant={"white"} body={"Get started"} />
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black-0 md:px-5 md:py-5 px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md outline-none p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoCloseCircleOutline className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-primary-0">
                        Product
                        <IoChevronDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-primary-0"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary-0"
                >
                  Features
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-primary-0"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
