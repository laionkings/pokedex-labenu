import { Router } from "./routes/Router";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { PokemonProvider } from "./contexto/PokemonContexto";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/montserrat/400.css";

function App() {
  return (
    <PokemonProvider>
      <ChakraProvider theme={theme} resetCSS>
        <Box minH={"100vh"} maxW={"100vw"}>
          <Router />
        </Box>
      </ChakraProvider>
    </PokemonProvider>
  );
}

export default App;


