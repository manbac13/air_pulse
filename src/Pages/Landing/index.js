import { Grid2, Typography } from "@mui/material";
import Navbar from "../Navbar";
import LeftSection from "../Left";
import RightSection from "../Right";
import MiddleSection from "../Middle";

const Landing = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          p: 3,
          px: { xs: 3, sm: 4, md: 6 },
        }}
        spacing={2}
      >
        <Grid2 size={{ xs: 12 }}>
          <Navbar />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 7 }}>
          <LeftSection />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
          <MiddleSection />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 2 }}>
          <RightSection />
        </Grid2>
        <Grid2>
          <Typography sx={{ fontSize: "12px" }}>
            * This website is in the developmental phase, and some data or
            features may contain errors.
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Landing;
