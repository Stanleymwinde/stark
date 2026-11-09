import { useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text, SimpleGrid, HStack, VStack, Button, Badge } from "@chakra-ui/react";
import { ProjectPlatform, ProjectFeature } from "../types";
import { Calculator as CalcIcon, ShieldCheck, HelpCircle, ArrowRight, Zap, RefreshCw, Calendar, Sparkles } from "lucide-react";

interface CalculatorProps {
  onSelectEstimate: (estimateText: string) => void;
}

export default function Calculator({ onSelectEstimate }: CalculatorProps) {
  // Preset Platform items
  const platforms: ProjectPlatform[] = [
    { id: "single-app", name: "Premium Single-Screen Platform", baseCost: 15000, multiplier: 1.0, iconName: "Monitor" },
    { id: "full-web", name: "Enterprise SaaS Full-Stack Web Engine", baseCost: 32000, multiplier: 1.3, iconName: "Globe" },
    { id: "ledger", name: "High-Throughput Ledger/API Service", baseCost: 26000, multiplier: 1.2, iconName: "Server" },
    { id: "edge", name: "IoT/Edge Ingestion Telemetry Broker", baseCost: 45000, multiplier: 1.5, iconName: "Cpu" },
  ];

  // Preset features that add base cost
  const features: ProjectFeature[] = [
    { id: "auth", name: "Identity & Zero-Trust MFA OAuth", description: "Secure credential authentication, user profiles & role auth.", baseCost: 3500, iconName: "Shield" },
    { id: "ai", name: "Semantic Search & AI Vector Agents", description: "RAG intelligence embeddings powered by @google/genai SDK.", baseCost: 8500, iconName: "Bot" },
    { id: "realtime", name: "Real-time High Frequency Websockets", description: "Two-way sub-10ms event broadcasts and messaging pipeline.", baseCost: 5500, iconName: "Zap" },
    { id: "cloud", name: "Multi-Region Cloud Kubernetes & Terraform", description: "Automated container setups designed for infinite horizontal auto-scaling.", baseCost: 7500, iconName: "Cloud" },
    { id: "analytics", name: "Live Data Auditing & custom SVG Analytics", description: "Intricate customer-facing data metrics and custom timelines charts.", baseCost: 6000, iconName: "BarChart" },
  ];

  // Selected State variables
  const [selectedPlatform, setSelectedPlatform] = useState<string>("full-web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "cloud"]);
  const [timelineSpeed, setTimelineSpeed] = useState<"standard" | "rapid" | "hyper-sprint">("standard");

  // Output calculated states
  const [totalCost, setTotalCost] = useState(0);
  const [deliveryWeeks, setDeliveryWeeks] = useState(0);

  // Recalculate cost when states change
  useEffect(() => {
    const platform = platforms.find((p) => p.id === selectedPlatform) || platforms[1];
    let baseSum = platform.baseCost;

    // Add selected features cost inside platform
    selectedFeatures.forEach((featId) => {
      const featDetail = features.find((f) => f.id === featId);
      if (featDetail) {
        baseSum += featDetail.baseCost;
      }
    });

    // Apply platform scope complexity multiplier
    let calcTotal = Math.round(baseSum * platform.multiplier);

    // Apply delivery acceleration cost
    let speedCost = 0;
    if (timelineSpeed === "rapid") {
      speedCost = 6500;
    } else if (timelineSpeed === "hyper-sprint") {
      speedCost = 14500;
    }
    calcTotal += speedCost;

    // Calculate delivery weeks
    let baseWeeks = 8;
    if (selectedPlatform === "single-app") baseWeeks = 6;
    if (selectedPlatform === "ledger") baseWeeks = 8;
    if (selectedPlatform === "edge") baseWeeks = 12;

    // Add weeks for features
    let speedFactor = 1.0;
    if (timelineSpeed === "rapid") {
      speedFactor = 0.75; // 25% faster
    } else if (timelineSpeed === "hyper-sprint") {
      speedFactor = 0.5; // 50% faster
    }

    const calculatedWeeks = Math.max(3, Math.round((baseWeeks + Math.round(selectedFeatures.length * 0.8)) * speedFactor));

    setTotalCost(calcTotal);
    setDeliveryWeeks(calculatedWeeks);
  }, [selectedPlatform, selectedFeatures, timelineSpeed]);

  const toggleFeature = (featId: string) => {
    if (selectedFeatures.includes(featId)) {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featId));
    } else {
      setSelectedFeatures([...selectedFeatures, featId]);
    }
  };

  const handleTransmitEstimate = () => {
    const platformName = platforms.find((p) => p.id === selectedPlatform)?.name || "";
    const featureNamesList = selectedFeatures
      .map((id) => features.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(", ");
    
    const speedLabel = timelineSpeed === "standard" 
      ? "Standard SLA Timeline" 
      : timelineSpeed === "rapid" 
        ? "Rapid Accelerated SLA" 
        : "Hyper-Sprint SLA";

    const summaryText = `Stark Tech Estimate Inquiry:
- Target Platform: ${platformName}
- Selected Modules: [${featureNamesList || "None"}]
- Desired SLA: ${speedLabel}
- Calculated Total Budget: $${totalCost.toLocaleString()}
- Expected Delivery Timeline: ${deliveryWeeks} Weeks`;

    onSelectEstimate(summaryText);
  };

  const resetCalculator = () => {
    setSelectedPlatform("full-web");
    setSelectedFeatures(["auth", "cloud"]);
    setTimelineSpeed("standard");
  };

  return (
    <Box id="calculator" py={{ base: "16", md: "24" }} bg="#090d16" position="relative">
      <Box
        position="absolute"
        top="0"
        left="5%"
        width="220px"
        height="220px"
        bg="cyan.500"
        borderRadius="full"
        filter="blur(130px)"
        opacity="0.08"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: "4", md: "8" }}>
        
        {/* Title and Top Actions Header */}
        <VStack gap="4" align="center" textAlign="center" mb="12">
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
            TRANSPARENT VALUE
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            color="white"
            letterSpacing="-1px"
          >
            SLA Delivery & Cost Calculator
          </Heading>
          <Text fontSize="md" color="gray-400" maxW="2xl" lineHeight="1.6">
            Input your specific digital framework architecture requirement details beneath. Receive an immediate SLA schedule and budget outline instantly.
          </Text>
        </VStack>

        {/* Calculator Main Section */}
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap="8" p="2" alignItems="stretch">
          
          {/* Form Side (Sliders & Options) */}
          <VStack gridColumn={{ lg: "span 7" }} gap="6" align="stretch">
            
            {/* Step 1: Base Platform Scope */}
            <Box bg="rgba(15, 23, 42, 0.3)" border="1px solid" borderColor="rgba(255, 255, 255, 0.05)" borderRadius="2xl" p="6">
              <HStack gap="2" mb="4">
                <Badge bg="cyan.400" color="black" w="5" h="5" borderRadius="full" display="flex" alignItems="center" justifyContent="center" fontSize="xs" fontWeight="bold">1</Badge>
                <Text fontSize="sm" fontWeight="700" color="white" fontFamily="mono">PLATFORM CORE SCOPE</Text>
              </HStack>
              
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3">
                {platforms.map((p) => {
                  const isSelected = selectedPlatform === p.id;
                  return (
                    <Box
                      key={p.id}
                      onClick={() => setSelectedPlatform(p.id)}
                      p="4"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor={isSelected ? "cyan.400" : "rgba(255, 255, 255, 0.06)"}
                      bg={isSelected ? "rgba(6, 182, 212, 0.06)" : "rgba(0,0,0,0.15)"}
                      className="transition-all duration-150 cursor-pointer hover:border-cyan-400/30"
                    >
                      <Text fontWeight="650" color={isSelected ? "white" : "gray.350"} fontSize="xs" mb="1">
                        {p.name}
                      </Text>
                      <Flex justify="space-between" align="center" mt="2">
                        <Text fontSize="10px" color="gray-500" fontFamily="mono">Base: ${p.baseCost.toLocaleString()}</Text>
                        <Badge bg="rgba(255,255,255,0.04)" color="cyan.400" fontSize="9px" fontFamily="mono">
                          x{p.multiplier} mult
                        </Badge>
                      </Flex>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>

            {/* Step 2: Integrated Feature Modules */}
            <Box bg="rgba(15, 23, 42, 0.3)" border="1px solid" borderColor="rgba(255, 255, 255, 0.05)" borderRadius="2xl" p="6">
              <HStack gap="2" mb="4">
                <Badge bg="cyan.400" color="black" w="5" h="5" borderRadius="full" display="flex" alignItems="center" justifyContent="center" fontSize="xs" fontWeight="bold">2</Badge>
                <Text fontSize="sm" fontWeight="700" color="white" fontFamily="mono">INTEGRATE TECHNICAL MODULES</Text>
              </HStack>

              <VStack gap="2.5" align="stretch">
                {features.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <Flex
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      p="3.5"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor={isChecked ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.05)"}
                      bg={isChecked ? "rgba(6, 182, 212, 0.05)" : "transparent"}
                      justify="space-between"
                      align="center"
                      className="transition-all duration-150 cursor-pointer hover:bg-slate-900/30"
                    >
                      <HStack gap="3" align="flex-start" maxW="80%">
                        {/* Custom checkbox box */}
                        <Box
                          mt="0.5"
                          w="4"
                          h="4"
                          borderRadius="sm"
                          border="1px solid"
                          borderColor={isChecked ? "cyan.400" : "rgba(255,255,255,0.2)"}
                          bg={isChecked ? "cyan.400" : "transparent"}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          className="flex-shrink-0"
                        >
                          {isChecked && <Box w="2" h="2" borderRadius="full" bg="black" />}
                        </Box>
                        <VStack align="flex-start" gap="0.5">
                          <Text fontSize="xs" fontWeight="700" color={isChecked ? "white" : "gray.300"}>
                            {f.name}
                          </Text>
                          <Text fontSize="10px" color="gray-500" lineHeight="1.3">
                            {f.description}
                          </Text>
                        </VStack>
                      </HStack>
                      <Text fontSize="11px" fontWeight="800" color="cyan.400" fontFamily="mono" className="flex-shrink-0">
                        +${f.baseCost.toLocaleString()}
                      </Text>
                    </Flex>
                  );
                })}
              </VStack>
            </Box>

            {/* Step 3: SLA Delivery Acceleration */}
            <Box bg="rgba(15, 23, 42, 0.3)" border="1px solid" borderColor="rgba(255, 255, 255, 0.05)" borderRadius="2xl" p="6">
              <HStack gap="2" mb="4">
                <Badge bg="cyan.400" color="black" w="5" h="5" borderRadius="full" display="flex" alignItems="center" justifyContent="center" fontSize="xs" fontWeight="bold">3</Badge>
                <Text fontSize="sm" fontWeight="700" color="white" fontFamily="mono">TIMELINE SLA ACCELERATOR</Text>
              </HStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap="3">
                {[
                  { id: "standard", label: "Standard Delivery", desc: "Sequential quality pipeline", cost: "+$0 cost", duration: "100% time" },
                  { id: "rapid", label: "Rapid Accelerated", desc: "Parallel testing squads", cost: "+$6,500 premium", duration: "75% time" },
                  { id: "hyper-sprint", label: "Hyper-Sprint Delivery", desc: "Dedicated core focus squads", cost: "+$14,500 premium", duration: "50% time" }
                ].map((s) => {
                  const isActive = timelineSpeed === s.id;
                  return (
                    <Box
                      key={s.id}
                      onClick={() => setTimelineSpeed(s.id as any)}
                      p="4"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor={isActive ? "cyan.400" : "rgba(255, 255, 255, 0.05)"}
                      bg={isActive ? "rgba(6, 182, 212, 0.06)" : "rgba(0,0,0,0.1)"}
                      className="transition-all duration-150 cursor-pointer hover:border-cyan-400/20"
                    >
                      <Text fontWeight="700" color={isActive ? "white" : "gray.300"} fontSize="xs" mb="1">
                        {s.label}
                      </Text>
                      <Text fontSize="9px" color="gray-500" mb="2">{s.desc}</Text>
                      <Flex justify="space-between" fontSize="9px" color="cyan.400" fontFamily="mono" borderTop="1px solid" borderColor="rgba(255,255,255,0.03)" pt="1.5">
                        <span>{s.cost}</span>
                        <span>{s.duration}</span>
                      </Flex>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>

          </VStack>

          {/* Outcome Side (Summary & Transmit Callback) */}
          <Box
            gridColumn={{ lg: "span 5" }}
            bg="linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.2) 100%)"
            border="1px solid"
            borderColor="rgba(6, 182, 212, 0.15)"
            borderRadius="2xl"
            p="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            boxShadow="0 10px 30px rgba(0,0,0,0.15)"
          >
            <VStack align="stretch" gap="6">
              
              {/* Outcome Head */}
              <Flex justify="space-between" align="center" borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.08)" pb="4">
                <HStack gap="2">
                  <CalcIcon size={16} className="text-cyan-400" />
                  <Text fontFamily="mono" fontSize="2xs" color="gray-400" fontWeight="700">ESTIMATED ARCHITECTURE SUMMARY</Text>
                </HStack>
                <Button variant="ghost" color="gray-500" size="xs" onClick={resetCalculator} className="hover:text-white cursor-pointer py-1.5 px-2 font-mono text-[9px] h-fit">
                  <RefreshCw size={10} className="mr-1" />
                  RESET
                </Button>
              </Flex>

              {/* Scope Detail Outlines */}
              <VStack align="stretch" gap="3.5" fontSize="xs">
                <Box>
                  <Text color="gray-500" fontSize="10px" fontFamily="mono" mb="1">PLATFORM ENGINE</Text>
                  <Text fontWeight="700" color="white" noOfLines={1}>
                    {platforms.find((p) => p.id === selectedPlatform)?.name}
                  </Text>
                </Box>

                <Box>
                  <Text color="gray-500" fontSize="10px" fontFamily="mono" mb="1.5">MODULE INTEGRATIONS</Text>
                  <HStack gap="1.5" flexWrap="wrap">
                    {selectedFeatures.length === 0 ? (
                      <Badge bg="rgba(255,255,255,0.03)" color="gray-500" fontSize="9px">NONE DECLARED</Badge>
                    ) : (
                      selectedFeatures.map((id) => (
                        <Badge key={id} bg="rgba(6,182,212,0.05)" border="1px solid" borderColor="cyan.400/20" color="cyan.400" fontSize="9px" fontFamily="mono">
                          {features.find((f) => f.id === id)?.name.split(" ")[0] || id}
                        </Badge>
                      ))
                    )}
                  </HStack>
                </Box>

                <Box>
                  <Text color="gray-500" fontSize="10px" fontFamily="mono" mb="1">SLA TIMELINE SCHEDULE</Text>
                  <HStack gap="1.5">
                    <Calendar size={14} className="text-cyan-400" />
                    <Text fontWeight="800" color="white">{deliveryWeeks} Weeks expected delivery</Text>
                  </HStack>
                </Box>
              </VStack>

              {/* Big Estimated Budget Frame */}
              <Box bg="rgba(0,0,0,0.3)" border="1px solid" borderColor="rgba(6,182,212,0.15)" borderRadius="xl" p="5" textAlign="center" my="1">
                <Text fontSize="10px" color="cyan.400" fontWeight="700" fontFamily="mono" mb="1" letterSpacing="0.05em">
                  BUDGET PROJECTION
                </Text>
                <Heading as="h4" fontSize="3xl" color="white" fontWeight="850" letterSpacing="-1px">
                  ${totalCost.toLocaleString()}
                </Heading>
                <Text fontSize="9px" color="gray-500" mt="2" lineHeight="1.3">
                  This represents a realistic commercial engineering estimation. Includes all code ownership, deployments, and testing configurations.
                </Text>
              </Box>

            </VStack>

            {/* Inquire Buttons */}
            <VStack gap="2.5" align="stretch" mt="6">
              <Button
                onClick={handleTransmitEstimate}
                bg="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                color="white"
                fontWeight="700"
                fontSize="xs"
                borderRadius="lg"
                py="5"
                boxShadow="0 4px 14px rgba(6, 182, 212, 0.3)"
                className="hover:scale-[1.02] hover:shadow-[0_4px_18px_rgba(6, 182, 212, 0.45)] transition-all duration-200 cursor-pointer flex gap-2 items-center justify-center font-bold"
              >
                <span>Pre-fill Project Estimate details</span>
                <ArrowRight size={14} />
              </Button>
              
              <HStack gap="2" justify="center" className="text-[10px] text-gray-500 font-mono">
                <ShieldCheck size={12} className="text-cyan-400" />
                <span>Zero-risk commercial consulting review</span>
              </HStack>
            </VStack>

          </Box>

        </SimpleGrid>

      </Container>
    </Box>
  );
}
