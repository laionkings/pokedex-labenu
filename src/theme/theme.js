import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors/pokemonColors";
import { textStyles } from "./textStyles/textStyles";
import { breakpoints } from "./breakpoints/breakpoints";
import { Progress } from "./component/Progress";

export const theme = extendTheme({
  components: {
    Progress,
  },
  colors,
  textStyles,
  breakpoints
});
