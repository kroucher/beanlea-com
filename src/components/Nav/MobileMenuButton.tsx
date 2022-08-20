import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../stores/menuStore";

export default function MobileMenu() {
  // read the store value with the `useStore` hook
  const $isMenuOpen = useStore(isMenuOpen);
  // write to the imported store using `.set`
  return (
    <Disclosure.Button
      onClick={() => {
        console.log("clicked");
        console.log($isMenuOpen);
        isMenuOpen.set(!$isMenuOpen);
      }}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      <span className="sr-only">Open main menu</span>
      {$isMenuOpen ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
}
