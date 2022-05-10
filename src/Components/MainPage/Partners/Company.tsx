import { Box, Image } from "@chakra-ui/react";
import { ICONS_PATH } from "constants/settings";

type CompanyProps = {
  picture: string;
  alt: string;
};

const Company: React.FC<CompanyProps> = ({ picture, alt }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" py="10px">
      <Image
        src={`${ICONS_PATH}/${picture}`}
        alt={alt}
        h={["80%", "80%", "auto"]}
        w={["80%", "80%", "auto"]}
      />
    </Box>
  );
};

export default Company;
