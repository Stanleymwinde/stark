import React, { useState } from "react";
import { Box, Flex, Heading, Text, SimpleGrid, Container, Badge, HStack, VStack, Button } from "@chakra-ui/react";
import { Code2, Cloud, FileCode, Bot, ShieldAlert, Cpu, CheckCircle2, ChevronRight, Server, Database, Globe } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);

  const servicesData = [
    {
      icon: <Code2 size={24} className="text-cyan-400" />,
      title: "Bespoke Enterprise Software",
      shortDesc: "Tailored full-stack platforms engineered for extreme reliability and high developer velocity.",
      tag: "CORE SVCS",
      detail: {
        architecture: "Micro-Frontend Modular Architecture",
        stack: ["React 19", "Vite", "TypeScript", "Node.js", "Docker"],
        timeline: "6 - 12 Weeks average turnaround",
        outcomes: [
          "Bespoke component engineering for reusability",
          "Comprehensive unit, integration, and end-to-end test suites",
          "Ultra-fast local HMR and clean module separation"
        ]
      }
    },
    {
      icon: <Cloud size={24} className="text-blue-400" />,
      title: "Self-Healing Cloud Systems",
      shortDesc: "Multi-region, resilient architectures built to support immense demand with zero downtime.",
      tag: "INFRASTRUCTURE",
      detail: {
        architecture: "Containerized Kubernetes Cluster",
        stack: ["AWS ECS/EKS", "Google Cloud", "Terraform", "GitHub Actions"],
        timeline: "4 - 8 Weeks average turnaround",
        outcomes: [
          "99.99% operational availability design SLA",
          "Automated Infrastructure-as-Code Terraform modules",
          "Predictive Auto-scaling based on CPU/traffic load boundaries"
        ]
      }
    },
    {
      icon: <FileCode size={24} className="text-indigo-400" />,
      title: "High-Throughput APIs",
      shortDesc: "Low-latency API layers secured by strict request schema validations and caching networks.",
      tag: "SYSTEM INTEL",
      detail: {
        architecture: "Distributed REST & GraphQL Gateway",
        stack: ["Express", "Fastify", "GraphQL", "Redis Caching", "PostgreSQL"],
        timeline: "3 - 6 Weeks average turnaround",
        outcomes: [
          "Sub-15ms response latency processing speed",
          "Rate-limiting systems with strict token bucket logic",
          "Auto-generated OpenAPI (Swagger) specifications"
        ]
      }
    },
    {
      icon: <Bot size={24} className="text-purple-400" />,
      title: "Intelligence & AI Agents",
      shortDesc: "Next-gen LLM integration, custom semantic vector mapping, and operational decision agents.",
      tag: "AI FRONTIER",
      detail: {
        architecture: "RAG (Retrieval-Augmented) Intelligence Engine",
        stack: ["@google/genai SDK", "LangChain", "Vector Indexes", "Python", "FastAPI"],
        timeline: "4 - 10 Weeks average turnaround",
        outcomes: [
          "Custom semantic search grounding capability",
          "Context-aware automated prompt and translation logic",
          "Efficient chunk processing model pipelines"
        ]
      }
    },
    {
      icon: <ShieldAlert size={24} className="text-teal-400" />,
      title: "End-to-End Cyber Security",
      shortDesc: "Zero-Trust compliance policies, automated pen-testing audits, and granular asset authorization.",
      tag: "COMPLIANCE",
      detail: {
        architecture: "Zero-Trust Identity & Perimeter Posture",
        stack: ["OAuth 2.1", "OpenID Connect", "IAM", "JWT Validation", "Vault"],
        timeline: "3 - 5 Weeks average turnaround",
        outcomes: [
          "Granular role-based user access controls (RBAC)",
          "Automated server-side security scanning pipelines",
          "Secure credential hashing algorithms (Argon2id)"
        ]
      }
    },
    {
      icon: <Cpu size={24} className="text-emerald-400" />,
      title: "Industrial IoT & Telemetry",
      shortDesc: "Edge telemetry collection pipelines and low-latency hardware stream ingest networks.",
      tag: "IOT / EDGE",
      detail: {
        architecture: "MQTT Distributed Message Ingestion Broker",
        stack: ["Node-RED", "Apache Kafka", "Go", "InfluxDB", "WebSockets"],
        timeline: "8 - 14 Weeks average turnaround",
        outcomes: [
          "Robust edge packet compression techniques",
          "High-volume timeline time-series database models",
          "Real-time websocket dashboards with instant visual updates"
        ]
      }
    }
  ];

  return (
    <Box id="services" py={{ base: "16", md: "24" }} bg="#090d16" position="relative">
      {/* Light glow overlay */}
      <Box
        position="absolute"
        bottom="-10%"
        left="-10%"
        width="300px"
        height="300px"
        bg="blue.500"
        borderRadius="full"
        filter="blur(140px)"
        opacity="0.1"
      />

      <Container maxW="1200px" px={{ base: "4", md: "8" }}>
        
        {/* Section Header */}
        <VStack gap="4" align="flex-start" mb="12">
          <Badge
            bg="rgba(6, 182, 212, 0.08)"
            color="cyan.400"
            border="1px solid"
            borderColor="rgba(6, 182, 212, 0.15)"
            borderRadius="md"
            px="3"
            py="1"
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="wider"
            fontFamily="mono"
          >
            Capabilities
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            color="white"
            letterSpacing="-1px"
          >
            Engineering Custom Tech Solutions for Real Operational Outcomes
          </Heading>
          <Text fontSize="md" color="gray-400" maxW="2xl" lineHeight="1.6">
            We skip the boilerplates. Every software architecture is designed custom-fit for your enterprise throughput constraints, security standards, and high scale goals.
          </Text>
        </VStack>

        {/* Dynamic Solutions Layout */}
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap="8" alignItems="stretch">
          
          {/* Service Selector (Left column) */}
          <VStack gridColumn={{ lg: "span 5" }} gap="3" align="stretch">
            {servicesData.map((service, index) => {
              const isSelected = selectedService === index;
              return (
                <Box
                  key={service.title}
                  onClick={() => setSelectedService(index)}
                  p="5"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={isSelected ? "rgba(6, 182, 212, 0.3)" : "rgba(255, 255, 255, 0.04)"}
                  bg={isSelected ? "rgba(6, 182, 212, 0.05)" : "rgba(15, 23, 42, 0.3)"}
                  className="transition-all duration-200 cursor-pointer hover:border-cyan-400/20 hover:bg-slate-900/40"
                  position="relative"
                  overflow="hidden"
                >
                  <Flex justify="space-between" align="center">
                    <HStack gap="4">
                      <Box
                        p="2"
                        borderRadius="lg"
                        bg="rgba(15, 23, 42, 0.5)"
                        border="1px solid"
                        borderColor="rgba(255, 255, 255, 0.08)"
                      >
                        {service.icon}
                      </Box>
                      <VStack align="flex-start" gap="1">
                        <Badge
                          fontSize="9px"
                          fontFamily="mono"
                          bg="rgba(255, 255, 255, 0.04)"
                          color="gray.400"
                          px="1.5"
                          borderRadius="sm"
                        >
                          {service.tag}
                        </Badge>
                        <Text fontWeight="600" color={isSelected ? "white" : "gray.200"} fontSize="sm">
                          {service.title}
                        </Text>
                      </VStack>
                    </HStack>
                    <ChevronRight size={16} className={isSelected ? "text-cyan-400" : "text-gray-600"} />
                  </Flex>
                  {/* Miniature progress accent bar */}
                  {isSelected && (
                    <Box
                      position="absolute"
                      left="0"
                      top="0"
                      bottom="0"
                      width="3px"
                      bg="linear-gradient(to bottom, #06b6d4, #3b82f6)"
                    />
                  )}
                </Box>
              );
            })}
          </VStack>

          {/* Service Tech Inspector (Right Column) */}
          <Box
            gridColumn={{ lg: "span 7" }}
            bg="rgba(15, 23, 42, 0.4)"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.06)"
            borderRadius="2xl"
            p={{ base: "6", md: "8" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            backgroundImage="radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.05), transparent 60%)"
          >
            <VStack align="stretch" gap="6">
              {/* Highlight Service Summary */}
              <Box>
                <Text fontSize="xs" fontWeight="700" color="cyan.400" fontFamily="mono" mb="1" letterSpacing="0.05em">
                  TECHNICAL BLUEPRINT // {servicesData[selectedService].title.toUpperCase()}
                </Text>
                <Heading as="h3" fontSize="2xl" color="white" fontWeight="750" mb="2">
                  {servicesData[selectedService].title}
                </Heading>
                <Text fontSize="sm" color="gray-400" lineHeight="1.6">
                  {servicesData[selectedService].shortDesc}
                </Text>
              </Box>

              {/* Architectural Grid Details */}
              <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
                <Box bg="rgba(0,0,0,0.2)" border="1px solid" borderColor="rgba(255,255,255,0.04)" borderRadius="xl" p="4">
                  <HStack gap="2" mb="2" className="text-gray-400 font-mono text-xs">
                    <Server size={14} className="text-cyan-400" />
                    <span>System Architecture</span>
                  </HStack>
                  <Text fontWeight="600" color="white" fontSize="xs">
                    {servicesData[selectedService].detail.architecture}
                  </Text>
                </Box>

                <Box bg="rgba(0,0,0,0.2)" border="1px solid" borderColor="rgba(255,255,255,0.04)" borderRadius="xl" p="4">
                  <HStack gap="2" mb="2" className="text-gray-400 font-mono text-xs">
                    <HistoryIcon size={14} className="text-cyan-400" />
                    <span>Delivery SLA</span>
                  </HStack>
                  <Text fontWeight="600" color="white" fontSize="xs">
                    {servicesData[selectedService].detail.timeline}
                  </Text>
                </Box>
              </SimpleGrid>

              {/* Technologies Included Badges */}
              <Box>
                <Text fontSize="xs" fontWeight="700" color="gray-400" fontFamily="mono" mb="3">
                  STARK RECOMMENDED STACK:
                </Text>
                <HStack gap="2" flexWrap="wrap">
                  {servicesData[selectedService].detail.stack.map((tech) => (
                    <Badge
                      key={tech}
                      bg="rgba(255,255,255,0.03)"
                      color="cyan.400"
                      border="1px solid"
                      borderColor="rgba(6, 182, 212, 0.2)"
                      px="2.5"
                      py="1"
                      borderRadius="md"
                      fontSize="10px"
                      fontFamily="mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              {/* Engineering Outcomes Checklist */}
              <Box>
                <Text fontSize="xs" fontWeight="700" color="gray-400" fontFamily="mono" mb="3">
                  ENGINEERING ASSURANCES:
                </Text>
                <VStack align="stretch" gap="2.5">
                  {servicesData[selectedService].detail.outcomes.map((outcome) => (
                    <HStack key={outcome} gap="3" align="flex-start">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <Text fontSize="xs" color="gray-300" lineHeight="1.5">
                        {outcome}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </VStack>

            {/* Inquire Callout */}
            <Box mt="8" pt="4" borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.05)">
              <Flex justify="space-between" align="center" flexWrap="wrap" gap="4">
                <Text fontSize="xs" color="gray-500" fontFamily="mono">
                  * All architectures are subject to strict SLA review meetings.
                </Text>
                <Button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="link"
                  color="#22d3ee"
                  fontSize="sm"
                  fontWeight="600"
                  className="hover:text-white flex gap-1.5 items-center underline cursor-pointer duration-150"
                >
                  <span>Inquire about this pattern</span>
                  <ChevronRight size={14} />
                </Button>
              </Flex>
            </Box>
          </Box>

        </SimpleGrid>

      </Container>
    </Box>
  );
}

// Simple fallback icon to avoid import issues
function HistoryIcon(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
