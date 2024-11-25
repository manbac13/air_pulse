import {
  Button,
  Grid2,
  IconButton,
  Popover,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LogoSection from "../../Sections/Navbar/LogoSection";
import SearchBar from "../../Sections/Navbar";
import { Location, Notification, Setting2, Sun1 } from "iconsax-react";
import MainCard from "../../Components/MainCard";
import useCities from "../../Hooks/Cities/useCities";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const { location } = useCities();

  //popover
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //---------------------------------------------
  return (
    <>
      <Stack
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          mb: 1,
        }}
      >
        <LogoSection />
      </Stack>
      <MainCard>
        <Grid2
          container
          display={"flex"}
          alignItems={"center"}
          spacing={{ xs: 1, sm: 0 }}
        >
          <Grid2
            size={{ xs: 12, sm: 12, md: 3 }}
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            <LogoSection />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack
              width={"100%"}
              direction={"row"}
              spacing={2}
              justifyContent={"space-around"}
            >
              <Stack
                direction={"row"}
                spacing={1}
                alignItems={"center"}
                sx={{ visibility: location ? "inherit" : "hidden" }}
              >
                <Location size="20" />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  }}
                >
                  {location}
                </Typography>
              </Stack>
              <SearchBar />
            </Stack>
          </Grid2>
          <Grid2
            size={{ xs: 0, sm: 3 }}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <Stack direction={"row"} justifyContent={"flex-end"} spacing={3}>
              <IconButton onClick={handleClick}>
                <Notification />
              </IconButton>
              <IconButton>
                <Setting2 />
              </IconButton>
              <Button
                startIcon={<Sun1 size="24" />}
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: theme.palette.common.black,
                  borderRadius: "12px",
                }}
                size="small"
              >
                Dark
              </Button>
            </Stack>
          </Grid2>
        </Grid2>
      </MainCard>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>
          You don&apos;t have any notifications.
        </Typography>
      </Popover>
    </>
  );
};

export default Navbar;
