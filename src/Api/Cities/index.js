import instance from "..";

export const getCities = (params) => {
  return instance.get(`/geo/1.0/direct?q=${params.city_name}&limit=5`);
};
