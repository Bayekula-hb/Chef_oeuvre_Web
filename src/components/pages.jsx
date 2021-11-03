import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Box } from "@mui/material";

const Page = forwardRef(({ children, ...other }, ref) => (
  <Box ref={ref} {...other} sx={{ zIndex: 9990 }}>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Page;
