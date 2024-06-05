import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    Colors: {
      Primary: {
        300: string;
        500: string;
        700: string;
      };
      Secondary: {
        300: string;
        500: string;
        700: string;
      };
      Textcolor: {
        300: string;
        500: string;
        700: string;
      };
      Background: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      Purple: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      Dark: {
        300: string;
        500: string;
        700: string;
        800: string;
        900: string;
      };
      Success: string;
      Warning: string;
      Error: string;
    };

    Size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    ElevationLevel: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}
