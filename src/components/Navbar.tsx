import { useState } from "react";
import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { Cpu, Menu, X, Code, Terminal, Server } from "lucide-react";

interface NavbarProps {
  onScrollTo: (elementId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Solutions", target: "services" },
    { label: "Case Studies", target: "case-studies" },
    { label: "Cost Estimator", target: "calculator" },
    { label: "Contact Us", target: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="100"
      bg="rgba(11, 15, 25, 0.85)"
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.08)"
      py="4"
    >
      <Box maxW="1200px" mx="auto" px={{ base: "4", md: "8" }}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Flex
            align="center"
            gap="3"
            cursor="pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Box
              bg="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
              p="2"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 0 15px rgba(6, 182, 212, 0.4)"
            >
              <Cpu size={22} className="text-white" />
            </Box>
            <HStack gap="1">
              <Text
                fontWeight="800"
                fontSize="xl"
                letterSpacing="-0.5px"
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              >
                STARK
              </Text>
              <Text
                fontWeight="500"
                fontSize="xl"
                letterSpacing="-0.5px"
                className="text-cyan-400 font-mono"
              >
                //TECH
              </Text>
            </HStack>
          </Flex>

          {/* Desktop Navigation */}
          <HStack gap="8" display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <Text
                key={item.label}
                cursor="pointer"
                fontWeight="500"
                fontSize="sm"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => onScrollTo(item.target)}
              >
                {item.label}
              </Text>
            ))}
          </HStack>

          {/* CTA Button */}
          <Box display={{ base: "none", md: "block" }}>
            <Button
              onClick={() => onScrollTo("calculator")}
              bg="linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)"
              fontWeight="600"
              fontSize="sm"
              borderRadius="lg"
              px="5"
              color="#22d3ee"
              border="1px solid"
              borderColor="rgba(6, 182, 212, 0.3)"
              className="hover:scale-[1.03] transition-all hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white hover:border-transparent active:scale-[0.98] duration-200 cursor-pointer"
            >
              Estimate Project
            </Button>
          </Box>

          {/* Mobile Menu Toggle */}
          <Box display={{ base: "block", md: "none" }} onClick={toggleMenu} cursor="pointer">
            {isOpen ? <X size={24} className="text-gray-300" /> : <Menu size={24} className="text-gray-300" />}
          </Box>
        </Flex>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            mt="4"
            pb="4"
            borderTop="1px solid"
            borderColor="rgba(255, 255, 255, 0.08)"
          >
            <Flex direction="column" gap="4" mt="4">
              {navItems.map((item) => (
                <Text
                  key={item.label}
                  cursor="pointer"
                  fontWeight="500"
                  fontSize="md"
                  py="1"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => {
                    onScrollTo(item.target);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </Text>
              ))}
              <Button
                onClick={() => {
                  onScrollTo("calculator");
                  setIsOpen(false);
                }}
                bg="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                color="white"
                fontWeight="600"
                fontSize="sm"
                borderRadius="lg"
                py="5"
                boxShadow="0 4px 14px rgba(6, 182, 212, 0.3)"
                className="hover:opacity-90 active:scale-[0.98] cursor-pointer"
              >
                Estimate Project
              </Button>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
}
