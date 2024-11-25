import instance from "..";

export const getForecast = (params) => {
  return instance.get(`/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}`);
};
