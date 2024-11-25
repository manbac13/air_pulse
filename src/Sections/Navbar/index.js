import {
  Autocomplete,
  InputAdornment,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { SearchNormal } from "iconsax-react";
import { useEffect, useState } from "react";
import useCities from "../../Hooks/Cities/useCities";
import { debounce } from "lodash";
import useWeather from "../../Hooks/Weather/useWeather";
import useAqi from "../../Hooks/Aqi/useAqi";
import useForecast from "../../Hooks/Forecast/useForecast";
import { defaultCity } from "../../config";

const SearchBar = () => {
  const theme = useTheme();
  const [search, setSearch] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const { getCitiesAction, cities, clearDataAction, setLocationAction } =
    useCities();

  const { getCurrentWeatherDataAction } = useWeather();
  const { getAqiAction } = useAqi();
  const { getForecastAction } = useForecast();

  const handleInputChange = (event, newValue) => {
    if (newValue === "") {
      console.log("Input was cleared");
    }
    setSearch(newValue);
  };

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
    newValue && setLocationAction(newValue);
    getCurrentWeatherDataAction(newValue);
    getAqiAction(newValue);
    getForecastAction(newValue);
  };

  const fetchCities = (search) => {
    getCitiesAction({ city_name: search });
  };

  const debouncingFetchCities = debounce(fetchCities, 0);

  useEffect(() => {
    if (search) {
      debouncingFetchCities(search);
    } else {
      clearDataAction();
    }
  }, [search]);

  useEffect(() => {
    setSelectedValue(defaultCity);
    setLocationAction(defaultCity);
    getCurrentWeatherDataAction(defaultCity);
    getAqiAction(defaultCity);
    getForecastAction(defaultCity);
  }, []);
  return (
    <>
      <Stack width={"65%"}>
        <Autocomplete
          size="small"
          fullWidth
          id="free-solo-demo"
          freeSolo
          options={cities}
          getOptionLabel={(option) =>
            `${option?.name}, ${option?.state}, ${option?.country}`
          } // Format display string
          value={selectedValue || null}
          onInputChange={handleInputChange}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search City"
              // onChange={handleSearch}
              sx={{
                // Apply styles directly here
                backgroundColor: theme.palette.grey[200],
                borderRadius: "8px", // Adjust to create semicircular edges
                "& .MuiInputBase-root": {
                  borderRadius: "8px", // Apply to the input's root element
                  // paddingLeft: "16px",
                  fontFamily: '"Montserrat", sans-serif',
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none", // Removes border
                  },
                  "&:hover fieldset": {
                    border: "none", // No border on hover
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#fff", // White background when focused
                    transition: "background-color 0.7s ease",
                    "& fieldset": {
                      border: `2px solid ${theme.palette.primary.light}`, // No border when focused
                    },
                  },
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchNormal
                      size="18"
                      color={theme.palette.grey[700]}
                      style={{ marginLeft: "8px" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Stack>
    </>
  );
};
export default SearchBar;
