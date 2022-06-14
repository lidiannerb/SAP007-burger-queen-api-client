 export const dataFilter = (data, type) => {
  return data.filter((element) => element.sub_type === type);
};

export const dataFilterOrder = (data, type) => {
  return data.filter((element) => element.status != type);
};

export const dataFilterOrdersDone = (data, type) => {
  return data.filter((element) => element.status === type);
};
