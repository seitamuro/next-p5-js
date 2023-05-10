import { Box } from "@chakra-ui/react";

import SketchComponent from "@/components/sketch";

export default function Home() {
  return (
    <>
      <Box>てすと</Box>
      <Box rounded="md" maxWidth="100">
        <SketchComponent />
      </Box>
    </>
  );
}
