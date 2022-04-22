import { Box, Image } from "@chakra-ui/react";

import { ICONS_PATH } from "../../../constants/settings";

type CompanyProps = {
  picture: string;
  alt: string;
};

const Company: React.FC<CompanyProps> = ({ picture, alt }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" py="10px">
      <Image src={`${ICONS_PATH}/${picture}`} alt={alt} />
    </Box>
  );
};

export default Company;
