import { Divider, Stack, Typography, useTheme } from "@mui/material";
import { convertTimeIst, weatherIcon } from "../../Utils/Common";

const ForecastCard = ({ data }) => {
  const theme = useTheme();
  console.log("data passed", data);
  return (
    <>
      <Stack direction={"row"} sx={{ py: 2 }}>
        {/* left section */}
        <Stack
          sx={{ width: "70%" }}
          direction={"row"}
          spacing={1}
          alignItems={"center"}
        >
          {weatherIcon(data?.weather[0]?.main, 50)}
          <Stack>
            <Typography
              sx={{
                fontSize: "14px",
                color: theme.palette.grey[700],
                fontWeight: "600",
              }}
            >
              {convertTimeIst(data?.dt)}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {data?.weather[0]?.description}
            </Typography>
          </Stack>
        </Stack>
        <Divider orientation="vertical" flexItem />
        {/* /-------right section----------- */}
        <Stack
          sx={{ width: "30%" }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            {`${(data?.main?.temp - 273.15).toFixed(0)}`}&#176;C
          </Typography>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};

export default ForecastCard;
