import { Box, Container, Flex, Text, HStack, VStack, SimpleGrid, Badge } from "@chakra-ui/react";
import { Cpu, Terminal, Shield, Sparkles } from "lucide-react";

interface FooterProps {
  onScrollTo: (elementId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <Box
      bg="#070a11"
      borderTop="1px solid"
      borderColor="rgba(255, 255, 255, 0.05)"
      py={{ base: "12", md: "16" }}
      position="relative"
    >
      <Container maxW="1200px" px={{ base: "4", md: "8" }}>
        
        {/* Core footer directory grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap="8" mb="12">
          
          {/* Logo, pitch & security badge */}
          <VStack gap="4" align="flex-start" className="max-w-xs">
            <Flex align="center" gap="3">
              <Box
                bg="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                p="2"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Cpu size={18} className="text-white" />
              </Box>
              <HStack gap="1">
                <Text fontWeight="800" fontSize="lg" letterSpacing="-0.5px" className="text-white">
                  STARK
                </Text>
                <Text fontWeight="500" fontSize="lg" letterSpacing="-0.5px" className="text-cyan-400 font-mono">
                  //TECH
                </Text>
              </HStack>
            </Flex>
            <Text fontSize="xs" color="gray-500" lineHeight="1.6">
              Stark Technologies designs and deploys optimized software frameworks, bulletproof multi-region cloud infrastructures, and semantic integrations that increase industrial workflow throughput.
            </Text>
            <HStack gap="2" className="text-[10px] text-gray-500">
              <Shield size={12} className="text-cyan-400" />
              <span>Diagnostic Socket Secured</span>
            </HStack>
          </VStack>

          {/* Directory Column 1: Client Capabilities */}
          <VStack gap="3" align="flex-start">
            <Text fontSize="xs" fontWeight="700" color="white" fontFamily="mono" letterSpacing="0.05em">
              CLIENT SERVICES
            </Text>
            <VStack gap="2" align="flex-start" fontSize="xs" className="text-gray-400">
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("services")}>Custom SaaS Engineering</Text>
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("services")}>Kubernetes Stream Cluster</Text>
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("services")}>Low-Latency API Ledger</Text>
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("services")}>Zero-Trust MFA IAM Policy</Text>
            </VStack>
          </VStack>

          {/* Directory Column 2: Systems */}
          <VStack gap="3" align="flex-start">
            <Text fontSize="xs" fontWeight="700" color="white" fontFamily="mono" letterSpacing="0.05em">
              OFFICIAL SYSTEM
            </Text>
            <VStack gap="2" align="flex-start" fontSize="xs" className="text-gray-400">
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("calculator")}>Cost & SLA Calculator</Text>
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("case-studies")}>Filterable Case Studies</Text>
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("contact")}>Diagnostic Inquiry Tickets</Text>
              <Text cursor="pointer" className="hover:text-white" onClick={() => onScrollTo("services")}>Technical Blueprints</Text>
            </VStack>
          </VStack>

          {/* Directory Column 3: Contact Info */}
          <VStack gap="3" align="flex-start">
            <Text fontSize="xs" fontWeight="700" color="white" fontFamily="mono" letterSpacing="0.05em">
              GLOBAL ADDRESS
            </Text>
            <VStack gap="2" align="flex-start" fontSize="xs" className="text-gray-400">
              <Text>Primary Diagnostic Inbox:</Text>
              <Text fontWeight="600" className="text-cyan-400 font-mono">consult@stark.technologies</Text>
              <Text mt="2">Authorized Delivery Hubs:</Text>
              <Text className="font-mono text-[10px]">US-EAST // EU-WEST // APAC</Text>
            </VStack>
          </VStack>

        </SimpleGrid>

        {/* Base legal row split */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          gap="4"
          pt="8"
          borderTop="1px solid"
          borderColor="rgba(255, 255, 255, 0.04)"
          fontSize="11px"
          className="text-gray-500 font-mono"
        >
          <HStack gap="4">
            <Text>&copy; {year} Stark Technologies, Inc. All rights reserved.</Text>
            <Text display={{ base: "none", md: "inline" }}>•</Text>
            <Text display={{ base: "none", md: "inline" }} cursor="pointer" className="hover:text-white">Commercial SLA Agreements</Text>
          </HStack>
          <HStack gap="1.5">
            <Terminal size={12} className="text-cyan-400" />
            <span>Deployment Node: v3.21.0-Release</span>
          </HStack>
        </Flex>

      </Container>
    </Box>
  );
}
