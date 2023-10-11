"use client";
import React from "react";
import {
  Flex,
  Button,
  Box,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} w={"100%"}>
      <Flex h={16} alignItems="center">
        <Heading as="h5" size="sm">
          Puskesmas Lapadde
        </Heading>
        <Spacer />
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
