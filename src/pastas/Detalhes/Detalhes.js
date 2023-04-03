import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import {
  typePokemonImage,
  pokebolaBackgroundDetalhes,
  pokebolaBackgroundDetalhesNoCard,
  loadingScreen,
} from "../../img/img";
import { ErroPage } from "../ErroPage";
import { BASE_URL } from "../../constants/BASE_URL";

export const Detalhes = () => {
  const { namePokemon } = useParams();

  const [data, isLoading, erro, mostrarErro] = usePokemon(
    BASE_URL,
    namePokemon,
    []
  );

  const encurtarStatus = (status) => {
    if (status === "special-attack") {
      return "Sp-Atk";
    } else if (status === "special-defense") {
      return "Sp-Def";
    } else {
      return status
    }
  };

  const soma = (status) => {
    return status.reduce((acumulador, stat) => acumulador + stat.base_stat, 0);
  };

  if (erro && !isLoading) {
    return <ErroPage mostrarErro={mostrarErro}/>;
  } else {
    return (
      <Box
        key={data.id}
        bg={"#5E5E5E"}
        minH={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        bgImage={pokebolaBackgroundDetalhes}
        bgRepeat={"no-repeat"}
        backgroundSize={["100em", "100em", "100em", "100em center", "90em"]}
        bgPosition={"center top"}
      >
        <Flex direction={["column"]} w={"95vw"}>
          <Text
            position={"absolute"}
            color={"white"}
            pt={"50px"}
            textStyle={"poppins"}
            fontSize={"3rem"}
            lineHeight={"4.5rem"}
          >
            Detalhes:
          </Text>
          {isLoading && (
            <Flex
              justify={"center"}
              align={"center"}
              mt={["50%", "50%", "17%"]}
            >
              <Image
                src={loadingScreen}
                alt="Animação da Pokébola carregando"
                mixBlendMode={"lighten"}
                minW={"50vw"}
                h={["40vh", "60vh"]}
              />
            </Flex>
          )}
          {!isLoading && data.name !== undefined && (
            <>
              <Flex
                direction={["column", "column", "column", "column", "row"]}
                bg={`typeColorCard.${data.types[0]?.type.name}`}
                minH={"663px"}
                w={"95vw"}
                my={"150px"}
                borderRadius={"12px"}
                bgImage={[
                  "none",
                  "none",
                  "none",
                  "none",
                  pokebolaBackgroundDetalhesNoCard,
                ]}
                bgRepeat={"no-repeat"}
                backgroundSize={"contain"}
                bgPosition={"right"}
              >
                <Flex
                  direction={["row", "row", "row", "row", "column"]}
                  order={["3", "3", "3", "3", "0"]}
                  justify={"center"}
                >
                  <Center
                    bg={"white"}
                    w={["100%", "100%", "100%", "100%", "282px"]}
                    h={["150px", "150px", "282px"]}
                    m={"26px"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={
                        data.sprites.versions["generation-v"]["black-white"]
                          .animated.front_default
                      }
                      w={"111px"}
                    />
                  </Center>
                  <Center
                    bg={"white"}
                    w={["100%", "100%", "100%", "100%", "282px"]}
                    h={["150px", "150px", "282px"]}
                    m={"26px"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={
                        data.sprites.versions["generation-v"]["black-white"]
                          .animated.back_default
                      }
                      w={"111px"}
                      h={"111px"}
                    />
                  </Center>
                </Flex>
                <Flex
                  direction={"column"}
                  order={["1", "1", "1", "2"]}
                  bg={"white"}
                  minW={"27%"}
                  p={"18px"}
                  m={"26px"}
                  borderRadius={"12px"}
                >
                  <Heading mb={"20px"}>Basic stats</Heading>

                  {data.stats.map((state) => {
                    return (
                      <Flex
                        key={state.stat.name}
                        borderTop={"1px solid #F0F0F0"}
                        gap={"5px"}
                        py={"5px"}
                      >
                        <Text display={"flex"} justifyContent={"end"} w={"20%"} textTransform={"capitalize"}>
                          {encurtarStatus(state.stat.name)}
                        </Text>
                        <Text
                          display={"flex"}
                          justifyContent={"center"}
                          w={"20%"}
                        >
                          {state.base_stat}
                        </Text>
                        <Progress
                          display={"flex"}
                          alignSelf={"center"}
                          value={state.base_stat}
                          variant={state.base_stat < 50 ? "orange" : "yellow"}
                          h={"10px"}
                          w={"66%"}
                          borderRadius={"4px"}
                        />
                      </Flex>
                    );
                  })}
                  <Flex borderTop={"1px solid #F0F0F0"} gap={"5px"} my={"5px"}>
                    <Text display={"flex"} justifyContent={"end"} w={"20%"}>
                      Total
                    </Text>
                    <Text display={"flex"} justifyContent={"center"} w={"20%"}>
                      {soma(data.stats)}
                    </Text>
                    <Box
                      display={"flex"}
                      alignSelf={"center"}
                      w={"66%"}
                      borderRadius={"4px"}
                    />
                  </Flex>
                </Flex>

                <Box m={"26px"} order={["0", "0", "0", "0", "3"]}>
                  <Box color={"white"} mb={"50px"}>
                    <Text
                      textStyle={"inter"}
                      fontSize={"1.2rem"}
                      lineHeight={"1rem"}
                      mb={"10px"}
                    >
                      #{data.id < 10 ? `0${data.id}` : data.id}
                    </Text>
                    <Text
                      textStyle={"inter"}
                      fontSize={"3rem"}
                      lineHeight={"2rem"}
                      mb={"20px"}
                      textTransform={"capitalize"}
                    >
                      {data.name}
                    </Text>
                    <Flex gap={"15px"}>
                      {data.types?.length &&
                        data.types.map((uniqueType) => {
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
                              w={"30%"}
                              maxW={"100px"}
                              h={"31px"}
                              border={"1px dashed rgba(255, 255, 255, 0.47)"}
                              borderRadius={"8px"}
                            >
                              <Image
                                src={typePokemonImage[uniqueType.type.name]}
                              />
                              {uniqueType.type.name}
                            </Center>
                          );
                        })}
                    </Flex>
                  </Box>

                  <Box
                    bg={"white"}
                    borderRadius={"8px"}
                    minW={["200px", "292px"]}
                    minH={"200px"}
                    p={"18px"}
                  >
                    <Heading mb={"18px"}>Moves</Heading>
                    <Flex
                      direction={["row", "row", "row", "row", "column"]}
                      wrap={"wrap"}
                      gap={"20px"}
                      justify={["center", "center", "center", "center", "end"]}
                    >
                      {data.moves.slice(0, 5).map((move) => {
                        return (
                          <Flex
                            key={move.move.name}
                            align={"center"}
                            w={"fit-content"}
                            h={"37px"}
                            p={"10px"}
                            mb={"18px"}
                            bg={"#ECECEC"}
                            border={"1px dashed rgba(0, 0, 0, 0.14)"}
                            borderRadius={"12px"}
                          >
                            <Text>{move.move.name}</Text>
                          </Flex>
                        );
                      })}
                    </Flex>
                  </Box>
                </Box>
              </Flex>
              <Image
                src={
                  data["sprites"]["other"]["official-artwork"]["front_default"]
                }
                position={"absolute"}
                top={["64", "20", "0"]}
                right={["0", "5"]}
                w={["130px", "130px", "270px", "270px", "270px"]}
              />
            </>
          )}
        </Flex>
      </Box>
    );
  }
};
