import instance from "..";

export const getAqi = (params) => {
  return instance.get(
    `/data/2.5/air_pollution?lat=${params.lat}&lon=${params.lon}`
  );
};
