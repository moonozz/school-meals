import "styled-components";
import { ColorsTypes, FontSizeTypes, DisplayTypes } from "./Theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    fontSize: FontSizeTypes;
    display: DisplayTypes;
  }
}
