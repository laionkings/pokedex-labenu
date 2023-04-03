import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <Flex direction="column" gap="10px" alignItems="center" mt="2%">
      <Heading as="h2" size="sm" textAlign="center">
        "© Nintendo. Todos os direitos reservados. Nenhuma parte deste site pode ser reproduzida sem autorização prévia da Nintendo."
      </Heading>
      <Heading as="h2" size="sm" textAlign="center">
        "Este site foi desenvolvido com fins educativos como parte do curso Full Stack JavaScript da Labenu, uma escola de programação que busca formar profissionais altamente capacitados para o mercado de tecnologia."
      </Heading>
      <Flex direction="row" gap="15px">
        <Link href="https://github.com/laionkings" target="_blank">
          <AiFillGithub size="25px" />
        </Link>
        <Link href="https://www.linkedin.com/in/laionpereira/" target="_blank">
          <BsLinkedin size="25px" />
        </Link>
        <Link href="mailto:kingslaion@gmail.com" target="_blank">
          <SiGmail size="25px" />
        </Link>
      </Flex>
      <Heading as="h2" size="sm" display="flex" alignItems="center">
        &copy;Laion Pereira dos Santos
      </Heading>
    </Flex>
  );
};


