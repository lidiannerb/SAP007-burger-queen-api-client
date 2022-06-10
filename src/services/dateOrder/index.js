import { format } from "date-fns";

export const dateOrder = (param) => {
  const date = new Date(param);
  const formattDate = format(date, "dd.MM.yyyy HH:mm");
  return formattDate;
};