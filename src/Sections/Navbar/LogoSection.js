import { Stack, Typography, useTheme } from "@mui/material";
import "./index.css";
import { Airdrop } from "iconsax-react";

const LogoSection = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
        spacing={1}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <Airdrop size="28" color={theme.palette.primary.dark} />
        <Typography
          className="logoSection"
          sx={{
            fontFamily: '"Aldrich", sans-serif',
            fontSize: "22px",
            color: theme.palette.primary.dark,
            fontWeight: 600,
          }}
        >
          Air Pulse
        </Typography>
      </Stack>
    </>
  );
};

export default LogoSection;
