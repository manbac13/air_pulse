import { Box, Grid2, Stack, Tab } from "@mui/material";
import MainCard from "../../Components/MainCard";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import useForecast from "../../Hooks/Forecast/useForecast";
import ForecastCard from "../../Components/ForecastCard";
import { useTheme } from "@emotion/react";

const MiddleSection = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const { todayForecast, tomorrowForecast } = useForecast();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <MainCard>
        <Stack /* sx={{ height: "457.5px" }} */>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Today" value="1" />
                  <Tab label="Tomorrow" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ px: "0px", py: 1 }}>
                <Stack
                  sx={{
                    height: "392.5px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: 3,
                      height: 2, // Customize scrollbar width,
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: theme.palette.divider, // Customize scrollbar thumb color,
                      borderRadius: "10px",
                    },
                  }}
                >
                  <Grid2 container>
                    {todayForecast?.map((item, index) => (
                      <Grid2 size={12} key={index}>
                        <ForecastCard data={item} />
                      </Grid2>
                    ))}
                  </Grid2>
                </Stack>
              </TabPanel>
              <TabPanel value="2" sx={{ px: "0px", py: 1 }}>
                <Stack
                  sx={{
                    height: "392.5px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: 3,
                      height: 2, // Customize scrollbar width,
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: theme.palette.divider, // Customize scrollbar thumb color,
                      borderRadius: "10px",
                    },
                  }}
                >
                  <Grid2 container>
                    {tomorrowForecast?.map((item, index) => (
                      <Grid2 size={12} key={index}>
                        <ForecastCard data={item} />
                      </Grid2>
                    ))}
                  </Grid2>
                </Stack>
              </TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </MainCard>
    </>
  );
};

export default MiddleSection;
