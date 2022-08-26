import { ComponentType, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import MobileMenuButton from "./MobileMenuButton";
import ThemeButton from "./ThemeButton";

export type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Showcase", href: "/showcase", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function MainDisclosure(props: ExtractProps<typeof Disclosure>) {
  // add your own logic here
  return <Disclosure {...props} />;
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    // function to run on scroll
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) {
        if (direction === "down") {
          setTimeout(() => {
            setScrollDirection(direction);
          }, 1000);
        } else {
          setScrollDirection(direction);
        }
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection, { passive: true }); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]); // run when scroll direction changes
  return scrollDirection;
}

export default function Nav() {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky z-50 h-max overflow-x-hidden  ${scrollDirection === "down"
        ? "-top-24 transition-all duration-700"
        : "top-0 transition-all duration-700"
        }`}
    >
      <MainDisclosure
        as="div"
        className="dark:bg-slate-900/60 bg-neutral-100 shadow-sm drop-shadow-sm  shadow-slate-900/50 dark:shadow-neutral-100/50 z-10 backdrop-filter backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center w-full justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <MobileMenuButton />
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-between w-full">
              <a
                data-analytics={`"Homepage", {"props": {"from": "Navbar"}}`}
                href="/"
                className="flex flex-col items-center justify-center dark:text-slate-50 text-slate-900 -mt-0.5 sm:mr-20"
              >
                <div className="flex items-center justify-center">
                  <h1 className="font-mono text-2xl sm:text-3xl -mb-3 mx-2.5 text-blue-400">{`</>`}</h1>
                  <h1 className="font-kumar text-xl sm:text-3xl pt-1.5 sm:pt-3">{`Beanlea`}</h1>
                </div>
                <span className="text-xs sm:text-sm -mt-2.5 -mr-20 sm:-mt-3 sm:-mr-12 font-semibold">
                  Web Development
                </span>
              </a>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex items-center justify-center space-x-2 lg:space-x-4 w-full h-full">
                  {navigation.map((item) => (
                    <a
                      data-analytics={`"Link", {"props": {"from": "Navbar", "to": "${item.name}"}}`}
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "this" === item.href
                          ? "bg-slate-900 text-white"
                          : "text-slate-900 dark:text-neutral-100 hover:bg-slate-700 hover:text-white",
                        "px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <ThemeButton />
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                className={classNames(
                  item.current
                    ? "bg-slate-900 text-white hover:bg-slate-700 hover:text-white"
                    : "text-slate-900 dark:text-neutral-100 hover:bg-slate-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <a
                  data-analytics={`${item.name}, {"props": {"from": "Navbar", "to": "${item.href}"}}`}
                  href={item.href}
                >
                  {item.name}
                </a>
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </MainDisclosure>
    </div>
  );
}
