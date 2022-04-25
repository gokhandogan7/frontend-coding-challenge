import { API } from "./axiosInstence";

const getAllAbsences = async () => {
  const { data } = await API.get("/absences");
  console.log('all data',data)

  return data;
};

export const absenceServices = {
  getAllAbsences,
};
