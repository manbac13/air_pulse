import React from "react";
import { Card } from "@mui/material";
import PropTypes from "prop-types";

const MainCard = ({ children }) => {
  return (
    <Card
      sx={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.03)", // Minimal shadow
        borderRadius: "12px", // Rounded corners
        padding: 2, // Optional padding inside the card
        border: "1px solid #e0e0e0", // Optional border
      }}
    >
      {children}
    </Card>
  );
};

MainCard.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are passed
};

export default MainCard;
