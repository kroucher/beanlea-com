import { persistentAtom } from "@nanostores/persistent";

export type ThemeValue = "dark" | "light" | "auto";

export const theme = persistentAtom<ThemeValue>("theme", "dark");
