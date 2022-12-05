import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Map = () => {
  return (
    <Box
      mt={{
        sm: "40px",
        md: "40px",
        lg: "40px",
      }}
    >
      <Image
        src="https://res.cloudinary.com/wavecrest1/image/upload/v1669113391/wetland/Group_67_algkgk.png"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      />
    </Box>
  );
};

export default Map;
