import {format, differenceInMinutes, minutesToHours } from "date-fns";

export const dateOrder = (param) => {
  const date = new Date(param);
  const formattDate = format(date, "dd.MM.yyyy HH:mm");
  return formattDate;
};

export const preparationTime = (startOfPreparation, endOfPreparation) => {
  const createAt = new Date(startOfPreparation);
  const processedAt = new Date(endOfPreparation);

  const timePreparation = differenceInMinutes(processedAt, createAt);
  if(timePreparation < 60) {
    return `${timePreparation} minutos`;
  }else {
    return `${minutesToHours(timePreparation)} horas`;
  }

};
