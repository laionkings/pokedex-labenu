import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { irParaHome } from "../routes/coordinato";

export const ErroPage = ({ mostrarErro }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const errorMessage =
    pathname === "/"
      ? `Erro ${mostrarErro} na página... Por favor, tente mais tarde.`
      : "Não foi possível encontrar esta página...";

  return (
    <Box minH={"100vh"} bg={"#5E5E5E"}>
      <Flex minH={"100vh"} justify={"center"} wrap={"wrap"}>
        <Flex align={["start", "start", "center"]} mt={["10%", "10%", "0"]}>
          <Heading textAlign={"center"} color={"white"}>
            {errorMessage}
            {pathname !== "/" && (
              <Button
                onClick={() => irParaHome(navigate)}
                my={"10%"}
                w={"200px"}
                color={"black"}
              >
                Voltar para Home
              </Button>
            )}
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};
