import { useCallback, useState } from "react";
import defaultTheme from "../themes/blue";
import { THEME_LOADER } from "../themes";
import { ThemeProps, Theme } from "../types";

export const useTheme = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>(Theme.Blue);
  const [theme, setTheme] = useState<ThemeProps>(defaultTheme);

  const changeTheme = useCallback((themeType: string) => {
    if (themeType in THEME_LOADER) {
      THEME_LOADER[themeType as Theme]().then((t) => {
        setTheme(t.default);
      });
    }
    setActiveTheme(themeType as Theme);
  }, []);

  return { theme, activeTheme, changeTheme };
}
