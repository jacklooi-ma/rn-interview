export enum Theme {
  Blue = "blue",
  Purple = "purple",
  Green = "green",
  Orange = "orange"
}

export type ThemeProps = {
  core: {
    base: {
      ghost: string;
      shadow: string;
    };
    bg: {
      primary: string;
      secondary: string;
      hover: string;
    };
    text: {
      active: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
  control: {
    primary: {
      bg: string;
      bgHover: string;
      bgFocus: string;
      border: string;
    };
    secondary: {
      bg: string;
      bgHover: string;
      bgFocus: string;
      border: string;
    };
    tertiary: {
      bg: string;
      bgHover: string;
      bgFocus: string;
      border: string;
    };
  };
}

export type SCProps<P = Record<string, unknown>> = {
  theme: ThemeProps;
} & P;