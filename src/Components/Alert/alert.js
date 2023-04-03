import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export function Alert({ isOpen, onOpen, onClose }) {
  const { pathname } = useLocation();

  const headerText = pathname === "/" ? "Gotcha!" : "Oh, no!";
  const bodyText =
    pathname === "/"
      ? "O Pokémon foi adicionado a sua Pokédex"
      : "O Pokémon foi removido da sua Pokedéx";

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        as={"b"}
        minW={"250px"}
        maxW={"33vw"}
        minH={"222px"}
        textAlign={"center"}
        p={"2%"}
      >
        <ModalHeader fontSize={"2.75em"}>{headerText}</ModalHeader>
        <ModalBody fontSize={"1em"}>{bodyText}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
