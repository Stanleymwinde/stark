import { useState } from "react";
import { Box, Container, Flex, Heading, Text, SimpleGrid, Badge, Button, HStack, VStack } from "@chakra-ui/react";
import { CaseStudy } from "../types";
import { ArrowUpRight, TrendingUp, BarChart3, Database } from "lucide-react";

export default function CaseStudies() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Client Work" },
    { id: "platform", label: "Core Platforms" },
    { id: "cloud", label: "Cloud Infra" },
    { id: "ai", label: "AI & Intelligence" },
  ];

  const caseStudiesData: CaseStudy[] = [
    {
      id: "cs-1",
      title: "Automated Distributed Clearing System",
      client: "Aegis Finance Group",
      category: "platform",
      description: "Re-engineered standard ledger clearing pipelines to convert bulky overnight batched files into a sub-second, transactional ledger processing queue built with robust fault-tolerance.",
      stats: [
        { label: "Clearing Latency", value: "12ms avg" },
        { label: "Transaction Speed", value: "+300% faster" },
        { label: "System Uptime", value: "99.999%" }
      ],
      techStack: ["React 19", "Fastify", "PostgreSQL", "Redis Cache", "TypeScript"],
      color: "#06b6d4"
    },
    {
      id: "cs-2",
      title: "Low-Latency Telemetry Stream Router",
      client: "Apex Wind Grids",
      category: "cloud",
      description: "Architected a low-latency edge packet streams ingestion mesh that processes and serializes continuous sensory micro-telemetry packets from active grid arrays.",
      stats: [
        { label: "Ingestion Volume", value: "1.8B pkts/day" },
        { label: "Buffer Lag Time", value: "< 1.5 seconds" },
        { label: "Compute Overheads", value: "-45% saved" }
      ],
      techStack: ["Kubernetes", "Kafka Streams", "InfluxDB Time-series", "AWS EKS", "Golang"],
      color: "#3b82f6"
    },
    {
      id: "cs-3",
      title: "Contextual Route Optimizations Broker",
      client: "Nexus Global Freight",
      category: "ai",
      description: "Deployed custom semantic data caching and retrieval vectors integrated with high-performance routing matrices to optimize fuel distribution efficiency schedules.",
      stats: [
        { label: "Dispatch Efficiency", value: "+24.8% improvement" },
        { label: "Transit Emissions", value: "-18.2% reduction" },
        { label: "Agent Compute SLA", value: "< 850ms execution" }
      ],
      techStack: ["@google/genai", "FastAPI Python", "Google Spanner", "Docker Container"],
      color: "#8b5cf6"
    }
  ];

  const filteredStudies = filter === "all" 
    ? caseStudiesData 
    : caseStudiesData.filter(cs => cs.category === filter);

  return (
    <Box id="case-studies" py={{ base: "16", md: "24" }} bg="#0b0f19" position="relative">
      {/* Structural accent background gradient */}
      <Box
        position="absolute"
        top="40%"
        right="0"
        width="400px"
        height="400px"
        bg="indigo.500"
        borderRadius="full"
        filter="blur(160px)"
        opacity="0.08"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: "4", md: "8" }}>
        
        {/* Title and Top Actions Header */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "flex-end" }}
          gap="6"
          mb="12"
        >
          <VStack gap="4" align="flex-start" maxW="2xl">
            <Badge
              bg="rgba(59, 130, 246, 0.08)"
              color="blue.400"
              border="1px solid"
              borderColor="rgba(59, 130, 246, 0.15)"
              borderRadius="md"
              px="3"
              py="1"
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="wider"
              fontFamily="mono"
            >
              Proven Efficacy
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="800"
              color="white"
              letterSpacing="-1px"
            >
              Pristine Solutions, Measured in Real Velocity
            </Heading>
            <Text fontSize="md" color="gray-400" lineHeight="1.6">
              We focus on highly detailed operational outcomes. Explore how our custom engineering solutions solve actual enterprise throughput barriers around the world.
            </Text>
          </VStack>

          {/* Filtering buttons */}
          <Flex bg="rgba(0,0,0,0.2)" border="1px solid" borderColor="rgba(255,255,255,0.06)" p="1.5" borderRadius="xl" gap="1" flexWrap="wrap">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                bg={filter === cat.id ? "rgba(255,255,255,0.08)" : "transparent"}
                color={filter === cat.id ? "white" : "gray.400"}
                fontWeight="600"
                fontSize="xs"
                px="4"
                py="2.5"
                borderRadius="lg"
                className="hover:text-white transition-all active:scale-[0.97] cursor-pointer"
              >
                {cat.label}
              </Button>
            ))}
          </Flex>
        </Flex>

        {/* Case Studies Grid Layout */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6" alignItems="stretch">
          {filteredStudies.map((cs) => (
            <Box
              key={cs.id}
              bg="rgba(15, 23, 42, 0.25)"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.05)"
              borderRadius="2xl"
              p="6"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              className="hover:border-cyan-400/25 transition-all duration-300 relative group"
            >
              {/* Highlight accent hover background line */}
              <Box
                position="absolute"
                left="0"
                right="0"
                top="0"
                height="4px"
                bg={cs.color}
                borderTopRadius="2xl"
                opacity="0.3"
                className="group-hover:opacity-100 transition-opacity duration-300"
              />

              <VStack align="stretch" gap="5">
                {/* Meta details bar */}
                <Flex justify="space-between" align="center" mt="2">
                  <Text fontSize="xs" fontWeight="700" color="gray.500" fontFamily="mono">
                    {cs.client.toUpperCase()}
                  </Text>
                  <Badge
                    bg="rgba(255,255,255,0.04)"
                    color="gray.400"
                    px="2"
                    py="0.5"
                    fontSize="9px"
                    fontFamily="mono"
                  >
                    {cs.category.toUpperCase()}
                  </Badge>
                </Flex>

                {/* Case Title */}
                <Box>
                  <Heading as="h3" fontSize="lg" color="white" fontWeight="750" mb="2">
                    {cs.title}
                  </Heading>
                  <Text fontSize="xs" color="gray-400" lineHeight="1.5">
                    {cs.description}
                  </Text>
                </Box>

                {/* Performance Outcome Metrics Cards */}
                <Box py="2">
                  <Text fontSize="10px" fontWeight="800" color="gray-500" letterSpacing="0.05em" fontFamily="mono" mb="2" display="block">
                    PROVEN CLIENT METRICS:
                  </Text>
                  <VStack align="stretch" gap="2.5">
                    {cs.stats.map((stat, sIdx) => (
                      <Flex key={sIdx} justify="space-between" align="center" borderBottom="1px solid" borderColor="rgba(255,255,255,0.03)" pb="2">
                        <Text fontSize="11px" color="gray-400">{stat.label}</Text>
                        <HStack gap="1.5">
                          {sIdx === 1 ? <TrendingUp size={11} className="text-cyan-400" /> : <BarChart3 size={11} className="text-cyan-400" />}
                          <Text fontSize="12px" fontWeight="800" color="white" fontFamily="mono">{stat.value}</Text>
                        </HStack>
                      </Flex>
                    ))}
                  </VStack>
                </Box>
              </VStack>

              {/* Technologies list at container base */}
              <Box mt="6" pt="4" borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.04)">
                <Text fontSize="9px" fontWeight="700" color="gray-500" fontFamily="mono" mb="2">
                  INTEGRATED MODULES:
                </Text>
                <HStack gap="1.5" flexWrap="wrap">
                  {cs.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      bg="rgba(255, 255, 255, 0.03)"
                      color="gray.400"
                      fontSize="9px"
                      fontFamily="mono"
                      px="1.5"
                      py="0.5"
                      borderRadius="md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>

            </Box>
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}
