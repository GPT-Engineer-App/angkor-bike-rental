import { Box, Button, Container, Heading, Image, Stack, Text, Flex, useBreakpointValue, Icon } from "@chakra-ui/react";
import { FaBicycle } from "react-icons/fa";

const Index = () => {
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={8} align="center" justify="center" py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Bike Renting to Angkor Wat
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Experience the majestic beauty of Angkor Wat on two wheels. Discover the hidden paths and historical wonders in a sustainable way.
        </Text>
        <Box boxSize="sm" boxShadow="lg" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbmdrb3IlMjBXYXR8ZW58MHx8fHwxNzA5Nzk1MzgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Angkor Wat" />
        </Box>
        <Flex direction={["column", "row"]} gap={4}>
          <Button leftIcon={<Icon as={FaBicycle} />} colorScheme="teal" size={buttonSize}>
            Rent a Bike
          </Button>
          <Button colorScheme="gray" size={buttonSize}>
            Learn More
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
