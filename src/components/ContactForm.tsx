import React, { useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text, SimpleGrid, HStack, VStack, Button, Badge } from "@chakra-ui/react";
import { ContactFormData } from "../types";
import { Send, ShieldAlert, Sparkles, Server, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  prefilledMessage: string;
}

export default function ContactForm({ prefilledMessage }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    serviceInterest: "Core Platform Solutions",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState("");

  // Sync pre-filled message from the cost calculator whenever it updates
  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage,
        serviceInterest: "Full Architectural Custom Solution",
      }));
    }
  }, [prefilledMessage]);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) tempErrors.name = "Lead engineer/partner name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Input a valid diagnostic email";
    }
    if (!formData.message.trim()) tempErrors.message = "Please describe high-level code goals";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate receipt ticketing
      const ticketHex = Math.random().toString(16).substr(2, 6).toUpperCase();
      setGeneratedTicket(`STARK-NODE-${ticketHex}`);
      setSubmitted(true);
    }
  };

  const handleNewInquiry = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      serviceInterest: "Core Platform Solutions",
    });
    setErrors({});
    setSubmitted(false);
    setGeneratedTicket("");
  };

  return (
    <Box id="contact" py={{ base: "16", md: "24" }} bg="#0b0f19" position="relative">
      <Box
        position="absolute"
        bottom="0"
        right="0"
        width="450px"
        height="450px"
        bg="cyan.600"
        borderRadius="full"
        filter="blur(160px)"
        opacity="0.07"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: "4", md: "8" }}>
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: "12", lg: "8" }} alignItems="center">
          
          {/* Diagnostic specifications side (Left Column) */}
          <Box gridColumn={{ lg: "span 5" }}>
            <VStack gap="6" align="flex-start">
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
                Inquire Architecture
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="800"
                color="white"
                letterSpacing="-1px"
              >
                Let’s Align Core Technical Designs.
              </Heading>
              
              <Text fontSize="sm" color="gray-400" lineHeight="1.6">
                Ready to optimize backend latencies or secure your application flow? Complete the diagnostic form. Our system engineers read every entry within 4 hours to align technical solutions.
              </Text>

              <VStack align="stretch" gap="4" width="full" pt="2" className="text-xs text-gray-400">
                <HStack gap="3" align="flex-start">
                  <Box p="1.5" bg="rgba(6, 182, 212, 0.08)" borderRadius="lg" className="flex-shrink-0">
                    <Server size={14} className="text-cyan-400" />
                  </Box>
                  <VStack align="flex-start" gap="0.5">
                    <Text fontWeight="700" color="white" className="font-mono text-[10px]">STARK COMMUNICATIONS ADDR</Text>
                    <Text fontSize="11px">consult@stark.technologies (Diagnostic Inbox)</Text>
                  </VStack>
                </HStack>

                <HStack gap="3" align="flex-start">
                  <Box p="1.5" bg="rgba(99, 102, 241, 0.08)" borderRadius="lg" className="flex-shrink-0">
                    <Sparkles size={14} className="text-indigo-400" />
                  </Box>
                  <VStack align="flex-start" gap="0.5">
                    <Text fontWeight="700" color="white" className="font-mono text-[10px]">GLOBAL AVAILABILITY</Text>
                    <Text fontSize="11px">Operating remote delivery hubs across Americas & EMEA.</Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </Box>

          {/* Form / Success Frame (Right Column) */}
          <Box
            gridColumn={{ lg: "span 7" }}
            bg="rgba(15, 23, 42, 0.3)"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.06)"
            borderRadius="2xl"
            p={{ base: "6", md: "8" }}
            backdropFilter="blur(10px)"
          >
            {submitted ? (
              // Case Successful submission ticker
              <VStack gap="6" py="8" textAlign="center" align="center" width="full">
                <Box p="4" bg="rgba(16, 185, 129, 0.08)" border="1px solid" borderColor="emerald.500/25" borderRadius="full">
                  <CheckCircle2 size={44} className="text-emerald-400 animate-bounce" />
                </Box>
                <Box>
                  <Badge bg="rgba(16, 185, 129, 0.08)" color="emerald.400" border="1px solid" borderColor="emerald.400/20" mb="2" fontFamily="mono" px="3" py="1">
                    TRANSMISSION COMPLETE
                  </Badge>
                  <Heading as="h3" fontSize="2xl" color="white" fontWeight="800">
                    Inquiry Engaged.
                  </Heading>
                  <Text fontSize="xs" color="gray-400" maxW="md" mt="3" lineHeight="1.6">
                    Diagnostic values acknowledged. An allocation lead engineer has received the catalog request. Review and layout alignment has been queued.
                  </Text>
                </Box>

                {/* Secure Stark Ticker Badge */}
                <Box bg="rgba(0,0,0,0.2)" border="1px solid" borderColor="rgba(255, 255, 255, 0.04)" borderRadius="xl" px="5" py="4" width="full" maxW="380px" textAlign="left">
                  <Flex justify="space-between" align="center" mb="2.5" borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.04)" pb="2">
                    <Text color="gray-500" fontSize="10px" fontFamily="mono">DIAGNOSTIC ID REGISTERED</Text>
                    <Badge color="cyan.400" bg="rgba(6, 182, 212, 0.08)" fontSize="9px" fontFamily="mono" px="2" py="0.5">{generatedTicket}</Badge>
                  </Flex>
                  <VStack align="stretch" gap="1.5" fontSize="11px" className="font-mono text-gray-400">
                    <Flex justify="space-between">
                      <span>Sender:</span>
                      <span className="text-white">{formData.name}</span>
                    </Flex>
                    <Flex justify="space-between">
                      <span>Email target:</span>
                      <span className="text-white">{formData.email}</span>
                    </Flex>
                    <Flex justify="space-between">
                      <span>Service category:</span>
                      <span className="text-white no-of-lines-{1}">{formData.serviceInterest}</span>
                    </Flex>
                  </VStack>
                </Box>

                <Button
                  onClick={handleNewInquiry}
                  bg="rgba(255, 255, 255, 0.03)"
                  color="white"
                  fontWeight="600"
                  fontSize="xs"
                  borderRadius="xl"
                  px="6"
                  py="4"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  className="hover:bg-white hover:text-slate-950 hover:border-transparent active:scale-[0.98] transition-all cursor-pointer"
                >
                  Create New Inquiry
                </Button>
              </VStack>
            ) : (
              // Form inputs
              <form onSubmit={handleSubmit}>
                <VStack gap="5" align="stretch">
                  
                  {/* Service selections drop-menu */}
                  <Box>
                    <Text fontSize="10px" color="gray-400" fontWeight="700" fontFamily="mono" mb="2">
                      01 / SELECTION CAT
                    </Text>
                    <div className="relative">
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => handleInputChange("serviceInterest", e.target.value)}
                        className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white outline-none cursor-pointer focus:border-cyan-400/50 appearance-none font-sans"
                      >
                        <option value="Core Platform Solutions" className="bg-slate-950">Core Software Platforms</option>
                        <option value="Cloud Kubernetes Deploy" className="bg-slate-950">Self-Healing Cloud / IaC</option>
                        <option value="High Throughput APIs" className="bg-slate-950">High-Throughput APIs / Ledger</option>
                        <option value="AI Vector Agent Deploy" className="bg-slate-950">AI & LLM Embeddings Deploy</option>
                        <option value="Full Architectural Custom Solution" className="bg-slate-950">Bespoke SLA Architecture</option>
                      </select>
                    </div>
                  </Box>

                  {/* Two columns inputs name & Diagnostic email */}
                  <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
                    <Box>
                      <Text fontSize="10px" color="gray-400" fontWeight="700" fontFamily="mono" mb="2">
                        02 / SENDER NAMES
                      </Text>
                      <input
                        type="text"
                        placeholder="John Stark"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-cyan-400/50 placeholder:text-gray-600 font-sans"
                      />
                      {errors.name && (
                        <HStack gap="1" mt="1.5" className="text-red-400 text-[10px]">
                          <ShieldAlert size={12} />
                          <span>{errors.name}</span>
                        </HStack>
                      )}
                    </Box>

                    <Box>
                      <Text fontSize="10px" color="gray-400" fontWeight="700" fontFamily="mono" mb="2">
                        03 / EMAIL TARGET
                      </Text>
                      <input
                        type="email"
                        placeholder="john@stark.io"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-cyan-400/50 placeholder:text-gray-600 font-sans"
                      />
                      {errors.email && (
                        <HStack gap="1" mt="1.5" className="text-red-400 text-[10px]">
                          <ShieldAlert size={12} />
                          <span>{errors.email}</span>
                        </HStack>
                      )}
                    </Box>
                  </SimpleGrid>

                  {/* Corporate enterprise name */}
                  <Box>
                    <Text fontSize="10px" color="gray-400" fontWeight="700" fontFamily="mono" mb="2">
                      04 / ENTERPRISE ENTITY (OPTIONAL)
                    </Text>
                    <input
                      type="text"
                      placeholder="Stark Industries"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-cyan-400/50 placeholder:text-gray-600 font-sans"
                    />
                  </Box>

                  {/* Core engineering message inputs */}
                  <Box>
                    <Text fontSize="10px" color="gray-400" fontWeight="700" fontFamily="mono" mb="2">
                      05 / PROJECT BLUEPRINT & SPEC DETAILS
                    </Text>
                    <textarea
                      rows={5}
                      placeholder="Please details your throughput limits, custom architecture targets, SLA delivery speed expectations, or past database scaling blocks..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-cyan-400/50 placeholder:text-gray-600 resize-none font-sans"
                    />
                    {errors.message && (
                      <HStack gap="1" mt="1.5" className="text-red-400 text-[10px]">
                        <ShieldAlert size={12} />
                        <span>{errors.message}</span>
                      </HStack>
                    )}
                  </Box>

                  {/* Trigger Transmissions Submit */}
                  <Box pt="2">
                    <Button
                      type="submit"
                      bg="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                      color="white"
                      fontWeight="700"
                      fontSize="xs"
                      borderRadius="xl"
                      py="5.5"
                      width="full"
                      boxShadow="0 4px 14px rgba(6, 182, 212, 0.3)"
                      className="hover:scale-[1.01] hover:shadow-[0_4px_18px_rgba(6, 182, 212, 0.45)] transition-all duration-200 cursor-pointer flex gap-1.5 justify-center items-center font-bold"
                    >
                      <span>Transmit Diagnostics Ticker</span>
                      <Send size={13} />
                    </Button>
                  </Box>

                </VStack>
              </form>
            )}
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
}
