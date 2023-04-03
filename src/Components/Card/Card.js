import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Center, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";

import { PokemonContexto } from "../../contexto/PokemonContexto";
import { usePokemon } from "../../hooks/usePokemon";
import { detalhesDoPokemon } from "../../routes/coordinato";
import { excluirPokemon } from "../../utils/excluirPokemon";
import { Alert } from "../Alert/alert";
import { BASE_URL } from "../../constants/BASE_URL";
import { ErroPage } from "../../pastas/ErroPage";

import { typePokemonImage, pokebolaBackground } from "../../img/img";

export const Card = ({ name }) => {
const navigate = useNavigate();
const { pathname } = useLocation();

const { isOpen, onOpen, onClose } = useDisclosure();
const { pokemonNaPokedex, setPokemonNaPokedex } = useContext(PokemonContexto);

const [data, mostrarErro] = usePokemon(BASE_URL, name, []);

const capturarPokemon = (name) => {
const temPokemon = pokemonNaPokedex.find((pokemon) => pokemon.name === name);
    if (temPokemon) {
      alert("Pokemon já está na pokedex");
    } else {
      onOpen();
      setPokemonNaPokedex([
        ...pokemonNaPokedex,
        {
          id: data.id,
          name: data.name,
        },
      ]);
      setTimeout(() => onClose(), 3000);
    }
  };
  
  if(mostrarErro) {
    return <ErroPage mostrarErro={mostrarErro}/>
  } else {
    return (
      data.name !== undefined && (
        <Box position={"relative"} minW={"20%"} w={"400px"} m={"10px"}>
          <Box
            bg={`typeColorCard.${data.types[0]?.type.name}`}
            minH={"220px"}
            maxH={"210px"}
            minW={"20%"}
            mt={"60px"}
            p={"20px"}
            borderRadius={"12px"}
            position={"relative"}
            bgImage={pokebolaBackground}
            bgPosition={["center top", "right top"]}
            bgRepeat={"no-repeat"}
            bgSize={"fit"}
          >
            <Box color={"white"} mb={"50px"}>
              <Text textStyle="inter" fontSize={"1.2rem"} lineHeight={"1rem"}>
                #{data.id < 10 ? `0${data.id}` : data.id}
              </Text>
              <Text
                textStyle={"inter"}
                fontSize={"2rem"}
                lineHeight={"2rem"}
                mb={"20px"}
                textTransform={"capitalize"}
              >
                {data.name}
              </Text>
              <Flex gap={"15px"}>
                {data.types.map((uniqueType) => {
                  return (
                    <Center
                      key={uniqueType.type.name}
                      justifyContent={"space-around"}
                      textAlign={"center"}
                      fontStyle={"normal"}
                      fontWeight={400}
                      fontSize={"0.8rem"}
                      lineHeight={"1.3rem"}
                      bg={`typeColorType.${uniqueType.type.name}`}
                      w={"31%"}
                      maxW={"90px"}
                      h={"31px"}
                      border={"1px dashed rgba(255, 255, 255, 0.47)"}
                      borderRadius={"8px"}
                    >
                      <Image src={typePokemonImage[uniqueType.type.name]} />
                      {uniqueType.type.name}
                    </Center>
                  );
                })}
              </Flex>
            </Box>
            <Flex justify={"space-between"} w={"100%"}>
              <Button
                onClick={() => detalhesDoPokemon(navigate, data.name)}
                textDecor={"underline"}
                border={"none"}
                bg={`transparent`}
                color={"white"}
                _hover={{ bg: "none" }}
              >
                detalhes
              </Button>
              <Button
                onClick={
                  pathname === "/"
                    ? () => capturarPokemon(data.name)
                    : () => {
                        excluirPokemon(
                          data.name,
                          pokemonNaPokedex,
                          setPokemonNaPokedex,

                          onOpen,
                          onClose
                        );
                      }
                }
                bg={pathname === "/" ? "white" : "#FF6262"}
                w={"146px"}
                h={"38px"}
                mb={"60px"}
                py={"4px"}
                px={"10px"}
                borderRadius={"8px"}
                zIndex={"1"}
              >
                {pathname === "/" ? "capturar!" : "Excluir"}
              </Button>
            </Flex>
          </Box>

          <Image
            src={data["sprites"]["other"]["official-artwork"]["front_default"]}
            justifyContent={"center"}
            w={["110px", "40%", "180px", "193px"]}
            position={"absolute"}
            top={["4", "0"]}
            right={"0"}
          />
          <Alert
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            pathname={pathname}
          />
        </Box>
      )
    );
  }
};
