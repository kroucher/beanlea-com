import { MoonIcon, SunIcon } from "@heroicons/react/outline/esm";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { theme } from "../../stores/themeStore";

const ThemeButton = () => {
  const $theme = useStore(theme);
  console.log($theme);

  const handleClick = () => {
    theme.set($theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if ($theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", $theme);
  }, [$theme]);

  return (
    <button
      onClick={handleClick}
      type="button"
      className="dark:bg-gray-900 bg-neutral-100 p-1 rounded-full text-slate-900 dark:text-neutral-100 dark:hover:text-orange-200 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    >
      <span className="sr-only">Toggle Dark/Light Mode</span>
      {$theme === "dark" ? (
        <SunIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeButton;
