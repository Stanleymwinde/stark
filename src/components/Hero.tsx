import { Box, Container, Flex, Heading, Text, Button, HStack, VStack, SimpleGrid } from "@chakra-ui/react";
import { ArrowRight, Terminal, Shield, Zap, Sparkles, Cpu } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

const motionBox = motion(Box);
const motionFlex = motion(Flex);

export default function Hero({ onScrollTo }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      position="relative"
      pt={{ base: "12", md: "20" }}
      pb={{ base: "16", md: "24" }}
      overflow="hidden"
      backgroundImage="radial-gradient(ellipse 60% 60% at 50% -20%, rgba(6, 182, 212, 0.12), rgba(11, 15, 25, 0))"
    >
      {/* Structural accent grid lines */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)"
        backgroundSize="80px 80px"
        pointerEvents="none"
        opacity="0.6"
      />

      <Container maxW="1200px" px={{ base: "4", md: "8" }}>
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: "12", lg: "8" }} alignItems="center">
          {/* Text Content Block */}
          <Box gridColumn={{ lg: "span 7" }}>
            <motionBox
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              display="flex"
              flexDirection="column"
              gap="6"
            >
              {/* Premium Badge Tag */}
              <motionBox variants={itemVariants}>
                <HStack
                  gap="2"
                  bg="rgba(6, 182, 212, 0.08)"
                  borderRadius="full"
                  px="3.5"
                  py="1.5"
                  border="1px solid"
                  borderColor="rgba(6, 182, 212, 0.15)"
                  width="fit-content"
                >
                  <Sparkles size={14} className="text-cyan-400" />
                  <Text fontSize="xs" fontWeight="700" letterSpacing="0.05em" className="text-cyan-400 font-mono">
                    ENGINEERING CUSTOM TECH SOLUTIONS
                  </Text>
                </HStack>
              </motionBox>

              {/* Display Heading */}
              <motionBox variants={itemVariants}>
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="850"
                  lineHeight={{ base: "1.2", md: "1.1" }}
                  letterSpacing="-1.5px"
                  bgClip="text"
                  display="inline-block"
                  className="bg-gradient-to-r from-white via-gray-100 to-gray-400 text-transparent"
                >
                  We Build Tailored <br />
                  <span className="text-cyan-400">Software Solutions</span> <br />
                  That Scale Infinitely.
                </Heading>
              </motionBox>

              {/* Subtitle */}
              <motionBox variants={itemVariants}>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="400"
                  color="gray-400"
                  lineHeight="1.6"
                  maxW="3xl"
                >
                  Stark Technologies is a premier software engineering studio. We design, deploy, and maintain robust microservices, custom cloud infrastructures, scalable APIs, and bespoke intelligence solutions built to accelerate modern enterprises.
                </Text>
              </motionBox>

              {/* Action Handlers */}
              <motionBox variants={itemVariants} pt="2">
                <HStack gap="4" flexWrap="wrap">
                  <Button
                    onClick={() => onScrollTo("contact")}
                    bg="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                    color="white"
                    fontWeight="700"
                    fontSize="sm"
                    borderRadius="xl"
                    px="8"
                    py="6"
                    boxShadow="0 4px 20px rgba(6, 182, 212, 0.35)"
                    className="hover:scale-[1.03] hover:shadow-[0_4px_25px_rgba(6, 182, 212, 0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer flex gap-2 items-center"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight size={16} />
                  </Button>

                  <Button
                    onClick={() => onScrollTo("services")}
                    bg="rgba(255, 255, 255, 0.03)"
                    color="white"
                    fontWeight="600"
                    fontSize="sm"
                    borderRadius="xl"
                    px="7"
                    py="6"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    className="hover:bg-white hover:text-slate-950 hover:border-transparent active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    Our Capabilities
                  </Button>
                </HStack>
              </motionBox>

              {/* Simple Feature Tags */}
              <motionBox variants={itemVariants} pt="4">
                <HStack gap="6" flexWrap="wrap" className="text-xs text-gray-400 font-mono">
                  <HStack gap="1.5">
                    <Terminal size={14} className="text-cyan-400" />
                    <span>Production-Ready ESM</span>
                  </HStack>
                  <HStack gap="1.5">
                    <Shield size={14} className="text-cyan-400" />
                    <span>Industrial Security</span>
                  </HStack>
                  <HStack gap="1.5">
                    <Zap size={14} className="text-cyan-400" />
                    <span>Sub-Millisecond Engine</span>
                  </HStack>
                </HStack>
              </motionBox>
            </motionBox>
          </Box>

          {/* Interactive Visual/Illustration Module */}
          <Box gridColumn={{ lg: "span 5" }} position="relative">
            <motionFlex
              initial="hidden"
              animate="visible"
              variants={floatingAnimation}
              flexDirection="column"
              justify="center"
              align="center"
              width="full"
            >
              {/* Main Futuristic Blueprint Frame */}
              <Box
                width="full"
                maxW="420px"
                borderRadius="2xl"
                border="1px solid"
                borderColor="rgba(6, 182, 212, 0.25)"
                bg="rgba(15, 23, 42, 0.6)"
                px="6"
                py="7"
                backdropFilter="blur(20px)"
                boxShadow="0 25px 50px -12px rgba(6, 182, 212, 0.15)"
                position="relative"
              >
                {/* Accent cyan light circle glow */}
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  width="140px"
                  height="140px"
                  bg="cyan.500"
                  borderRadius="full"
                  filter="blur(80px)"
                  opacity="0.25"
                  pointerEvents="none"
                />

                {/* Card Title Bar */}
                <Flex justify="space-between" align="center" mb="6" borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.08)" pb="4">
                  <HStack gap="2">
                    <Box w="3" h="3" borderRadius="full" bg="red.500" />
                    <Box w="3" h="3" borderRadius="full" bg="yellow.500" />
                    <Box w="3" h="3" borderRadius="full" bg="green.500" />
                  </HStack>
                  <Text fontFamily="mono" fontSize="xs" color="cyan.400" fontWeight="600">
                    stark_infra_core.yaml
                  </Text>
                </Flex>

                {/* Inside blueprint code lines */}
                <VStack align="stretch" gap="3" fontFamily="mono" fontSize="xs">
                  <Box color="gray.500">
                    <span className="text-cyan-400">service_config:</span>
                  </Box>
                  <Box pl="4" color="gray.300">
                    <div>
                      <span className="text-purple-400">module:</span>{" "}
                      <span className="text-emerald-400">stark.solutions.engine</span>
                    </div>
                    <div>
                      <span className="text-purple-400">throughput:</span>{" "}
                      <span className="text-amber-400">10k_req_sec</span>
                    </div>
                    <div>
                      <span className="text-purple-400">latency:</span>{" "}
                      <span className="text-amber-400">&lt; 12ms</span>
                    </div>
                  </Box>

                  {/* Active Monitor Frame inside */}
                  <Box
                    bg="rgba(0, 0, 0, 0.3)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.06)"
                    borderRadius="lg"
                    p="3"
                    my="2"
                  >
                    <Flex justify="space-between" align="center" mb="2">
                      <Text color="gray.400" fontSize="10px" fontWeight="700">ACTIVE SERVER STATUS</Text>
                      <HStack gap="1">
                        <Box w="2" h="2" borderRadius="full" bg="emerald.500" className="animate-ping" position="absolute" />
                        <Box w="2" h="2" borderRadius="full" bg="emerald.500" />
                        <Text color="emerald.400" fontSize="10px" fontWeight="700">ONLINE</Text>
                      </HStack>
                    </Flex>
                    {/* Visual waves / progress bars */}
                    <VStack align="stretch" gap="1.5">
                      <Box>
                        <Flex justify="space-between" fontSize="9px" color="gray.500" mb="1">
                          <span>API Request Ingress</span>
                          <span className="text-gray-300">98.4% Load</span>
                        </Flex>
                        <Box w="full" h="1.5" bg="gray.800" borderRadius="full" overflow="hidden">
                          <Box w="84%" h="full" bg="cyan.400" borderRadius="full" />
                        </Box>
                      </Box>
                      <Box>
                        <Flex justify="space-between" fontSize="9px" color="gray.500" mb="1">
                          <span>Database Spanner Sync</span>
                          <span className="text-gray-300">3.2ms latency</span>
                        </Flex>
                        <Box w="full" h="1.5" bg="gray.800" borderRadius="full" overflow="hidden">
                          <Box w="92%" h="full" bg="blue-500" borderRadius="full" />
                        </Box>
                      </Box>
                    </VStack>
                  </Box>

                  {/* Microservices Node Diagram Representation */}
                  <Flex justify="space-around" align="center" py="2" borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.05)">
                    <VStack gap="1" align="center">
                      <Box p="2" bg="rgba(6, 182, 212, 0.1)" border="1px solid" borderColor="rgba(6, 182, 212, 0.3)" borderRadius="lg">
                        <Terminal size={14} className="text-cyan-400" />
                      </Box>
                      <Text fontSize="8px" color="gray.500">API Gateway</Text>
                    </VStack>
                    <Box h="0.5" bg="cyan.500" flex="1" mx="1" opacity="0.3" position="relative">
                      <Box w="1.5" h="1.5" bg="cyan.400" borderRadius="full" position="absolute" top="-2px" left="20%" className="animate-bounce" />
                    </Box>
                    <VStack gap="1" align="center">
                      <Box p="2" bg="rgba(99, 102, 241, 0.1)" border="1px solid" borderColor="rgba(99, 102, 241, 0.3)" borderRadius="lg">
                        <Cpu size={14} className="text-indigo-400" />
                      </Box>
                      <Text fontSize="8px" color="gray.500">Core Engine</Text>
                    </VStack>
                    <Box h="0.5" bg="indigo.500" flex="1" mx="1" opacity="0.3" position="relative">
                      <Box w="1.5" h="1.5" bg="indigo.400" borderRadius="full" position="absolute" top="-2px" left="60%" className="animate-bounce" />
                    </Box>
                    <VStack gap="1" align="center">
                      <Box p="2" bg="rgba(59, 130, 246, 0.1)" border="1px solid" borderColor="rgba(59, 130, 246, 0.3)" borderRadius="lg">
                        <Zap size={14} className="text-blue-400" />
                      </Box>
                      <Text fontSize="8px" color="gray.500">Cloud DB</Text>
                    </VStack>
                  </Flex>
                </VStack>
              </Box>
            </motionFlex>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
