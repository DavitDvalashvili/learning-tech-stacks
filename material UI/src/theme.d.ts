/* eslint-disable @typescript-eslint/no-unused-vars */
import { Palette } from "@mui/icons-material";
import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral?: PaletteColor;
  }

  interface PaletteOptions {
    neutral?: PaletteOptions;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface PaletteColor {
    darker?: string;
  }
}
