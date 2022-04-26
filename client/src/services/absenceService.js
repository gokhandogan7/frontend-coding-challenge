import { API } from "./axiosInstence";

const getAllAbsences = async () => {
  const { data } = await API.get("/absences");

  return data;
};

export const absenceServices = {
  getAllAbsences,
};
