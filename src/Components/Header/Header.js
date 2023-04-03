import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { pokemon } from "../../img/img";
import { irParaHome, irParaPokedex } from "../../routes/coordinato";
import { excluirPokemon } from "../../utils/excluirPokemon";
import { Alert } from "../Alert/alert";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const namePokemon = location.pathname.slice(10, 20);
  

  const { pokemonNaPokedex, setPokemonNaPokedex } = useContext(PokemonContexto);

  const pokemonEstaNaPokedex = pokemonNaPokedex.find(
    (pokemon) => pokemon.name === namePokemon
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify={"space-between"} wrap="wrap" my={"21px"} gap={["10px", "0"]}>
      {location.pathname === "/" && (
        <Box w={["0%", "0%", "25%"]} order={["2", "2", "0"]} />
      )}
      {(location.pathname === "/pokedex" ||
        location.pathname === `/detalhes/${namePokemon}`) && (
        <Box
          order={["2", "2", "0"]}
          w={["100%", "50%", "25%"]}
          mt={["21px", "21px", "0px"]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1px"}
        >
          <ChevronLeftIcon
            onClick={() => irParaHome(navigate)}
            textStyle={"poppins"}
            fontSize={"24px"}
            lineHeight={"36px"}
            _hover={{ cursor: "pointer" }}
          />
          <Button
            onClick={() => irParaHome(navigate)}
            textStyle={"poppins"}
            fontSize={"25px"}
            lineHeight={"38px"}
            pl={"0"}
            textDecor={"underline"}
            border={"none"}
            bg={`white`}
            _hover={{ bg: "none" }}
          >
            Todos Pokemons
          </Button>
        </Box>
      )}
      {(location.pathname !== "/" && location.key === "default") && (
        <Box w={["0%", "0%", "27%"]} order={["2", "2", "0"]} />
      )}

      <Box
        onClick={() => irParaHome(navigate)}
        w={["100%", "100%", "50%"]}
        display={"flex"}
        justifyContent={"center"}
        order={["0", "0", "0"]}
      >
        <Image src={pokemon} />
      </Box>
      
      {location.pathname === "/" && (
        <Box
          w={["100%", "100%", "25%"]}
          mt={["24px", "22px", "0px"]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            onClick={() => irParaPokedex(navigate)}
            bg={"#33A4F5"}
            color={"white"}
            w={"288px"}
            h={"76px"}
            fontFamily={"Poppins"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={"26px"}
            lineHeight={"35px"}
          >
            Pokédex
          </Button>
        </Box>
      )}
      {location.pathname === "/pokedex" && <Box w={["0", "100%", "25%"]}></Box>}
      {location.pathname.includes(`/detalhes/${namePokemon}`) && (
        <Box
          order={"2"}
          w={["100%", "50%", "26%"]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {pokemonEstaNaPokedex && (
            <Button
              onClick={() =>
                excluirPokemon(
                  namePokemon,
                  pokemonNaPokedex,
                  setPokemonNaPokedex,

                  onOpen,
                  onClose
                )
              }
              minW={"23vw"}
              w={"288px"}
              mt={["22px", "22px", "0px"]}
              order={["2", "2", "0"]}
              h={"75px"}
              textStyle={"poppins"}
              fontSize={"1.5rem"}
              lineHeight={"2.5rem"}
              borderRadius={"8px"}
              bg={"#FF6262"}
              color={"white"}
              _hover={{ bg: "#FFA07A" }}
            >
              <Alert isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              Excluir pokemon
            </Button>
          )}
        </Box>
      )}
      {(location.pathname !== "/" && location.key === "default") && (
        <Box w={["0%", "0%", "25%"]} order={["2", "2", "0"]}></Box>
      )}
    </Flex>
  );
};



